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
  currentFeed: any;
  ui: {
    appMode: string;
    csafLoading: boolean;
    docToggleExpandAll: boolean;
    feedErrorMsg: string;
    feedLoading: boolean;
    singleErrorMsg: string;
    isFeedDistributionOpen: boolean;
    isFeedGeneralSectionOpen: boolean;
    isFeedPublicPGPSectionOpen: boolean;
    isGeneralSectionVisible: boolean;
    isRevisionHistoryVisible: boolean;
    isVulnerabilitiesOverviewVisible: boolean;
    isVulnerabilitiesSectionVisible: boolean;
    isProductTreeVisible: boolean;
    isFeedSectionOpen: boolean;
    lastFeed: string;
    lastDoc: string;
    selectedCVE: string;
    selectedProduct: string;
    uploadedFile: boolean;
    history: string[];
  };
};

const MODE = {
  SINGLE: "Switch to ROLIE-feed",
  FEED: "Switch to single view"
};

const generateInitialState = (): AppStore => {
  const state: AppStore = {
    doc: null,
    providerMetadata: null,
    currentFeed: null,
    ui: {
      appMode: MODE.SINGLE,
      csafLoading: false,
      docToggleExpandAll: false,
      feedErrorMsg: "",
      feedLoading: false,
      singleErrorMsg: "",
      isFeedDistributionOpen: true,
      isFeedGeneralSectionOpen: true,
      isFeedPublicPGPSectionOpen: true,
      isGeneralSectionVisible: true,
      isRevisionHistoryVisible: false,
      isVulnerabilitiesOverviewVisible: true,
      isVulnerabilitiesSectionVisible: false,
      isProductTreeVisible: false,
      isFeedSectionOpen: false,
      lastFeed: "",
      lastDoc: "",
      selectedCVE: "",
      selectedProduct: "",
      uploadedFile: false,
      history: []
    }
  };
  return state;
};

function createStore() {
  const { subscribe, set, update } = writable(generateInitialState());

  return {
    subscribe,
    setCSAFLoading: (option: boolean) => {
      update((settings) => {
        settings.ui.csafLoading = option;
        return settings;
      });
    },
    toggleDocExpandAll: () => {
      update((settings) => {
        if (settings.ui.docToggleExpandAll) {
          settings.ui.docToggleExpandAll = false;
        } else {
          settings.ui.docToggleExpandAll = true;
        }
        return settings;
      });
    },
    setSingleMode: () => {
      update((settings) => {
        settings.ui.appMode = MODE.SINGLE;
        return settings;
      });
    },
    setFeedMode: () => {
      update((settings) => {
        settings.ui.appMode = MODE.FEED;
        return settings;
      });
    },
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
    setFeedLoading: (option: boolean) => {
      update((settings) => {
        settings.ui.feedLoading = option;
        return settings;
      });
    },
    setCurrentFeed: (feed: any) => {
      update((settings) => {
        settings.currentFeed = feed;
        return settings;
      });
    },
    setSingleErrorMsg: (msg: string) => {
      update((settings) => {
        settings.ui.singleErrorMsg = msg;
        return settings;
      });
    },
    setLastFeed: (feed: string) => {
      update((settings) => {
        settings.ui.lastFeed = feed;
        return settings;
      });
    },
    setLastDoc: (doc: string) => {
      update((settings) => {
        settings.ui.lastDoc = doc;
        return settings;
      });
    },
    setFeedErrorMsg: (msg: string) => {
      update((settings) => {
        settings.ui.feedErrorMsg = msg;
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
    setFeedDistributionOpen: () => {
      update((settings) => {
        settings.ui.isFeedDistributionOpen = true;
        return settings;
      });
    },
    setFeedDistributionClosed: () => {
      update((settings) => {
        settings.ui.isFeedDistributionOpen = false;
        return settings;
      });
    },
    setFeedGeneralSectionOpen: () => {
      update((settings) => {
        settings.ui.isFeedGeneralSectionOpen = true;
        return settings;
      });
    },
    setFeedGeneralSectionClosed: () => {
      update((settings) => {
        settings.ui.isFeedGeneralSectionOpen = false;
        return settings;
      });
    },
    setFeedPublicPGPSectionOpen: () => {
      update((settings) => {
        settings.ui.isFeedPublicPGPSectionOpen = true;
        return settings;
      });
    },
    setFeedPublicPGPSectionClosed: () => {
      update((settings) => {
        settings.ui.isFeedPublicPGPSectionOpen = false;
        return settings;
      });
    },
    setGeneralSectionVisible: () => {
      update((settings) => {
        settings.ui.isGeneralSectionVisible = true;
        return settings;
      });
    },
    setGeneralSectionInvisible: () => {
      update((settings) => {
        settings.ui.isGeneralSectionVisible = false;
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
    setVulnerabilitiesOverviewVisible: () => {
      update((settings) => {
        settings.ui.isVulnerabilitiesOverviewVisible = true;
        return settings;
      });
    },
    setVulnerabilitiesOverviewInvisible: () => {
      update((settings) => {
        settings.ui.isVulnerabilitiesOverviewVisible = false;
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
    clearHistory: () => {
      update((settings) => {
        settings.ui.history = [];
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
    reset: () => set(generateInitialState())
  };
}

export const appStore = createStore();
