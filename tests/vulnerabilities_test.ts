// This file is Free Software under the MIT License
// without warranty, see README.md and LICENSES/MIT.txt for details.
//
// SPDX-License-Identifier: MIT
//
// SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
// Software-Engineering: 2023 Intevation GmbH <https://intevation.de>

/// <reference lib="dom"/>


// This part tests the Singleview Vulnerabilities collapsible
import { expect, test } from "@playwright/test";
import { readFileSync } from "fs";

test('Vulnerabilities collapsible visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');
  
  await expect(page.getByRole('heading', { name: ' Vulnerabilities', exact:true })).toBeVisible(); 
});

test('Vulnerabilities collapsible functionality', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await expect(page.getByRole('heading', { name: ' Vulnerabilities'})).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await expect(page.getByRole('heading', { name: ' CVE-2022-27193' })).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry functionality', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await expect(page.getByRole('heading', { name: ' CVE-2022-27193' })).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry CWE ID visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await expect(page.getByRole('cell', { name: 'CWE ID' })).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry CWE ID entry visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await expect(page.getByRole('cell', { name: 'CWE-611' })).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry CWE name visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await expect(page.getByRole('cell', { name: 'CWE Name' })).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry CWE name entry visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await expect(page.getByRole('cell', { name: 'Improper Restriction of XML External Entity Reference' })).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry Acknowledgements visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await expect(page.getByRole('heading', { name: ' Acknowledgments' })).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry Acknowledgements functionality', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' Acknowledgments' }).click(); 
  await expect(page.getByRole('heading', { name: ' Acknowledgments' })).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry Acknowledgements Names visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' Acknowledgments' }).click(); 
  await expect(page.getByRole('cell', { name: 'Names', exact: true })).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry Acknowledgements Names entry visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' Acknowledgments' }).click(); 
  await expect(page.getByRole('cell', { name: 'Damian Pfammatter', exact: true })).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry Acknowledgements Organization visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' Acknowledgments' }).click(); 
  await expect(page.getByRole('cell', { name: 'Organization', exact: true })).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry Acknowledgements Organization entry visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' Acknowledgments' }).click(); 
  await expect(page.getByRole('cell', { name: 'Cyber-Defense Campus', exact: true })).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry Acknowledgements Summary visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' Acknowledgments' }).click(); 
  await expect(page.getByRole('cell', { name: 'Summary', exact: true })).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry Acknowledgements Summary entry visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' Acknowledgments' }).click(); 
  await expect(page.getByRole('cell', { name: 'Finding and reporting the vulnerability', exact: true })).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry IDs visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await expect(page.getByRole('heading', { name: ' IDs' })).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry IDs functionality', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' IDs' }).click(); 
  await expect(page.getByRole('heading', { name: ' IDs' })).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry IDs Systemname visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' IDs' }).click(); 
  await expect(page.getByRole('cell', { name: 'Systemname' })).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry IDs Systemname entry visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' IDs' }).click(); 
  await expect(page.getByRole('cell', { name: 'Github Issue' })).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry IDs Text visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' IDs' }).click(); 
  await expect(page.getByRole('cell', { name: 'Text', exact:true })).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry IDs Text entry visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' IDs' }).click(); 
  await expect(page.getByRole('cell', { name: 'csaf-tools/CVRF-CSAF-Converter#78' })).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry Notes visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await expect(page.getByRole('heading', { name: ' Notes' })).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry Notes functionality', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' Notes' }).click(); 
  await expect(page.getByRole('heading', { name: ' Notes' })).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry Notes Category:description visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' Notes' }).click(); 
  await expect(page.getByRole('heading', { name: ' Category:description' })).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry Notes Category:description functionality', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' Notes' }).click(); 
  await page.getByRole('heading', { name: ' Category:description' }).click();
  await expect(page.getByRole('heading', { name: ' Category:description' })).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry Notes Category:description Category table visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' Notes' }).click(); 
  await page.getByRole('heading', { name: ' Category:description' }).click();
  await expect(page.getByText('Categorydescription TitleVulnerability description Text CSAF Tools CVRF-CSAF-Con')).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry Product status collapsible visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await expect(page.getByRole('heading', { name: ' Product status' })).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry Product status collapsible functionality', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' Product status' }).click();
  await expect(page.getByRole('heading', { name: ' Product status' })).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry Product status collapsible entry First fixed visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' Product status' }).click();
  await expect(page.getByText('First Fixed')).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry Product status collapsible entry First fixed value visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' Product status' }).click();
  await expect(page.getByRole('link', { name: 'CSAF Tools CVRF-CSAF-Converter 1.0.0-rc2' }).first()).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry Product status collapsible entry Fixed visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' Product status' }).click();
  await expect(page.locator('p').filter({ hasText: /^Fixed$/ })).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry Product status collapsible entry Fixed value visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' Product status' }).click();
  await expect(page.getByRole('link', { name: 'CSAF Tools CVRF-CSAF-Converter 1.0.0-rc2' }).nth(1)).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry Product status collapsible entry Known affected visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' Product status' }).click();
  await expect(page.locator('p').filter({ hasText: 'Known affected' })).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry Product status collapsible entry Known affected value visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' Product status' }).click();
  await expect(page.getByRole('link', { name: 'CSAF Tools CVRF-CSAF-Converter 1.0.0-alpha' })).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry Product status collapsible entry Known affected value function', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' Product status' }).click();
  await page.getByRole('link', { name: 'CSAF Tools CVRF-CSAF-Converter 1.0.0-alpha' }).click(); 
  await expect(page.getByText('CSAF Tools CVRF-CSAF-Converter 1.0.0-alpha Product IDCSAF Tools CVRF-CSAF-Conver')).toBeVisible();
});

