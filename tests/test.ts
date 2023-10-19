// This file is Free Software under the MIT License
// without warranty, see README.md and LICENSES/MIT.txt for details.
//
// SPDX-License-Identifier: MIT
//
// SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
// Software-Engineering: 2023 Intevation GmbH <https://intevation.de>

/// <reference lib="dom"/>

import { expect, test } from "@playwright/test";
import { readFileSync } from "fs";

test("index page has expected h1", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "CSAF Webview" })).toBeVisible();
});

test("index page has expected version", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole('heading', { name: 'v. 0.6.0' })).toBeVisible();
});

test("index page has file input", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('input[type="file"]')).toBeVisible();
});

test("index page has URL Button", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole('button', { name: ' URL' })).toBeVisible();
});

test("index page has textbox", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('input[type="text"]')).toBeVisible();
});

test("index page has dropbox", async ({ page }) => {
  await page.goto("/");
  const dropzoneElement = await page.waitForSelector("div.droparea");
  const divTextContent = await dropzoneElement.innerText();
  expect(divTextContent).toContain("Drop your CSAF-file here");
});

test("index page has Switch to ROLIE-feed Button", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole('link', { name: 'Switch to ROLIE-feed' })).toBeVisible();
});

test("index page Switch to ROLIE-feed Button works", async ({ page }) => {
  await page.goto("/");
  await page.getByRole('link', { name: 'Switch to ROLIE-feed' }).click();
  await expect(page.getByRole('link', { name: 'Switch to Single View' })).toBeVisible();  
});

test("index page ROLIE feed version has View feed button", async ({ page }) => {
  await page.goto("/");
  await page.getByRole('link', { name: 'Switch to ROLIE-feed' }).click();
  await expect(page.getByRole('button', { name: ' View feed' })).toBeVisible();  
});

test("index page ROLIE feed version has switch to single view button", async ({ page }) => {
  await page.goto("/");
  await page.getByRole('link', { name: 'Switch to ROLIE-feed' }).click();
  await expect(page.getByRole('link', { name: 'Switch to single view' })).toBeVisible();  
});

test("index page ROLIE feed version has working switch to single view button", async ({ page }) => {
  await page.goto("/");
  await page.getByRole('link', { name: 'Switch to ROLIE-feed' }).click();
  await page.getByRole('link', { name: 'Switch to single view' }).click();
  await expect(page.getByRole('link', { name: 'Switch to ROLIE-feed' })).toBeVisible();
});

test("Test dropbox", async ({ page }) => {
  await page.goto("/");
  const buffer = readFileSync("./docs/bsi-2022-0001.json");
  const dataTransfer = await page.evaluateHandle((data: any) => {
    const dt = new DataTransfer();
    const file = new File([data.toString("hex")], "bsi-2022-0001.json", {
      type: "application/json"
    });
    dt.items.add(file);
    return dt;
  }, buffer);

  await page.dispatchEvent(".droparea", "drop", { dataTransfer });
  const dropzoneElement = await page.waitForSelector("div.droparea");
  const divTextContent = await dropzoneElement.innerText();
  expect(divTextContent).toContain('Displaying file "bsi-2022-0001.json".');
});

test('test select file button', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('heading', { name: 'BSI-2022-0001: CVRF-CSAF-Converter: XML External Entities Vulnerability' })).toBeVisible()
});

test('general collapsible visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('heading', { name: ' General' })).toBeVisible()
});

test('general collapsible content ID', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: 'ID' })).toBeVisible()
});

test('general collapsible content ID value', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: 'BSI-2022-0001' })).toBeVisible()
});

test('general collapsible content csaf version', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: 'CSAF-Version' })).toBeVisible()
  });

test('general collapsible content csaf version value', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: '2.0' })).toBeVisible()
  });

test('general collapsible content aggregate severity text', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: 'Aggregate severity text' })).toBeVisible()
  });

test('general collapsible content aggregate severity text value', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: 'moderate' })).toBeVisible()
  });

test('general collapsible content TLP level', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', {name: 'TLP', exact:true})).toBeVisible()
  });

test('general collapsible content TLP value', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: 'WHITE' })).toBeVisible()
  });

test('general collapsible content TLP url', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: 'TLP URL' })).toBeVisible()
  });

test('general collapsible content TLP url value', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: 'https://www.first.org/tlp/' })).toBeVisible()
  });


test('general collapsible content Category field', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: 'Category', exact:true })).toBeVisible()
  });

test('general collapsible content Category field value', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: 'csaf_security_advisory' })).toBeVisible()
  });

test('general collapsible content Title', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: 'Title' })).toBeVisible()
  });

test('general collapsible content Title value', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: 'CVRF-CSAF-Converter: XML External Entities Vulnerability' })).toBeVisible()
  });

