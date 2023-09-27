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
  await expect(page.getByRole("heading", { name: "CSAF Webview+" })).toBeVisible();
});

test("index page has dropbox", async ({ page }) => {
  await page.goto("/");
  const dropzoneElement = await page.waitForSelector("div.droparea");
  const divTextContent = await dropzoneElement.innerText();
  expect(divTextContent).toContain("Drop your CSAF-file here");
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
