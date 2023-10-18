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
