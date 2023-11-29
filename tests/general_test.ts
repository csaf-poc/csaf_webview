// This file is Free Software under the MIT License
// without warranty, see README.md and LICENSES/MIT.txt for details.
//
// SPDX-License-Identifier: MIT
//
// SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
// Software-Engineering: 2023 Intevation GmbH <https://intevation.de>

/// <reference lib="dom"/>

// This part tests the general info collapsible section sans revision history which is done within a seperate test file

import { expect, test } from "@playwright/test";
import { readFileSync } from "fs";

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

test("general collapsible visibility", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("heading", { name: " General" })).toBeVisible();
});

test("general collapsible content ID", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("cell", { name: "ID", exact: true })).toBeVisible();
});

test("general collapsible content ID value", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("cell", { name: "BSI-2022-0001" })).toBeVisible();
});

test("general collapsible content csaf version", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("cell", { name: "CSAF-Version" })).toBeVisible();
});

test("general collapsible content csaf version value", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("cell", { name: "2.0" })).toBeVisible();
});

test("general collapsible content aggregate severity text", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("cell", { name: "Aggregate severity text" })).toBeVisible();
});

test("general collapsible content aggregate severity text value", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("cell", { name: "moderate" })).toBeVisible();
});

test("general collapsible content TLP level", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("cell", { name: "TLP", exact: true })).toBeVisible();
});

test("general collapsible content TLP value", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("cell", { name: "WHITE" })).toBeVisible();
});

test("general collapsible content TLP url", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("cell", { name: "TLP URL" })).toBeVisible();
});

test("general collapsible content TLP url value", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("cell", { name: "https://www.first.org/tlp/" })).toBeVisible();
});

test("general collapsible content Category field", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("cell", { name: "Category", exact: true })).toBeVisible();
});

test("general collapsible content Category field value", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("cell", { name: "csaf_security_advisory" })).toBeVisible();
});

test("general collapsible content Title", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("cell", { name: "Title" })).toBeVisible();
});

test("general collapsible content Title value", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(
    page.getByRole("cell", { name: "CVRF-CSAF-Converter: XML External Entities Vulnerability" })
  ).toBeVisible();
});

test("general collapsible content Publisher name", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("cell", { name: "Publisher name", exact: true })).toBeVisible();
});

test("general collapsible content Publisher name value", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(
    page.getByRole("cell", { name: "	Bundesamt für Sicherheit in der Informationstechnik" })
  ).toBeVisible();
});

test("general collapsible content Publisher category", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("cell", { name: "Publisher category" })).toBeVisible();
});

test("general collapsible content Publisher category value", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("cell", { name: "coordinator" })).toBeVisible();
});

test("general collapsible content Publisher namespace", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("cell", { name: "Publisher namespace" })).toBeVisible();
});

test("general collapsible content Publisher namespace value", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("cell", { name: "	https://www.bsi.bund.de" })).toBeVisible();
});

test("general collapsible content Language", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("cell", { name: "Language" })).toBeVisible();
});

test("general collapsible content Language value", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("cell", { name: "en-US" })).toBeVisible();
});

test("general collapsible content Published", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("cell", { name: "Published" })).toBeVisible();
});

test("general collapsible content Published value", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("cell", { name: "2022-03-17T13:03:42.105Z" }).first()).toBeVisible();
});

test("general collapsible Last update content ", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("cell", { name: "Last update" })).toBeVisible();
});

test("general collapsible content Last update value", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("cell", { name: "2022-03-17T13:03:42.105Z" }).nth(1)).toBeVisible();
});

test("general collapsible content Tracking version", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("cell", { name: "Tracking version" })).toBeVisible();
});

test("general collapsible content Tracking version value", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("cell", { name: "1", exact: true })).toBeVisible();
});

test("general collapsible content Generator engine", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("cell", { name: "Generator engine", exact: true })).toBeVisible();
});

test("general collapsible content Generator engine value", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("cell", { name: "Secvisogram" })).toBeVisible();
});

test("general collapsible content Generator engine version", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("cell", { name: "Generator engine version" })).toBeVisible();
});

test("general collapsible content Generator engine version value", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("cell", { name: "1.12.1" })).toBeVisible();
});

test("general collapsible content Generator date", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("cell", { name: "Generator date" })).toBeVisible();
});

test("general collapsible content Generator date value", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("cell", { name: "2022-03-17T13:09:42.105Z" })).toBeVisible();
});