test('general collapsible content Publisher name', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: 'Publisher name', exact:true })).toBeVisible()
  });

test('general collapsible content Publisher name value', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: '	Bundesamt für Sicherheit in der Informationstechnik' })).toBeVisible()
  });

test('general collapsible content Publisher category', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: 'Publisher category' })).toBeVisible()
  });

test('general collapsible content Publisher category value', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: 'coordinator' })).toBeVisible()
  });

test('general collapsible content Publisher namespace', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: 'Publisher namespace' })).toBeVisible()
  });

test('general collapsible content Publisher namespace value', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: '	https://www.bsi.bund.de' })).toBeVisible()
  });

test('general collapsible content Language', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: 'Language' })).toBeVisible()
  });

test('general collapsible content Language value', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: 'en-US' })).toBeVisible()
  });

test('general collapsible content Published', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: 'Published' })).toBeVisible()
  });

test('general collapsible content Published value', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: '2022-03-17T13:03:42.105Z' }).first()).toBeVisible()
  });

test('general collapsible Last update content ', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: 'Last update' })).toBeVisible()
  });

test('general collapsible content Last update value', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: '2022-03-17T13:03:42.105Z' }).nth(1)).toBeVisible()
  });

test('general collapsible content Tracking version', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: 'Tracking version' })).toBeVisible()
  });

test('general collapsible content Tracking version value', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: '1', exact:true })).toBeVisible()
  });

test('general collapsible content Generator engine', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: 'Generator engine', exact:true })).toBeVisible()
  });

test('general collapsible content Generator engine value', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: 'Secvisogram' })).toBeVisible()
  });

test('general collapsible content Generator engine version', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: 'Generator engine version' })).toBeVisible()
  });

test('general collapsible content Generator engine version value', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: '1.12.1' })).toBeVisible()
  });

test('general collapsible content Generator date', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: 'Generator date' })).toBeVisible()
  });

test('general collapsible content Generator date value', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('cell', { name: '2022-03-17T13:09:42.105Z' })).toBeVisible()
  });

test('general collapsible content Revision history', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('heading', { name: ' Revision history' })).toBeVisible()
  });

test('general collapsible content Revision history function', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await page.getByRole('heading', { name: ' Revision history' }).click();
  await expect(page.getByRole('heading', { name: ' Revision history' })).toBeVisible()
  });

test('general collapsible content Revision history table', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await page.getByRole('heading', { name: ' Revision history' }).click();
  await expect(page.locator('.subsection > .collapsible > .body')).toBeVisible()
  });


test('general collapsible content Revision history Date Cell', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await page.getByRole('heading', { name: ' Revision history' }).click();
  await expect(page.getByRole('cell', { name: 'Date', exact: true })).toBeVisible()
  });

test('general collapsible content Revision history Date cell value', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await page.getByRole('heading', { name: ' Revision history' }).click();
  await expect(page.getByRole('cell', { name: '2022-03-17T13:03:42.105Z' }).nth(2)).toBeVisible()
  });

test('general collapsible content Revision history Number Cell', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await page.getByRole('heading', { name: ' Revision history' }).click();
  await expect(page.getByRole('cell', { name: 'Number' })).toBeVisible()
  });

test('general collapsible content Revision history Number cell value', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await page.getByRole('heading', { name: ' Revision history' }).click();
  await expect(page.getByRole('cell', { name: '1', exact: true }).nth(1)).toBeVisible()
  });


test('general collapsible content Revision history Summary Cell', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await page.getByRole('heading', { name: ' Revision history' }).click();
  await expect(page.getByRole('cell', { name: 'Summary' })).toBeVisible()
  });

test('general collapsible content Revision history Summary cell value', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await page.getByRole('heading', { name: ' Revision history' }).click();
  await expect(page.getByRole('cell', { name: 'Initial revision' })).toBeVisible()
  });


test('general collapsible content Revision history Legacy version cell', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await page.getByRole('heading', { name: ' Revision history' }).click();
  await expect(page.getByRole('cell', { name: 'Legacy_version' })).toBeVisible()
  });

test('general collapsible content Revision history Legacy version value', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await page.getByRole('heading', { name: ' Revision history' }).click();
  await expect(page.getByRole('row', { name: '2022-03-17T13:03:42.105Z 1 Initial revision' }).getByRole('cell').nth(3)).toBeVisible()
  });

test('Vulnerabilities overview collapsible visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('heading', { name: ' Vulnerabilities overview' })).toBeVisible()
  });

test('Vulnerabilities overview collapsible functionality', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await page.getByRole('heading', { name: ' Vulnerabilities overview' }).click(); 
  await expect(page.getByRole('heading', { name: ' Vulnerabilities overview' })).toBeVisible()
  });

