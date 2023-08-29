// This file is Free Software under the MIT License
// without warranty, see README.md and LICENSES/MIT.txt for details.
//
// SPDX-License-Identifier: MIT
//
// SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
// Software-Engineering: 2023 Intevation GmbH <https://intevation.de>

import { ProductStatusSymbol, type Vulnerability } from "./productvulnerabilitiestypes";

const generateProductVulnerabilities = (jsonDocument: any) => {
  const products = extractProducts(jsonDocument);
  let vulnerabilities = extractVulnerabilities(jsonDocument);
  vulnerabilities.sort((vuln1: any, vuln2: any) => {
    if (vuln1.cve < vuln2.cve) return -1;
    if (vuln1.cve > vuln2.cve) return 1;
    return 0;
  });
  const result = generateCrossTableFrom(products, vulnerabilities);
  return result;
};

const generateCrossTableFrom = (products: any, vulnerabilities: any) => {
  let result = [];
  let header = ["Product", "Total result"];
  const getCVE = vulnerabilities.map((vulnerability: any) => vulnerability.cve);
  header = header.concat(getCVE);
  result.push(header);
  let productLines = products.map((product: any) => {
    let line = [product.name];
    line = line.concat(generateLineWith(product, vulnerabilities));
    return line;
  });
  productLines.sort((line1: string[], line2: string[]) => {
    if (line1[0] < line2[0]) return -1;
    if (line1[0] > line2[0]) return 1;
    return 0;
  });
  result = [...result, ...productLines];
  return result;
};

const generateLineWith = (product: any, vulnerabilities: any) => {
  const DUMMY_TOTAL = "N.A";
  const line: any = [DUMMY_TOTAL];
  vulnerabilities.forEach((vulnerability: any) => {
    let column = "";
    if (vulnerability.fixed?.[product.product_id]) {
      column += ProductStatusSymbol.FIXED;
    }
    if (vulnerability.under_investigation?.[product.product_id]) {
      column += ProductStatusSymbol.UNDER_INVESTIGATION;
    }
    if (vulnerability.known_affected?.[product.product_id]) {
      column += ProductStatusSymbol.KNOWN_AFFECTED;
    }
    if (vulnerability.known_not_affected?.[product.product_id]) {
      column += ProductStatusSymbol.NOT_AFFECTED;
    }
    if (vulnerability.recommended?.[product.product_id]) {
      column += ProductStatusSymbol.RECOMMENDED;
    }
    line.push(column);
  });
  const calculateLineTotal = (line: string[]) => {
    return DUMMY_TOTAL;
  };
  line[0] = calculateLineTotal(line);
  return line;
};

const extractProducts = (jsonDocument: any) => {
  if (!jsonDocument.product_tree || !jsonDocument.product_tree.branches) {
    return [];
  }
  return jsonDocument.product_tree.branches.reduce(parseBranch, []);
};

const parseBranch = (acc: any, branch: any) => {
  if (branch.branches) {
    branch.branches.forEach((subbranch: any) => {
      acc.concat(parseBranch(acc, subbranch));
    });
  } else {
    if (branch.product && branch.product.product_id && branch.product.name) {
      acc.push({ product_id: branch.product.product_id, name: branch.product.name });
    }
  }
  return acc;
};

const generateDictFrom = (productStatus: any, section: string) => {
  return productStatus[section].reduce((o: any, n: string) => {
    o[n] = n;
    return o;
  }, {});
};

const extractVulnerabilities = (jsonDocument: any) => {
  if (!jsonDocument.vulnerabilities) {
    return [];
  }
  return jsonDocument.vulnerabilities.map((vulnerability: any) => {
    if (!vulnerability.cve) {
      return {};
    }
    const result: Vulnerability = {
      cve: vulnerability.cve
    };
    if (vulnerability.product_status) {
      if (vulnerability.product_status.known_affected) {
        result.known_affected = generateDictFrom(vulnerability.product_status, "known_affected");
      }
      if (vulnerability.product_status.fixed) {
        result.fixed = generateDictFrom(vulnerability.product_status, "fixed");
      }
      if (vulnerability.product_status.under_investigation) {
        result.under_investigation = generateDictFrom(
          vulnerability.product_status,
          "under_investigation"
        );
      }
      if (vulnerability.product_status.known_not_affected) {
        result.known_not_affected = generateDictFrom(
          vulnerability.product_status,
          "known_not_affected"
        );
      }
      if (vulnerability.product_status.recommended) {
        result.recommended = generateDictFrom(vulnerability.product_status, "recommended");
      }
    }
    return result;
  });
};

export { extractProducts, extractVulnerabilities, generateProductVulnerabilities };
