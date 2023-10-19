import { appStore } from "$lib/store";
import { convertToDocModel } from "$lib/singleview/docmodel/docmodel";

async function loadSingleCSAF(url: string) {
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
    }
    if (response.status === 401) {
      appStore.setSingleErrorMsg("You are unauthorized to access the resource on the server.");
      appStore.setCSAFLoading(false);
    }
    if (response.status === 403) {
      appStore.setSingleErrorMsg("You are forbidden to access the resource on the server.");
      appStore.setCSAFLoading(false);
    }
    if (response.status === 404) {
      appStore.setSingleErrorMsg("The resource you requested was not found on the server.");
      appStore.setCSAFLoading(false);
    }
  } catch (error) {
    appStore.setSingleErrorMsg(
      "Failed to load from URL. The server may be unreachable or the resource cannot be accessed due to CORS restrictions."
    );
    appStore.setCSAFLoading(false);
  }
}

async function loadProviderMetaData(url: string) {
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
    }
    if (response.status === 401) {
      appStore.setFeedErrorMsg("You are unauthorized to access the resource on the server.");
      appStore.setProviderMetadata(null);
      appStore.setFeedLoading(false);
    }
    if (response.status === 403) {
      appStore.setFeedErrorMsg("You are forbidden to access the resource on the server.");
      appStore.setProviderMetadata(null);
      appStore.setFeedLoading(false);
    }
    if (response.status === 404) {
      appStore.setFeedErrorMsg("The resource you requested was not found on the server.");
      appStore.setProviderMetadata(null);
      appStore.setFeedLoading(false);
    }
  } catch (error) {
    appStore.setFeedErrorMsg(
      "Failed to load from URL. The server may be unreachable or the resource cannot be accessed due to CORS restrictions."
    );
    appStore.setProviderMetadata(null);
    appStore.setFeedLoading(false);
  }
}

async function loadFeed(feedURL: string, e?: Event) {
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
    }
    if (response.status === 401) {
      appStore.setFeedErrorMsg("You are unauthorized to access the resource on the server.");
      appStore.setCurrentFeed(null);
      appStore.setFeedLoading(false);
    }
    if (response.status === 403) {
      appStore.setFeedErrorMsg("You are forbidden to access the resource on the server.");
      appStore.setCurrentFeed(null);
      appStore.setFeedLoading(false);
    }
    if (response.status === 404) {
      appStore.setFeedErrorMsg("The resource you requested was not found on the server.");
      appStore.setCurrentFeed(null);
      appStore.setFeedLoading(false);
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
