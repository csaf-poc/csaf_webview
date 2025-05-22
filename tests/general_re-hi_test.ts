// This file is Free Software under the Apache-2.0 License
// without warranty, see README.md and LICENSES/Apache-2.0.txt for details.
//
// SPDX-License-Identifier: Apache-2.0
//
// SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
// Software-Engineering: 2023 Intevation GmbH <https://intevation.de>

/// <reference lib="dom"/>

// This part tests the general info revision history collapsible section

import { expect, test } from "@playwright/test";

test("general collapsible content Revision history", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("heading", { name: "Revision history" })).toBeVisible();
});

test("general collapsible content Revision history function", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Revision history" }).click();
  await expect(page.getByRole("heading", { name: "Revision history" })).toBeVisible();
});

test("general collapsible content Revision history table", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Revision history" }).click();
  await expect(page.locator(".subsection > .collapsible > .collapsible-body")).toBeVisible();
});

test("general collapsible content Revision history Date Cell", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Revision history" }).click();
  await expect(page.getByRole("cell", { name: "Date", exact: true })).toBeVisible();
});

test("general collapsible content Revision history Date cell value", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Revision history" }).click();
  await expect(page.getByRole("cell", { name: "2022-03-17T13:03:42.105Z" }).nth(2)).toBeVisible();
});

test("general collapsible content Revision history Number Cell", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Revision history" }).click();
  await expect(page.getByRole("cell", { name: "Number" })).toBeVisible();
});

test("general collapsible content Revision history Number cell value", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Revision history" }).click();
  await expect(page.getByRole("cell", { name: "1", exact: true }).nth(1)).toBeVisible();
});

test("general collapsible content Revision history Summary Cell", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Revision history" }).click();
  await expect(page.getByRole("cell", { name: "Summary" })).toBeVisible();
});

test("general collapsible content Revision history Summary cell value", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Revision history" }).click();
  await expect(page.getByRole("cell", { name: "Initial revision" })).toBeVisible();
});

test("general collapsible content Revision history Legacy version cell", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Revision history" }).click();
  await expect(page.getByRole("cell", { name: "Legacy_version" })).toBeVisible();
});

test("general collapsible content Revision history Legacy version value", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Revision history" }).click();
  await expect(
    page
      .getByRole("row", { name: "2022-03-17T13:03:42.105Z 1 Initial revision" })
      .getByRole("cell")
      .nth(3)
  ).toBeVisible();
});
