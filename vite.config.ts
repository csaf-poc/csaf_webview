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

function getSemverVersion() {
  try {
    const raw = execSync("git describe --tags --long --always", { encoding: "utf8" }).trim();
    // Example: v1.2.3-4-gf123abc
    const match = raw.match(/^v?(\d+\.\d+\.\d+)(?:-(\d+)-g([0-9a-f]+))?$/);

    if (!match) {
      throw new Error(`Unrecognized version format: ${raw}`);
    }

    const [, version, commitsSinceTag, gitSha] = match;

    if (commitsSinceTag && gitSha) {
      // Increment patch version
      const parts = version.split(".");
      parts[parts.length - 1] = (parseInt(parts[parts.length - 1]) + 1).toString();
      const incrementVersion = parts.join(".");
      return `${incrementVersion}-${commitsSinceTag}.g${gitSha}`;
    }

    return version;
  } catch (err) {
    console.error("Failed to get git version:");
    process.exit(1);
  }
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
