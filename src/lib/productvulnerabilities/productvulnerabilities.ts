import { json } from "@sveltejs/kit";
import { ProductStatus, type Vulnerability } from "./productvulnerabilitiestypes";

const generateProductVulnerabilities = (jsonDocument: any) => {
	const result = [];
	const products = extractProducts(jsonDocument);
	const vulnerabilities = extractVulnerabilities(jsonDocument);
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
