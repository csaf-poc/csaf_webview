// This file is Free Software under the MIT License
// without warranty, see README.md and LICENSES/MIT.txt for details.
//
// SPDX-License-Identifier: MIT
//
// SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
// Software-Engineering: 2023 Intevation GmbH <https://intevation.de>

/// <reference lib="dom"/>

// This part tests the first half of the Singleview Vulnerabilities collapsible
import { expect, test } from "@playwright/test";
import { readFileSync } from "fs";

test("Vulnerabilities collapsible visibility", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("heading", { name: " Vulnerabilities", exact: true })).toBeVisible();
});

test("Vulnerabilities collapsible functionality", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: " Vulnerabilities", exact: true }).click();
  await expect(page.getByRole("heading", { name: " Vulnerabilities" })).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry visibility", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: " Vulnerabilities", exact: true }).click();
  await expect(page.getByRole("heading", { name: " CVE-2022-27193" })).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry functionality", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: " Vulnerabilities", exact: true }).click();
  await page.getByRole("heading", { name: " CVE-2022-27193" }).click();
  await expect(page.getByRole("heading", { name: " CVE-2022-27193" })).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry CWE ID visibility", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: " Vulnerabilities", exact: true }).click();
  await page.getByRole("heading", { name: " CVE-2022-27193" }).click();
  await expect(page.getByRole("cell", { name: "CWE ID" })).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry CWE ID entry visibility", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: " Vulnerabilities", exact: true }).click();
  await page.getByRole("heading", { name: " CVE-2022-27193" }).click();
  await expect(page.getByRole("cell", { name: "CWE-611" })).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry CWE name visibility", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: " Vulnerabilities", exact: true }).click();
  await page.getByRole("heading", { name: " CVE-2022-27193" }).click();
  await expect(page.getByRole("cell", { name: "CWE Name" })).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry CWE name entry visibility", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: " Vulnerabilities", exact: true }).click();
  await page.getByRole("heading", { name: " CVE-2022-27193" }).click();
  await expect(
    page.getByRole("cell", { name: "Improper Restriction of XML External Entity Reference" })
  ).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry Acknowledgements visibility", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: " Vulnerabilities", exact: true }).click();
  await page.getByRole("heading", { name: " CVE-2022-27193" }).click();
  await expect(page.getByRole("heading", { name: " Acknowledgments" })).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry Acknowledgements functionality", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: " Vulnerabilities", exact: true }).click();
  await page.getByRole("heading", { name: " CVE-2022-27193" }).click();
  await page.getByRole("heading", { name: " Acknowledgments" }).click();
  await expect(page.getByRole("heading", { name: " Acknowledgments" })).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry Acknowledgements Names visibility", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: " Vulnerabilities", exact: true }).click();
  await page.getByRole("heading", { name: " CVE-2022-27193" }).click();
  await page.getByRole("heading", { name: " Acknowledgments" }).click();
  await expect(page.getByRole("cell", { name: "Names", exact: true })).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry Acknowledgements Names entry visibility", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: " Vulnerabilities", exact: true }).click();
  await page.getByRole("heading", { name: " CVE-2022-27193" }).click();
  await page.getByRole("heading", { name: " Acknowledgments" }).click();
  await expect(page.getByRole("cell", { name: "Damian Pfammatter", exact: true })).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry Acknowledgements Organization visibility", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: " Vulnerabilities", exact: true }).click();
  await page.getByRole("heading", { name: " CVE-2022-27193" }).click();
  await page.getByRole("heading", { name: " Acknowledgments" }).click();
  await expect(page.getByRole("cell", { name: "Organization", exact: true })).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry Acknowledgements Organization entry visibility", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: " Vulnerabilities", exact: true }).click();
  await page.getByRole("heading", { name: " CVE-2022-27193" }).click();
  await page.getByRole("heading", { name: " Acknowledgments" }).click();
  await expect(page.getByRole("cell", { name: "Cyber-Defense Campus", exact: true })).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry Acknowledgements Summary visibility", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: " Vulnerabilities", exact: true }).click();
  await page.getByRole("heading", { name: " CVE-2022-27193" }).click();
  await page.getByRole("heading", { name: " Acknowledgments" }).click();
  await expect(page.getByRole("cell", { name: "Summary", exact: true })).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry Acknowledgements Summary entry visibility", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: " Vulnerabilities", exact: true }).click();
  await page.getByRole("heading", { name: " CVE-2022-27193" }).click();
  await page.getByRole("heading", { name: " Acknowledgments" }).click();
  await expect(
    page.getByRole("cell", { name: "Finding and reporting the vulnerability", exact: true })
  ).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry IDs visibility", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: " Vulnerabilities", exact: true }).click();
  await page.getByRole("heading", { name: " CVE-2022-27193" }).click();
  await expect(page.getByRole("heading", { name: " IDs" })).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry IDs functionality", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: " Vulnerabilities", exact: true }).click();
  await page.getByRole("heading", { name: " CVE-2022-27193" }).click();
  await page.getByRole("heading", { name: " IDs" }).click();
  await expect(page.getByRole("heading", { name: " IDs" })).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry IDs Systemname visibility", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: " Vulnerabilities", exact: true }).click();
  await page.getByRole("heading", { name: " CVE-2022-27193" }).click();
  await page.getByRole("heading", { name: " IDs" }).click();
  await expect(page.getByRole("cell", { name: "Systemname" })).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry IDs Systemname entry visibility", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: " Vulnerabilities", exact: true }).click();
  await page.getByRole("heading", { name: " CVE-2022-27193" }).click();
  await page.getByRole("heading", { name: " IDs" }).click();
  await expect(page.getByRole("cell", { name: "Github Issue" })).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry IDs Text visibility", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: " Vulnerabilities", exact: true }).click();
  await page.getByRole("heading", { name: " CVE-2022-27193" }).click();
  await page.getByRole("heading", { name: " IDs" }).click();
  await expect(page.getByRole("cell", { name: "Text", exact: true })).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry IDs Text entry visibility", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: " Vulnerabilities", exact: true }).click();
  await page.getByRole("heading", { name: " CVE-2022-27193" }).click();
  await page.getByRole("heading", { name: " IDs" }).click();
  await expect(page.getByRole("cell", { name: "csaf-tools/CVRF-CSAF-Converter#78" })).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry Notes visibility", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: " Vulnerabilities", exact: true }).click();
  await page.getByRole("heading", { name: " CVE-2022-27193" }).click();
  await expect(page.getByRole("heading", { name: " Notes" })).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry Notes functionality", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: " Vulnerabilities", exact: true }).click();
  await page.getByRole("heading", { name: " CVE-2022-27193" }).click();
  await page.getByRole("heading", { name: " Notes" }).click();
  await expect(page.getByRole("heading", { name: " Notes" })).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry Notes Category:description visibility", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: " Vulnerabilities", exact: true }).click();
  await page.getByRole("heading", { name: " CVE-2022-27193" }).click();
  await page.getByRole("heading", { name: " Notes" }).click();
  await expect(page.getByRole("heading", { name: " Category:description" })).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry Notes Category:description functionality", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: " Vulnerabilities", exact: true }).click();
  await page.getByRole("heading", { name: " CVE-2022-27193" }).click();
  await page.getByRole("heading", { name: " Notes" }).click();
  await page.getByRole("heading", { name: " Category:description" }).click();
  await expect(page.getByRole("heading", { name: " Category:description" })).toBeVisible();
});

test("Vulnerabilities collapsible CVE entry Notes Category:description Category table visibility", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: " Vulnerabilities", exact: true }).click();
  await page.getByRole("heading", { name: " CVE-2022-27193" }).click();
  await page.getByRole("heading", { name: " Notes" }).click();
});
