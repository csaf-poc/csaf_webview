// This file is Free Software under the MIT License
// without warranty, see README.md and LICENSES/MIT.txt for details.
//
// SPDX-License-Identifier: MIT
//
// SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
// Software-Engineering: 2023 Intevation GmbH <https://intevation.de>

import { writable } from "svelte/store";

type AppStore = {
	data: any
}

function createStore() {
	const appDefault: AppStore = {
		data: null
	};
	const { subscribe, set, update } = writable(appDefault);

	return {
		subscribe,
		setData: (data: any) =>
			update((settings) => {
				settings.data = data;
				return settings;
			}),
		reset: () => set(appDefault)
	};
}

export const appStore = createStore();