test('Vulnerabilities overview collapsible table', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await page.getByRole('heading', { name: ' Vulnerabilities overview' }).click(); 
  await expect(page.locator('div:nth-child(6) > .body').first()).toBeVisible()
  });


test('Vulnerabilities overview collapsible table inner', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await page.getByRole('heading', { name: ' Vulnerabilities overview' }).click(); 
  await expect(page.locator('.body > .row')).toBeVisible()
  });

test('Vulnerabilities overview collapsible product cell', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await page.getByRole('heading', { name: ' Vulnerabilities overview' }).click(); 
  await expect(page.getByRole('cell', { name: 'Product' })).toBeVisible()
  });

test('Vulnerabilities overview collapsible table total result cell', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await page.getByRole('heading', { name: ' Vulnerabilities overview' }).click(); 
  await expect(page.getByRole('cell', { name: 'Total result' })).toBeVisible()
  });

test('Vulnerabilities overview collapsible table CVE Cell', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await page.getByRole('heading', { name: ' Vulnerabilities overview' }).click(); 
  await expect(page.getByRole('cell', { name: 'CVE-2022-27193' })).toBeVisible()
  });

test('Vulnerabilities overview collapsible table CVE Cell link', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await page.getByRole('heading', { name: ' Vulnerabilities overview' }).click(); 
  await expect(page.getByRole('link', { name: 'CVE-2022-27193' })).toBeVisible()
  });


test('Vulnerabilities overview collapsible table CVE Cell entry 1', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await page.getByRole('heading', { name: ' Vulnerabilities overview' }).click(); 
  await expect(page.getByRole('cell', { name: 'CSAF Tools CVRF-CSAF-Converter 1.0.0-alpha (CSAFPID-0001)' })).toBeVisible()
  });

test('Vulnerabilities overview collapsible table CVE Cell link 1', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
    
  await page.getByRole('heading', { name: ' Vulnerabilities overview' }).click(); 
  await expect(page.getByRole('link', { name: 'CSAF Tools CVRF-CSAF-Converter 1.0.0-alpha (CSAFPID-0001)' })).toBeVisible()
  });

test('Vulnerabilities overview collapsible table CVE Cell link 1 total result icon', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
    
  await page.getByRole('heading', { name: ' Vulnerabilities overview' }).click(); 
  await expect(page.getByRole('row', { name: 'CSAF Tools CVRF-CSAF-Converter 1.0.0-alpha (CSAFPID-0001)  ' }).locator('i').first()).toBeVisible()
  });

test('Vulnerabilities overview collapsible table CVE Cell link 1 total result cell', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
    
  await page.getByRole('heading', { name: ' Vulnerabilities overview' }).click(); 
  await expect(page.getByRole('row', { name: 'CSAF Tools CVRF-CSAF-Converter 1.0.0-alpha (CSAFPID-0001)  ' }).getByRole('cell').nth(1)).toBeVisible()
  });

test('Vulnerabilities overview collapsible table CVE Cell link 1 cve result icon', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
    
  await page.getByRole('heading', { name: ' Vulnerabilities overview' }).click(); 
  await expect(page.getByRole('row', { name: 'CSAF Tools CVRF-CSAF-Converter 1.0.0-alpha (CSAFPID-0001)  ' }).locator('i').nth(1)).toBeVisible()
  });

test('Vulnerabilities overview collapsible table CVE Cell link 1 cve result cell', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
    
  await page.getByRole('heading', { name: ' Vulnerabilities overview' }).click(); 
  await expect(page.getByRole('row', { name: 'CSAF Tools CVRF-CSAF-Converter 1.0.0-alpha (CSAFPID-0001)  ' }).getByRole('cell').nth(2)).toBeVisible()
  });

test('Vulnerabilities overview collapsible table CVE Cell entry 2', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await page.getByRole('heading', { name: ' Vulnerabilities overview' }).click(); 
  await expect(page.getByRole('cell', { name: 'CSAF Tools CVRF-CSAF-Converter 1.0.0-dev1 (CSAFPID-0002)' })).toBeVisible()
  });

test('Vulnerabilities overview collapsible table CVE Cell link 2', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
    
  await page.getByRole('heading', { name: ' Vulnerabilities overview' }).click(); 
  await expect(page.getByRole('link', { name: 'CSAF Tools CVRF-CSAF-Converter 1.0.0-dev1 (CSAFPID-0002)' })).toBeVisible()
  });

test('Vulnerabilities overview collapsible table CVE Cell link 2 total result icon', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
    
  await page.getByRole('heading', { name: ' Vulnerabilities overview' }).click(); 
  await expect(page.getByRole('row', { name: 'CSAF Tools CVRF-CSAF-Converter 1.0.0-dev1 (CSAFPID-0002)  ' }).locator('i').first()).toBeVisible()
  });

