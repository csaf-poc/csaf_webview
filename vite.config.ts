// This file is Free Software under the Apache-2.0 License
// without warranty, see README.md and LICENSES/Apache-2.0.txt for details.
//
// SPDX-License-Identifier: Apache-2.0
//
// SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
// Software-Engineering: 2023 Intevation GmbH <https://intevation.de>

import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import { execSync } from "child_process";

// See comment here
// https://github.com/gocsaf/csaf/blob/3093f717817b9369d390e56d1012eaedcfa19e32/Makefile#L40-L49
function getSemverVersion() {
  const GITDESC = execSync("git describe --tags --always", { encoding: "utf8" }).trim();
  const GITDESCPATCH = GITDESC.replace(/v?[0-9]+\.[0-9]+\.([0-9]+)[-+]?.*/, "$1");
  const SEMVERPATCH = Number(GITDESCPATCH) + 1;
  const SEMVER = GITDESC.replace(
    new RegExp("v?([0-9]+.[0-9]+.)([0-9]+)(-[1-9].*)"),
    `$1${SEMVERPATCH}$3`
  );
  return SEMVER;
}

export default defineConfig({
  server: {
    proxy: {
      "/proxy/": {
        target: "https://wid.cert-bund.de/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/proxy\//, "")
      }
    }
  },
  plugins: [sveltekit()],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
    coverage: {
      provider: "istanbul",
      reporter: ["text", "json-summary", "json", "html"],
      lines: 60,
      branches: 60,
      functions: 60,
      statements: 60
    }
  },
  define: {
    __APP_VERSION__: JSON.stringify(getSemverVersion())
  }
});
