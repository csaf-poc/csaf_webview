// This file is Free Software under the MIT License
// without warranty, see README.md and LICENSES/MIT.txt for details.
//
// SPDX-License-Identifier: MIT
//
// SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
// Software-Engineering: 2023 Intevation GmbH <https://intevation.de>

/// <reference lib="dom"/>

// This part tests the product tree collapsible section

import { expect, test } from "@playwright/test";
import { readFileSync } from "fs";

test("Product tree collapsible visibility", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("heading", { name: "Product tree" })).toBeVisible();
});

test("Product tree collapsible function", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Product tree" }).click();
  await expect(page.getByRole("heading", { name: "Product tree" })).toBeVisible();
});

test("Product tree collapsible branches visibility", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Product tree" }).click();
  await expect(page.getByRole("heading", { name: "Branches" })).toBeVisible();
});

test("Product tree collapsible branches function", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Product tree" }).click();
  await page.getByRole("heading", { name: "Branches" }).click();
  await expect(page.getByRole("heading", { name: "Branches" })).toBeVisible();
});

test("Product tree collapsible vendor visibility", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Product tree" }).click();
  await expect(
    page.getByText(
      "vendor CSAF Tools product_name CVRF-CSAF-Converter product_version 1.0.0-alpha C"
    )
  ).toBeVisible();
});

test("Product tree collapsible product name visibility", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Product tree" }).click();
  await expect(
    page.getByText(
      "product_name CVRF-CSAF-Converter product_version 1.0.0-alpha CSAF Tools CVRF-CSA"
    )
  ).toBeVisible();
});

test("Product tree collapsible product version tree entry 1 visibility", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Product tree" }).click();
  await expect(
    page.getByText("product_version 1.0.0-alpha CSAF Tools CVRF-CSAF-Converter 1.0.0-alpha")
  ).toBeVisible();
});

test("Product tree collapsible product version tree entry 2 visibility", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Product tree" }).click();
  await expect(
    page.getByText("product_version 1.0.0-dev1 CSAF Tools CVRF-CSAF-Converter 1.0.0-dev1")
  ).toBeVisible();
});

test("Product tree collapsible product version 2 collapsible visibility", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Product tree" }).click();
  await expect(
    page.getByRole("heading", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-dev1" })
  ).toBeVisible();
});

test("Product tree collapsible product version 2 collapsible functionality", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Product tree" }).click();
  await page.getByRole("heading", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-dev1" }).click();
  await expect(
    page.getByRole("heading", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-dev1" })
  ).toBeVisible();
});

test("Product tree collapsible product version 2 collapsible Product ID visibility", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Product tree" }).click();
  await page.getByRole("heading", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-dev1" }).click();
  await expect(page.getByRole("cell", { name: "Product ID" })).toBeVisible();
});

test("Product tree collapsible product version 2 collapsible Product ID entry visibility", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities Overview" }).click();
  await page.getByRole("heading", { name: "Product tree" }).click();
  await page.getByRole("heading", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-dev1" }).click();
  await expect(
    page.getByRole("cell", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-dev1" })
  ).toBeVisible();
});

test("Product tree collapsible product version 2 collapsible Product version helper visibility", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Product tree" }).click();
  await page.getByRole("heading", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-dev1" }).click();
  await expect(page.getByRole("heading", { name: "Product Version Helper" })).toBeVisible();
});

test("Product tree collapsible product version 2 collapsible Product version helper cpe visibility", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Product tree" }).click();
  await page.getByRole("heading", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-dev1" }).click();
  await expect(page.getByRole("cell", { name: "cpe" })).toBeVisible();
});

test("Product tree collapsible product version 2 collapsible Product version helper cpe value visibility", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Product tree" }).click();
  await page.getByRole("heading", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-dev1" }).click();
  await expect(page.getByRole("cell", { name: "c", exact: true })).toBeVisible();
});
