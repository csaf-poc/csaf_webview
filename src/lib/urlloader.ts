import { appStore } from "$lib/store";
import { convertToDocModel } from "$lib/singleview/docmodel/docmodel";

async function loadSingleCSAF(url: string) {
  appStore.setSingleErrorMsg("");
  try {
    const response = await fetch(`${url}`);
    if (response.ok) {
      const csafDoc = await response.json();
      appStore.clearUploadedFile();
      const docModel = convertToDocModel(csafDoc);
      appStore.setDocument(docModel);
    }
    if (response.status === 404) {
      appStore.setSingleErrorMsg("The resource you requested was not found on the server.");
    }
  } catch (error) {
    appStore.setSingleErrorMsg(
      "Failed to load from URL. The server may be unreachable or the resource cannot be accessed due to CORS restrictions."
    );
  }
}

async function loadProviderMetaData(url: string) {
  appStore.setFeedErrorMsg("");
  try {
    const response = await fetch(`${url}`);
    if (response.ok) {
      const providerMetadata = await response.json();
      appStore.setProviderMetadata(providerMetadata);
    }
    if (response.status === 404) {
      appStore.setFeedErrorMsg("The resource you requested was not found on the server.");
      appStore.setProviderMetadata(null);
    }
  } catch (error) {
    appStore.setFeedErrorMsg(
      "Failed to load from URL. The server may be unreachable or the resource cannot be accessed due to CORS restrictions."
    );
    appStore.setProviderMetadata(null);
  }
}

async function loadFeed(feedURL: string, e?: Event) {
  appStore.setSingleErrorMsg("");
  try {
    const response = await fetch(`${feedURL}`);
    if (response.ok) {
      const feedJSON = await response.json();
      appStore.setCurrentFeed(null);
      appStore.setCurrentFeed(feedJSON);
      appStore.setFeedSectionOpen();
      if (e) appStore.unshiftHistory((e.target as Element).id);
      setTimeout(() => {
        const el = document.getElementById(`${feedURL}`);
        el?.scrollIntoView({ block: "start", behavior: "smooth" });
      }, 100);
    }
    if (response.status === 404) {
      appStore.setSingleErrorMsg("The resource you requested was not found on the server.");
      appStore.setCurrentFeed(null);
    }
  } catch (error) {
    appStore.setSingleErrorMsg(
      "Failed to load from URL. The server may be unreachable or the resource cannot be accessed due to CORS restrictions."
    );
    appStore.setCurrentFeed(null);
  }
}

export { loadSingleCSAF, loadProviderMetaData, loadFeed };
