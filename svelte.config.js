// This file is Free Software under the MIT License
// without warranty, see README.md and LICENSES/MIT.txt for details.
//
// SPDX-License-Identifier: MIT
//
// SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
// Software-Engineering: 2023 Intevation GmbH <https://intevation.de>

/** @type {import('@sveltejs/kit').Config} */
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";

const dev = process.argv.includes("dev");

const config = {
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? "" : process.env.BASE_PATH
		}
	}
};

export default config;
