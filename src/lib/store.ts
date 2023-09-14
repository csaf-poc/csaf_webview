// This file is Free Software under the MIT License
// without warranty, see README.md and LICENSES/MIT.txt for details.
//
// SPDX-License-Identifier: MIT
//
// SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
// Software-Engineering: 2023 Intevation GmbH <https://intevation.de>

import { writable } from "svelte/store";
import type { DocModel } from "./singleview/general/docmodeltypes";

type AppStore = {
  doc: DocModel | null;
  ui: {
    isGeneralSectionVisible: boolean;
    isRevisionHistoryVisible: boolean;
    isVulnerabilisiesOverviewVisible: boolean;
    isVulnerabilitiesSectionVisible: boolean;
    selectedCVE: string;
    uploadedFile: boolean;
  };
};

function createStore() {
  const appDefault: AppStore = {
    doc: null,
    ui: {
      isGeneralSectionVisible: true,
      isRevisionHistoryVisible: false,
      isVulnerabilisiesOverviewVisible: false,
      isVulnerabilitiesSectionVisible: false,
      selectedCVE: "",
      uploadedFile: false
    }
  };
  const { subscribe, set, update } = writable({ ...appDefault });

  return {
    subscribe,
    setDocument: (data: any) =>
      update((settings) => {
        settings.doc = data;
        return settings;
      }),
    setSelectedCVE: (cve: string) => {
      update((settings) => {
        settings.ui.selectedCVE = cve;
        return settings;
      });
    },
    resetSelectedCVE: () => {
      update((settings) => {
        settings.ui.selectedCVE = "";
        return settings;
      });
    },
    setVulnerabilitiesSectionVisible: () => {
      update((settings) => {
        settings.ui.isVulnerabilitiesSectionVisible = true;
        return settings;
      });
    },
    setVulnerabilitiesSectionInvisible: () => {
      update((settings) => {
        settings.ui.isVulnerabilitiesSectionVisible = false;
        return settings;
      });
    },
    setUploadedFile: () => {
      update((settings) => {
        settings.ui.uploadedFile = true;
        return settings;
      });
    },
    clearUploadedFile: () => {
      update((settings) => {
        settings.ui.uploadedFile = false;
        return settings;
      });
    },
    reset: () => set({ ...appDefault })
  };
}

export const appStore = createStore();
