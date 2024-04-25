// This file is Free Software under the Apache-2.0 License
// without warranty, see README.md and LICENSES/Apache-2.0.txt for details.
//
// SPDX-License-Identifier: Apache-2.0
//
// SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
// Software-Engineering: 2023 Intevation GmbH <https://intevation.de>

/// <reference lib="dom"/>

// This part tests the second half of the Singleview Vulnerabilities collapsible
import { expect, test } from "@playwright/test";
import { readFileSync } from "fs";

test("Vulnerabilities collapsible CVE entry Product status collapsible visibility", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" }).click();
  await page.getByRole("heading", { name: "Vulnerabilities", exact: true }).click();

  await expect(page.getByRole("heading", { name: "Product status" })).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry Product status collapsible entry First fixed visibility", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" }).click();
  await page.getByRole("heading", { name: "Vulnerabilities", exact: true }).click();

  await page.getByRole("heading", { name: "Product status" }).click();
  await expect(page.getByText("First Fixed")).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry Product status collapsible entry First fixed value visibility", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" }).click();
  await page.getByRole("heading", { name: "Vulnerabilities", exact: true }).click();

  await page.getByRole("heading", { name: "Product status" }).click();
  await expect(
    page.getByRole("link", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-rc2" }).first()
  ).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry Product status collapsible entry Fixed visibility", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" }).click();
  await page.getByRole("heading", { name: "Vulnerabilities", exact: true }).click();

  await page.getByRole("heading", { name: "Product status" }).click();
  await expect(page.locator("p").filter({ hasText: /^Fixed$/ })).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry Product status collapsible entry Fixed value visibility", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" }).click();
  await page.getByRole("heading", { name: "Vulnerabilities", exact: true }).click();

  await page.getByRole("heading", { name: "Product status" }).click();
  await expect(
    page.getByRole("link", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-rc2" }).nth(1)
  ).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry Product status collapsible entry Known affected visibility", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" }).click();
  await page.getByRole("heading", { name: "Vulnerabilities", exact: true }).click();

  await page.getByRole("heading", { name: "Product status" }).click();
  await expect(page.locator("p").filter({ hasText: "Known affected" })).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry Product status collapsible entry Known affected value visibility", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" }).click();
  await page.getByRole("heading", { name: "Vulnerabilities", exact: true }).click();

  await page.getByRole("heading", { name: "Product status" }).click();
  await page.getByRole("heading", { name: "Remediations" }).click();
  await expect(
    page.getByRole("link", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-alpha" })
  ).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry Product status collapsible entry Known affected value function", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" }).click();
  await page.getByRole("heading", { name: "Vulnerabilities", exact: true }).click();
  await page.getByRole("heading", { name: "Remediations" }).click();

  await page.getByRole("heading", { name: "Product status" }).click();
  await page.getByRole("link", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-alpha" }).click();
  await expect(
    page.getByText(
      "CSAF Tools CVRF-CSAF-Converter 1.0.0-alpha Product IDCSAF Tools CVRF-CSAF-Conver"
    )
  ).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry Product status collapsible entry Known affected last value visibility", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" }).click();
  await page.getByRole("heading", { name: "Vulnerabilities", exact: true }).click();
  await page.getByRole("heading", { name: "Remediations" }).click();

  await page.getByRole("heading", { name: "Product status" }).click();
  await expect(
    page.getByRole("link", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-rc1" })
  ).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry Remediations collapsible visibility", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" }).click();
  await page.getByRole("heading", { name: "Vulnerabilities", exact: true }).click();

  await expect(page.getByRole("heading", { name: "Remediations" })).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry Remediations collapsible functionality", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" }).click();
  await page.getByRole("heading", { name: "Vulnerabilities", exact: true }).click();

  await page.getByRole("heading", { name: "Remediations" }).click();
  await expect(page.getByRole("heading", { name: "Remediations" })).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry Remediations collapsible category visible", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" }).click();
  await page.getByRole("heading", { name: "Vulnerabilities", exact: true }).click();

  await expect(page.getByRole("heading", { name: "Category: vendor_fix" })).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry Remediations collapsible category functionality", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" }).click();
  await page.getByRole("heading", { name: "Vulnerabilities", exact: true }).click();

  await page.getByRole("heading", { name: "Category: vendor_fix" }).click();
  await expect(page.getByText("Date2022-03-14T13:10:55.000+01:00")).toBeHidden();
});

test("Vulnerabilities collapsible CVE entry Remediations collapsible Category entries visible", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" }).click();
  await page.getByRole("heading", { name: "Vulnerabilities", exact: true }).click();

  await expect(page.getByText("Date2022-03-14T13:10:55.000+01:00")).toBeVisible();
  await expect(page.getByText("URLhttps://github.com/csaf-tools/")).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry Remediations collapsible Category Product ID links visible", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" }).click();
  await page.getByRole("heading", { name: "Vulnerabilities", exact: true }).click();

  await expect(
    page.getByRole("link", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-alpha" })
  ).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry Remediations collapsible Category Product ID links visible 2", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" }).click();
  await page.getByRole("heading", { name: "Vulnerabilities", exact: true }).click();

  await expect(
    page.getByRole("link", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-rc1" })
  ).toBeVisible();
});

// TODO: Does not work as expected: Product Tree should open to show Product Tree > Branches > CSAF Tools CVRF-CSAF-Converter 1.0.0-rc1 > Product ID and Product identification helper. Not reproducable
test("Vulnerabilities collapsible CVE entry Remediations collapsible Category Product ID link functionality", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" }).click();
  await page.getByRole("heading", { name: "Vulnerabilities", exact: true }).click();

  await page.getByRole("link", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-rc1" }).click;
  await expect(
    page.getByRole("link", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-rc1" })
  ).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry Scores visible", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" }).click();
  await page.getByRole("heading", { name: "Vulnerabilities", exact: true }).click();

  await expect(page.getByRole("heading", { name: "Scores" })).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry Scores functionality", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" }).click();
  await page.getByRole("heading", { name: "Vulnerabilities", exact: true }).click();

  await expect(page.getByRole("heading", { name: "Score 1" })).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry Scores Score functionality", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" }).click();
  await page.getByRole("heading", { name: "Vulnerabilities", exact: true }).click();

  await page.getByRole("heading", { name: "Scores" }).click();
  await expect(page.getByRole("heading", { name: "Score 1" })).toBeHidden();
});

test("Vulnerabilities collapsible CVE entry Scores Score CVSS  visibility", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" }).click();
  await page.getByRole("heading", { name: "Vulnerabilities", exact: true }).click();

  await page.getByRole("heading", { name: "Score 1" }).click();
  await page.getByRole("heading", { name: "CVSS V3.1" }).click();
  await expect(page.getByText("attackComplexityLOW")).toBeVisible();
  await expect(page.getByText("attackVectorLOCAL")).toBeVisible();
  await expect(page.getByText("availabilityImpactLOW")).toBeVisible();
  await expect(page.getByText("baseScore6.1")).toBeVisible();
  await expect(page.getByText("baseSev")).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry Scores Score ID list visibility", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" }).click();
  await page.getByRole("heading", { name: "Vulnerabilities", exact: true }).click();
  await page.getByRole("heading", { name: "Category: vendor_fix" }).click();

  await page.getByRole("heading", { name: "Score 1" }).click();
  await expect(page.getByRole("list")).toBeVisible();
});