test('Vulnerabilities collapsible CVE entry Product status collapsible entry Known affected last value visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' Product status' }).click();
  await expect(page.getByRole('link', { name: 'CSAF Tools CVRF-CSAF-Converter 1.0.0-rc1' })).toBeVisible(); 
});

test('Vulnerabilities collapsible CVE entry Remediations collapsible visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await expect(page.getByRole('heading', { name: ' Remediations' })).toBeVisible();
});

test('Vulnerabilities collapsible CVE entry Remediations collapsible functionality', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' Remediations' }).click();
  await expect(page.getByRole('heading', { name: ' Remediations' })).toBeVisible();
});

test('Vulnerabilities collapsible CVE entry Remediations collapsible category visible', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' Remediations' }).click();
  await expect(page.getByRole('heading', { name: ' Category: vendor_fix' })).toBeVisible();
});

test('Vulnerabilities collapsible CVE entry Remediations collapsible category functionality', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' Remediations' }).click();
  await page.getByRole('heading', { name: ' Category: vendor_fix' }).click();
  await expect(page.getByRole('heading', { name: ' Category: vendor_fix' })).toBeVisible();    
});

test('Vulnerabilities collapsible CVE entry Remediations collapsible Category entries visible', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' Remediations' }).click();
  await page.getByRole('heading', { name: ' Category: vendor_fix' }).click();
  await expect(page.getByText('Date2022-03-14T13:10:55.000+01:00 URLhttps://github.com/csaf-tools/')).toBeVisible();    
});

test('Vulnerabilities collapsible CVE entry Remediations collapsible Category Product ID links visible', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' Remediations' }).click();
  await page.getByRole('heading', { name: ' Category: vendor_fix' }).click();
  await expect(page.getByRole('link', { name: 'CSAF Tools CVRF-CSAF-Converter 1.0.0-alpha' })).toBeVisible();    
});

test('Vulnerabilities collapsible CVE entry Remediations collapsible Category Product ID links visible 2', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' Remediations' }).click();
  await page.getByRole('heading', { name: ' Category: vendor_fix' }).click();
  await expect(page.getByRole('link', { name: 'CSAF Tools CVRF-CSAF-Converter 1.0.0-rc1' })).toBeVisible();    
});

// TODO: Possibly fix
test('Vulnerabilities collapsible CVE entry Remediations collapsible Category Product ID link functionality', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' Remediations' }).click();
  await page.getByRole('heading', { name: ' Category: vendor_fix' }).click();
  await page.getByRole('link', { name: 'CSAF Tools CVRF-CSAF-Converter 1.0.0-rc1' }).click;
  await expect(page.getByRole('link', { name: 'CSAF Tools CVRF-CSAF-Converter 1.0.0-rc1' })).toBeVisible();
});

test('Vulnerabilities collapsible CVE entry Scores visible', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await expect(page.getByRole('heading', { name: ' Scores' })).toBeVisible();
});

test('Vulnerabilities collapsible CVE entry Scores functionality', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' Scores' }).click();
  await expect(page.getByRole('heading', { name: 'Score 1' })).toBeVisible();
});

test('Vulnerabilities collapsible CVE entry Scores Score functionality', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' Scores' }).click();
  await page.getByRole('heading', { name: 'Score 1' }).click();
  await expect(page.getByRole('heading', { name: 'Score 1' })).toBeVisible();
});

test('Vulnerabilities collapsible CVE entry Scores Score CVSS  visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' Scores' }).click();
  await page.getByRole('heading', { name: 'Score 1' }).click();
  await page.getByRole('heading', { name: 'CVSS V3.1' }).click();
  await expect(page.getByText('attackComplexityLOW attackVectorLOCAL availabilityImpactLOW baseScore6.1 baseSev')).toBeVisible();
});

test('Vulnerabilities collapsible CVE entry Scores Score ID list visibility', async ({ page }) => {
  await page.goto('/');
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles('./docs/bsi-2022-0001.json');

  await page.getByRole('heading', { name: ' Vulnerabilities', exact:true }).click();  
  await page.getByRole('heading', { name: ' CVE-2022-27193' }).click();
  await page.getByRole('heading', { name: ' Scores' }).click();
  await page.getByRole('heading', { name: 'Score 1' }).click();
  await expect(page.getByRole('list')).toBeVisible();
});
