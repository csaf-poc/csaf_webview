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
    appStore.setCSAFLoading(true);
    const response = await fetch(`${url}`);
    if (response.ok) {
      const csafDoc = await response.json();
      appStore.clearUploadedFile();
      const docModel = convertToDocModel(csafDoc);
      appStore.setDocument(docModel);
      appStore.setCSAFLoading(false);
    } else {
      const msg = `An Error occured: HTTP ${response.status} - ${response.statusText}`;
      appStore.setSingleErrorMsg(msg);
      appStore.setCSAFLoading(false);
    }
  } catch (error) {
    appStore.setSingleErrorMsg(
      "Failed to load from URL. The server may be unreachable or the resource cannot be accessed due to CORS restrictions."
    );
    appStore.setCSAFLoading(false);
  }
}

/**
 * Displays an error message when loading provider metadata / feed failed.
 * @param response
 */
const displayErrorMsg = (response: Response) => {
  const msg = `An Error occured: HTTP ${response.status} - ${response.statusText}`;
  appStore.setFeedErrorMsg(msg);
  appStore.setProviderMetadata(null);
  appStore.setFeedLoading(false);
};

/**
 * loadProviderMetaData loads the provider metadata from the given URL.
 * @param url
 */
async function loadProviderMetaData(url: string) {
  url = `${PUBLIC_PROXY_PATH}${url}`;
  appStore.setFeedErrorMsg("");
  try {
    appStore.setFeedLoading(true);
    const response = await fetch(`${url}`);
    if (response.ok) {
      appStore.setCurrentFeed(null);
      appStore.setProviderMetadata(null);
      const providerMetadata = await response.json();
      appStore.setProviderMetadata(providerMetadata);
      appStore.setFeedLoading(false);
    } else {
      displayErrorMsg(response);
    }
  } catch (error) {
    appStore.setFeedErrorMsg(
      "Failed to load from URL. The server may be unreachable or the resource cannot be accessed due to CORS restrictions."
    );
    appStore.setProviderMetadata(null);
    appStore.setFeedLoading(false);
  }
}

/**
 * loadFeed loads a single feed.
 * @param feedURL
 * @param e
 */
async function loadFeed(feedURL: string, e?: Event) {
  feedURL = `${PUBLIC_PROXY_PATH}${feedURL}`;
  appStore.setFeedErrorMsg("");
  try {
    appStore.setFeedLoading(true);
    const response = await fetch(`${feedURL}`);
    if (response.ok) {
      const feedJSON = await response.json();
      appStore.setCurrentFeed(null);
      appStore.setCurrentFeed(feedJSON);
      appStore.setFeedSectionOpen();
      if (e) appStore.unshiftHistory((e.target as Element).id);
      appStore.setFeedLoading(false);
      setTimeout(() => {
        const el = document.getElementById(`${feedURL}`);
        el?.scrollIntoView({ block: "start", behavior: "smooth" });
      }, 100);
    } else {
      displayErrorMsg(response);
    }
  } catch (error) {
    appStore.setFeedErrorMsg(
      "Failed to load from URL. The server may be unreachable or the resource cannot be accessed due to CORS restrictions."
    );
    appStore.setCurrentFeed(null);
    appStore.setFeedLoading(false);
  }
}

export { loadSingleCSAF, loadProviderMetaData, loadFeed };
