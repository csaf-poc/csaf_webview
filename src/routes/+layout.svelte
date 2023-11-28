<script lang="ts">
  import "boxicons/css/boxicons.min.css";
  import { appStore } from "$lib/store";
  import { base } from "$app/paths";
  import Spinner from "$lib/Spinner.svelte";
  /*global __APP_VERSION__*/
  const version: string = __APP_VERSION__;
  const MODE = {
    SINGLE: "Switch to ROLIE-feed",
    FEED: "Switch to single view"
  };
  let switchToRoute = "";
  let headerText = "Advisory";
  $: if (mode === MODE.SINGLE) {
    if ($appStore.doc && $appStore.doc.title) {
      headerText = `${$appStore.doc["id"]}: ${$appStore.doc["title"]}`;
    } else {
      headerText = "Advisory";
    }
  } else {
    if ($appStore.currentFeed) {
      headerText = "ROLIE-Feed";
    } else if ($appStore.providerMetadata) {
      headerText = "Provider Metadata";
    } else {
      headerText = "Overview";
    }
  }
  $: mode = $appStore.ui.appMode;
  $: {
    if (mode === MODE.SINGLE) {
      if ($appStore.ui.lastFeed) {
        if ($appStore.ui.lastDoc) {
          switchToRoute = `${base}/feed?q=${$appStore.ui.lastFeed}&doc=${$appStore.ui.lastDoc}`;
        } else {
          switchToRoute = `${base}/feed?q=${$appStore.ui.lastFeed}`;
        }
      } else {
        if ($appStore.ui.lastDoc) {
          switchToRoute = `${base}/feed?doc=${$appStore.ui.lastDoc}`;
        } else {
          switchToRoute = `${base}/feed`;
        }
      }
    } else {
      if ($appStore.ui.lastDoc) {
        if ($appStore.ui.lastFeed) {
          switchToRoute = `${base}/?q=${$appStore.ui.lastDoc}&feed=${$appStore.ui.lastFeed}`;
        } else {
          switchToRoute = `${base}/?q=${$appStore.ui.lastDoc}`;
        }
      } else {
        if ($appStore.ui.lastFeed) {
          switchToRoute = `${base}/?feed=${$appStore.ui.lastFeed}`;
        } else {
          switchToRoute = `${base}/`;
        }
      }
    }
  }
  /**
   * Disable disables dropping a JSON anywhere on the page.
   * @param e
   */
  const disable = (e: Event) => {
    e.preventDefault();
  };
</script>

<svelte:window
  on:dragover={disable}
  on:drop={disable}
  on:popstate={() => {
    appStore.setFeedErrorMsg("");
    appStore.setSingleErrorMsg("");
  }}
/>

<div class="content">
  <!-- svelte-ignore a11y-no-redundant-roles -->
  <div class="header">
    <div class="programname">
      <div>
        <h4 role="heading">CSAF Webview</h4>
      </div>
      <div>
        <small class="versionstring">v{version}</small>
      </div>
    </div>
    <div class="title">{headerText}</div>
    <div class="switchbtn">
      <a
        title={mode !== MODE.SINGLE ? "Switch to Advisory" : "Switch to Overview"}
        href={switchToRoute}
        class="btn">{mode !== MODE.SINGLE ? "Switch to Advisory" : "Switch to Overview"}</a
      >
    </div>
  </div>
  <slot />
</div>
