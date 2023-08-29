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
  // @ts-ignore
  const version: string = __APP_VERSION__;
  const externalReference = browser && $page.url.searchParams.get("ref");
  const MODE = {
    SINGLE: "Switch to ROLIE-feed",
    FEED: "Switch to single view"
  };
  let mode = MODE.SINGLE;
  $: noRef = !externalReference;
  const switchView = (e: Event) => {
    if (mode === MODE.SINGLE) {
      mode = MODE.FEED;
      appStore.reset();
    } else {
      mode = MODE.SINGLE;
      appStore.reset();
    }
  };
  const disable = (e: Event) => {
    e.preventDefault();
  };
</script>

<svelte:window on:dragover={disable} on:drop={disable} />

<div class="container">
  <!-- svelte-ignore a11y-no-redundant-roles -->
  <div class="header">
    <h1 role="heading" class="text-center">CSAF Webview+</h1>
    <button class="switchbutton button" on:click={switchView}>{mode}</button>
    <h4>v. {version}</h4>
  </div>
  {#if noRef && mode === MODE.SINGLE}
    <SingleView />
  {:else}
    <FeedView />
  {/if}
</div>

<style>
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