test('Vulnerabilities overview collapsible table CVE Cell link 2 total result cell', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
    
  await page.getByRole('heading', { name: ' Vulnerabilities overview' }).click(); 
  await expect(page.getByRole('row', { name: 'CSAF Tools CVRF-CSAF-Converter 1.0.0-dev1 (CSAFPID-0002)  ' }).getByRole('cell').nth(1)).toBeVisible()
  });

test('Vulnerabilities overview collapsible table CVE Cell link 2 cve result icon', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
    
  await page.getByRole('heading', { name: ' Vulnerabilities overview' }).click(); 
  await expect(page.getByRole('row', { name: 'CSAF Tools CVRF-CSAF-Converter 1.0.0-dev1 (CSAFPID-0002)  ' }).locator('i').nth(1)).toBeVisible()
  });

test('Vulnerabilities overview collapsible table CVE Cell link 2 cve result cell', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
    
  await page.getByRole('heading', { name: ' Vulnerabilities overview' }).click(); 
  await expect(page.getByRole('row', { name: 'CSAF Tools CVRF-CSAF-Converter 1.0.0-dev1 (CSAFPID-0002)  ' }).getByRole('cell').nth(2)).toBeVisible()
  });

test('Vulnerabilities overview collapsible table CVE Cell entry 6', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await page.getByRole('heading', { name: ' Vulnerabilities overview' }).click(); 
  await expect(page.getByRole('cell', { name: 'CSAF Tools CVRF-CSAF-Converter 1.0.0-rc2 (CSAFPID-0006)' })).toBeVisible()
  });

test('Vulnerabilities overview collapsible table CVE Cell link 6', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
    
  await page.getByRole('heading', { name: ' Vulnerabilities overview' }).click(); 
  await expect(page.getByRole('link', { name: 'CSAF Tools CVRF-CSAF-Converter 1.0.0-rc2 (CSAFPID-0006)' })).toBeVisible()
  });

test('Vulnerabilities overview collapsible table CVE Cell link 6 total result icon', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
    
  await page.getByRole('heading', { name: ' Vulnerabilities overview' }).click(); 
  await expect(page.getByRole('row', { name: 'CSAF Tools CVRF-CSAF-Converter 1.0.0-rc2 (CSAFPID-0006)  ' }).locator('i').first()).toBeVisible()
  });

test('Vulnerabilities overview collapsible table CVE Cell link 6 total result cell', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
    
  await page.getByRole('heading', { name: ' Vulnerabilities overview' }).click(); 
  await expect(page.getByRole('cell', { name: '' }).first()).toBeVisible()
  });

test('Vulnerabilities overview collapsible table CVE Cell link 6 cve result icon', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
    
  await page.getByRole('heading', { name: ' Vulnerabilities overview' }).click(); 
  await expect(page.getByRole('row', { name: 'CSAF Tools CVRF-CSAF-Converter 1.0.0-rc2 (CSAFPID-0006)  ' }).locator('i').nth(1)).toBeVisible()
  });

test('Vulnerabilities overview collapsible table CVE Cell link 6 cve result cell', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
    
  await page.getByRole('heading', { name: ' Vulnerabilities overview' }).click(); 
  await expect(page.getByRole('cell', { name: '' }).nth(1)).toBeVisible()
  });


test('Vulnerabilities overview legend', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
    
  await page.getByRole('heading', { name: ' Vulnerabilities overview' }).click(); 
  await expect(page.getByText('Legend FixedUnder investigationKnown affectedNot affectedRecommended')).toBeVisible()
  });

test('Vulnerabilities overview legend icon 1', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
    
  await page.getByRole('heading', { name: ' Vulnerabilities overview' }).click(); 
  await expect(page.locator('dl i').first()).toBeVisible()
  });

test('Vulnerabilities overview legend icon 2', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
    
  await page.getByRole('heading', { name: ' Vulnerabilities overview' }).click(); 
  await expect(page.locator('dl i').nth(1)).toBeVisible()
  });

test('Vulnerabilities overview legend icon 3', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
    
  await page.getByRole('heading', { name: ' Vulnerabilities overview' }).click(); 
  await expect(page.locator('dl i').nth(2)).toBeVisible()
  });

test('Vulnerabilities overview legend icon 4', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
    
  await page.getByRole('heading', { name: ' Vulnerabilities overview' }).click(); 
  await expect(page.locator('dl i').nth(3)).toBeVisible()
  });

test('Vulnerabilities overview legend icon 5', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
    
  await page.getByRole('heading', { name: ' Vulnerabilities overview' }).click(); 
  await expect(page.locator('dl i').nth(4)).toBeVisible()
  });

