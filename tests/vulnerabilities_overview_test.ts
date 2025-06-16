// This file is Free Software under the Apache-2.0 License
// without warranty, see README.md and LICENSES/Apache-2.0.txt for details.
//
// SPDX-License-Identifier: Apache-2.0
//
// SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
// Software-Engineering: 2023 Intevation GmbH <https://intevation.de>

/// <reference lib="dom"/>

// This part tests the vulnerabilities overview collapsible section

import { expect, test } from "@playwright/test";

test("Vulnerabilities overview collapsible visibility", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await expect(page.getByRole("heading", { name: "Vulnerabilities overview" })).toBeVisible();
});

test("Vulnerabilities overview collapsible functionality", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" }).click();
  await expect(page.getByRole("heading", { name: "Vulnerabilities overview" })).toBeVisible();
});

test("Vulnerabilities overview collapsible table", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" });
  await expect(page.locator(".collapsible-body").first()).toBeVisible();
});

test("Vulnerabilities overview collapsible table inner", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" });
  await expect(page.locator(".collapsible-body > .crosstable-overview")).toBeVisible();
});

test("Vulnerabilities overview collapsible product cell", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" });
  await expect(page.getByRole("cell", { name: "Product" })).toBeVisible();
});

test("Vulnerabilities overview collapsible table total result cell", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" });
  await expect(page.getByRole("cell", { name: "Total result" })).toBeVisible();
});

test("Vulnerabilities overview collapsible table CVE Cell", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" });
  await expect(page.getByRole("cell", { name: "CVE-2022-27193" })).toBeVisible();
});

test("Vulnerabilities overview collapsible table CVE Cell link", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" });
  await expect(page.getByRole("link", { name: "CVE-2022-27193" })).toBeVisible();
});

test("Vulnerabilities overview collapsible table CVE Cell entry 1", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" });
  await expect(
    page.getByRole("cell", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-alpha (CSAFPID-0001)" })
  ).toBeVisible();
});

test("Vulnerabilities overview collapsible table CVE Cell link 1", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" });
  await expect(
    page.getByRole("link", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-alpha (CSAFPID-0001)" })
  ).toBeVisible();
});

test("Vulnerabilities overview collapsible table CVE Cell link 1 total result icon", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" });
  await expect(
    page
      .getByRole("row", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-alpha (CSAFPID-0001)  " })
      .locator("i")
      .first()
  ).toBeVisible();
});

test("Vulnerabilities overview collapsible table CVE Cell link 1 total result cell", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" });
  await expect(
    page
      .getByRole("row", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-alpha (CSAFPID-0001)  " })
      .getByRole("cell")
      .nth(1)
  ).toBeVisible();
});

test("Vulnerabilities overview collapsible table CVE Cell link 1 cve result icon", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" });
  await expect(
    page
      .getByRole("row", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-alpha (CSAFPID-0001)  " })
      .locator("i")
      .nth(1)
  ).toBeVisible();
});

test("Vulnerabilities overview collapsible table CVE Cell link 1 cve result cell", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" });
  await expect(
    page
      .getByRole("row", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-alpha (CSAFPID-0001)  " })
      .getByRole("cell")
      .nth(2)
  ).toBeVisible();
});

test("Vulnerabilities overview collapsible table CVE Cell entry 2", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" });
  await expect(
    page.getByRole("cell", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-dev1 (CSAFPID-0002)" })
  ).toBeVisible();
});

test("Vulnerabilities overview collapsible table CVE Cell link 2", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" });
  await expect(
    page.getByRole("link", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-dev1 (CSAFPID-0002)" })
  ).toBeVisible();
});

test("Vulnerabilities overview collapsible table CVE Cell link 2 total result icon", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" });
  await expect(
    page
      .getByRole("row", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-dev1 (CSAFPID-0002)  " })
      .locator("i")
      .first()
  ).toBeVisible();
});

test("Vulnerabilities overview collapsible table CVE Cell link 2 total result cell", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" });
  await expect(
    page
      .getByRole("row", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-dev1 (CSAFPID-0002)  " })
      .getByRole("cell")
      .nth(1)
  ).toBeVisible();
});

test("Vulnerabilities overview collapsible table CVE Cell link 2 cve result icon", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" });
  await expect(
    page
      .getByRole("row", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-dev1 (CSAFPID-0002)  " })
      .locator("i")
      .nth(1)
  ).toBeVisible();
});

test("Vulnerabilities overview collapsible table CVE Cell link 2 cve result cell", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" });
  await expect(
    page
      .getByRole("row", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-dev1 (CSAFPID-0002)  " })
      .getByRole("cell")
      .nth(2)
  ).toBeVisible();
});

test("Vulnerabilities overview collapsible table CVE Cell entry 6", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" });
  await expect(
    page.getByRole("cell", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-rc2 (CSAFPID-0006)" })
  ).toBeVisible();
});

test("Vulnerabilities overview collapsible table CVE Cell link 6", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" });
  await expect(
    page.getByRole("link", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-rc2 (CSAFPID-0006)" })
  ).toBeVisible();
});

test("Vulnerabilities overview collapsible table CVE Cell link 6 total result icon", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" });
  await expect(
    page
      .getByRole("row", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-rc2 (CSAFPID-0006)  " })
      .locator("i")
      .first()
  ).toBeVisible();
});

test("Vulnerabilities overview collapsible table CVE Cell link 6 total result cell", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" });
  await expect(page.getByRole("cell", { name: "" }).first()).toBeVisible();
});

test("Vulnerabilities overview collapsible table CVE Cell link 6 cve result icon", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" });
  await expect(
    page
      .getByRole("row", { name: "CSAF Tools CVRF-CSAF-Converter 1.0.0-rc2 (CSAFPID-0006)  " })
      .locator("i")
      .nth(1)
  ).toBeVisible();
});

test("Vulnerabilities overview collapsible table CVE Cell link 6 cve result cell", async ({
  page
}) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" });
  await expect(page.getByRole("cell", { name: "" }).nth(1)).toBeVisible();
});

test("Vulnerabilities overview legend", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" });
  await expect(
    page.getByText("Legend FixedUnder investigationKnown affectedNot affectedRecommended")
  ).toBeVisible();
});

test("Vulnerabilities overview legend icon 1", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" });
  await expect(page.locator("dl i").first()).toBeVisible();
});

test("Vulnerabilities overview legend icon 2", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" });
  await expect(page.locator("dl i").nth(1)).toBeVisible();
});

test("Vulnerabilities overview legend icon 3", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" });
  await expect(page.locator("dl i").nth(2)).toBeVisible();
});

test("Vulnerabilities overview legend icon 4", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" });
  await expect(page.locator("dl i").nth(3)).toBeVisible();
});

test("Vulnerabilities overview legend icon 5", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[type="file"]').click();
  await page.locator('input[type="file"]').setInputFiles("./docs/bsi-2022-0001.json");

  await page.getByRole("heading", { name: "Vulnerabilities overview" });
  await expect(page.locator("dl i").nth(4)).toBeVisible();
});
