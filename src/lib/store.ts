// This file is Free Software under the MIT License
// without warranty, see README.md and LICENSES/MIT.txt for details.
//
// SPDX-License-Identifier: MIT
//
// SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
// Software-Engineering: 2023 Intevation GmbH <https://intevation.de>

import { writable } from "svelte/store";
import type { DocModel } from "./singleview/docmodel/docmodeltypes";

type AppStore = {
  doc: DocModel | null;
  providerMetadata: any;
  ui: {
    currentFeed: any;
    errorMsg: string;
    isFeedSectionOpen: boolean;
    isGeneralSectionVisible: boolean;
    isRevisionHistoryVisible: boolean;
    isVulnerabilisiesOverviewVisible: boolean;
    isVulnerabilitiesSectionVisible: boolean;
    isProductTreeVisible: boolean;
    selectedCVE: string;
    selectedProduct: string;
    uploadedFile: boolean;
    history: string[];
  };
};

function createStore() {
  const { subscribe, set, update } = writable({
    doc: null,
    providerMetadata: null,
    currentFeed: null,
    ui: {
      errorMsg: "",
      isGeneralSectionVisible: true,
      isRevisionHistoryVisible: false,
      isVulnerabilisiesOverviewVisible: false,
      isVulnerabilitiesSectionVisible: false,
      isProductTreeVisible: false,
      isFeedSectionOpen: false,
      selectedCVE: "",
      selectedProduct: "",
      uploadedFile: false,
      history: []
    }
  });

  return {
    subscribe,
    setFeedSectionOpen: () => {
      update((settings) => {
        settings.ui.isFeedSectionOpen = true;
        return settings;
      });
    },
    setFeedSectionClosed: () => {
      update((settings) => {
        settings.ui.isFeedSectionOpen = false;
        return settings;
      });
    },
    setCurrentFeed: (feed: any) => {
      update((settings) => {
        settings.currentFeed = feed;
        return settings;
      });
    },
    setErrorMsg: (msg: string) => {
      update((settings) => {
        settings.ui.errorMsg = msg;
        return settings;
      });
    },
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
    setSelectedProduct: (product: string) => {
      update((settings) => {
        settings.ui.selectedProduct = product;
        return settings;
      });
    },
    resetSelectedProduct: () => {
      update((settings) => {
        settings.ui.selectedProduct = "";
        return settings;
      });
    },
    setVulnerabilitiesSectionVisible: () => {
      update((settings) => {
        settings.ui.isVulnerabilitiesSectionVisible = true;
        return settings;
      });
    },
    setProductTreeSectionVisible: () => {
      update((settings) => {
        settings.ui.isProductTreeVisible = true;
        return settings;
      });
    },
    setProductTreeSectionInVisible: () => {
      update((settings) => {
        settings.ui.isProductTreeVisible = false;
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
    unshiftHistory: (id: string) => {
      update((settings) => {
        settings.ui.history.unshift(id);
        return settings;
      });
    },
    shiftHistory: () => {
      update((settings) => {
        if (settings.ui.history.length > 0) {
          settings.ui.history.shift();
        }
        return settings;
      });
    },
    setProviderMetadata: (providerMetadata: any) => {
      update((settings) => {
        settings.providerMetadata = providerMetadata;
        return settings;
      });
    },
    reset: () =>
      set({
        doc: null,
        providerMetadata: null,
        ui: {
          isGeneralSectionVisible: true,
          isRevisionHistoryVisible: false,
          isVulnerabilisiesOverviewVisible: false,
          isVulnerabilitiesSectionVisible: false,
          isProductTreeVisible: false,
          selectedCVE: "",
          selectedProduct: "",
          uploadedFile: false,
          history: []
        }
      })
  };
}

export const appStore = createStore();
