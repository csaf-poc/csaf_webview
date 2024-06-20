// This file is Free Software under the Apache-2.0 License
// without warranty, see README.md and LICENSES/Apache-2.0.txt for details.
//
// SPDX-License-Identifier: Apache-2.0
//
// SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
// Software-Engineering: 2023 Intevation GmbH <https://intevation.de>

/// <reference lib="dom"/>

// This part tests what is avaible without uploading any files
import { expect, test } from "@playwright/test";
import { readFileSync } from "fs";

test("index page has expected h1", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "CSAF Webview" })).toBeVisible();
});

test("index page has expected version", async ({ page }) => {
  var versionnr = process.env.npm_package_version;
  var version = "v" + versionnr;
  await page.goto("/");
  await expect(page.getByText(version)).toBeVisible();
});

test("index page has file input", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('input[type="file"]')).toBeVisible();
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
  await expect(page.getByRole("link", { name: "Switch to Overview" })).toBeVisible();
});

test("index page Switch to ROLIE-feed Button works", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Switch to Overview" }).click();
  await expect(page.getByRole("link", { name: "Switch to Advisory" })).toBeVisible();
});

test("index page ROLIE feed version has switch to single view button", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Switch to Overview" }).click();
  await expect(page.getByRole("link", { name: "Switch to Advisory" })).toBeVisible();
});

test("index page ROLIE feed version has working switch to single view button", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Switch to Overview" }).click();
  await page.getByRole("link", { name: "Switch to Advisory" }).click();
  await expect(page.getByRole("link", { name: "Switch to Overview" })).toBeVisible();
});
