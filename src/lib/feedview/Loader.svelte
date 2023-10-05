<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de
-->

<script lang="ts">
  import { appStore } from "$lib/store";
  import { loadFeed, loadProviderMetaData } from "$lib/urlloader";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  let url = "";
  onMount(() => {
    if (/^\?q=/.test($page.url.search)) {
      url = $page.url.search.replace("?q=", "");
    }
  });
  const load = () => {
    if (/provider-metadata\.json/.test(url)) {
      loadProviderMetaData(url);
    } else {
      loadFeed(url);
    }
    goto(`/feed?q=${url}`);
  };

  const keydown = (e: KeyboardEvent) => {
    if (e.key === "Enter") loadProviderMetaData(url);
  };
</script>

<div class="row">
  <div class="col">
    <div style="display:flex">
      <button class="loadbutton" on:click={load}><i class="bx bx-book-open" />View feed</button>
      <input class="url" type="text" bind:value={url} on:keydown={keydown} />
    </div>
  </div>
</div>
{#if $appStore.ui.feedErrorMsg}
  <div class="row">
    <div class="col"><div class="errors text-error">{$appStore.ui.feedErrorMsg}</div></div>
  </div>
{/if}

<style>
  .errors {
    margin-left: 200px;
    font-size: x-large;
    font-weight: bold;
  }
  .loadbutton {
    width: 200px;
    height: 50px;
    font-size: large;
  }
  .bx-book-open {
    margin-right: 1rem;
  }
  .url {
    margin-left: 1rem;
  }
</style>
