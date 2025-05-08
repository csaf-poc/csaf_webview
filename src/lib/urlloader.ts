// This file is Free Software under the Apache-2.0 License
// without warranty, see README.md and LICENSES/Apache-2.0.txt for details.
//
// SPDX-License-Identifier: Apache-2.0
//
// SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
// Software-Engineering: 2023 Intevation GmbH <https://intevation.de>

import { appStore } from "$lib/store";
import { convertToDocModel } from "$lib/singleview/docmodel/docmodel";
import { PUBLIC_PROXY_PATH } from "$env/static/public";

/**
 * loadSingleCSAF loads a single CSAF document.
 * @param url
 */
async function loadSingleCSAF(url: string) {
  url = `${PUBLIC_PROXY_PATH}${url}`;
  appStore.setSingleErrorMsg("");
  try {
    appStore.setLoading(true);
    const response = await fetch(`${url}`);
    if (response.ok) {
      const csafDoc = await response.json();
      appStore.clearUploadedFile();
      const docModel = convertToDocModel(csafDoc);
      appStore.setDocument(docModel);
      appStore.setLoading(false);
    } else {
      const msg = response.statusText
        ? `An Error occured: HTTP ${response.status} - ${response.statusText}`
        : `An Error occured: HTTP ${response.status}`;
      appStore.setSingleErrorMsg(msg);
      appStore.setLoading(false);
      appStore.setDocument(null);
    }
  } catch (error) {
    appStore.setSingleErrorMsg(
      "Failed to load from URL. The server may be unreachable or the resource cannot be accessed due to CORS restrictions."
    );
    appStore.setLoading(false);
    appStore.setDocument(null);
  }
}

/**
 * Displays an error message when loading provider metadata / feed failed.
 * @param response
 */
const displayErrorMsg = (response: Response) => {
  const msg = response.statusText
    ? `An Error occured: HTTP ${response.status} - ${response.statusText}`
    : `An Error occured: HTTP ${response.status}`;
  appStore.setFeedErrorMsg(msg);
  appStore.setProviderMetadata(null);
  appStore.setCurrentFeed(null);
  appStore.setLoading(false);
};

/**
 * load loads data from the given URL and sets providerMetadata or feed accordingly.
 * @param url
 */
async function load(url: string) {
  url = `${PUBLIC_PROXY_PATH}${url}`;
  appStore.setFeedErrorMsg("");
  try {
    appStore.setLoading(true);
    const response = await fetch(`${url}`);
    if (response.ok) {
      appStore.setCurrentFeed(null);
      appStore.setProviderMetadata(null);
      const json = await response.json();
      const isProviderMetadata =
        json.canonical_url &&
        json.last_updated &&
        json.list_on_CSAF_aggregators &&
        json.mirror_on_CSAF_aggregators &&
        json.metadata_version &&
        json.publisher &&
        json.role;
      if (isProviderMetadata) {
        appStore.setProviderMetadata(json);
      } else {
        appStore.setCurrentFeed(json);
        appStore.setFeedSectionOpen();
      }

      appStore.setLoading(false);
    } else {
      displayErrorMsg(response);
    }
  } catch (error) {
    appStore.setFeedErrorMsg(
      "Failed to load from URL. The server may be unreachable or the resource cannot be accessed due to CORS restrictions."
    );
    appStore.setProviderMetadata(null);
    appStore.setCurrentFeed(null);
    appStore.setLoading(false);
  }
}

export { loadSingleCSAF, load };
