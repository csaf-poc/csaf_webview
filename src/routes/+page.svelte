<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de
-->
<script lang="ts">
  import "chota/dist/chota.min.css";
  import "boxicons/css/boxicons.min.css";
  import { browser } from "$app/environment";
  import { appStore } from "$lib/store";
  import { page } from "$app/stores";
  import SingleView from "$lib/singleview/SingleView.svelte";
  import FeedView from "$lib/feedview/FeedView.svelte";
  import { loadProviderMetaData, loadSingleCSAF } from "$lib/urlloader";
  import { tick } from "svelte";

  /*global __APP_VERSION__*/
  const version: string = __APP_VERSION__;
  const externalReference =
    browser && (/#\/single\?q=/.test($page.url.hash) || /#\/feed\?q=/.test($page.url.hash));
  const MODE = {
    SINGLE: "Switch to ROLIE-feed",
    FEED: "Switch to single view"
  };
  async function switchFeedMode() {
    await tick();
    appStore.setFeedMode();
  }
  async function switchSingleMode() {
    await tick();
    appStore.setSingleMode();
  }
  $: mode = $appStore.ui.appMode;
  $: if (externalReference) {
    if (/#\/single\?q=/.test($page.url.hash)) {
      const URL = $page.url.hash.replace("#/single?q=", "");
      loadSingleCSAF(URL);
    }
    if (/#\/feed\?q=/.test($page.url.hash)) {
      const URL = $page.url.hash.replace("#/feed?q=", "");
      loadProviderMetaData(URL);
      switchFeedMode();
    }
  }
  const switchView = () => {
    if (mode === MODE.SINGLE) {
      appStore.setFeedMode();
    } else {
      appStore.setSingleMode();
    }
  };
  const disable = (e: Event) => {
    e.preventDefault();
  };
</script>

<svelte:window on:dragover={disable} on:drop={disable} />

<div class="content">
  <!-- svelte-ignore a11y-no-redundant-roles -->
  <div class="header">
    <h1 role="heading" class="text-center">CSAF Webview+</h1>
    <button class="switchbutton button" on:click={switchView}>{mode}</button>
    <h4>v. {version}</h4>
  </div>
  {#if mode === MODE.SINGLE}
    <SingleView />
  {:else}
    <FeedView />
  {/if}
</div>

<style>
  .switchbutton {
    box-shadow: 1px 3px 3px #c1c1c1;
  }
  .header > h1 {
    font-weight: bold;
  }
  .content {
    margin-left: 3rem;
    margin-right: 3rem;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .switchbutton {
    position: relative;
    left: -90px;
  }
</style>
