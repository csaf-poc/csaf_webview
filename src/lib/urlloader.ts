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
    }
  } catch (error) {
    appStore.setFeedErrorMsg(
      "Failed to load from URL. The server may be unreachable or the resource cannot be accessed due to CORS restrictions."
    );
  }
}

export { loadSingleCSAF, loadProviderMetaData };
