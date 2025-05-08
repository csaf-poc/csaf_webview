// This file is Free Software under the Apache-2.0 License
// without warranty, see README.md and LICENSES/Apache-2.0.txt for details.
//
// SPDX-License-Identifier: Apache-2.0
//
// SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
// Software-Engineering: 2023 Intevation GmbH <https://intevation.de>

import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import { readFileSync } from "fs";

import { fileURLToPath } from "url";

const file = fileURLToPath(new URL("package.json", import.meta.url));
const json = readFileSync(file, "utf8");
const pkg = JSON.parse(json);

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
    __APP_VERSION__: `${JSON.stringify(pkg.version)}`
  }
});
