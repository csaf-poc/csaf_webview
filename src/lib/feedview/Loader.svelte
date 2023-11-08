<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de>
-->

<script lang="ts">
  import { appStore } from "$lib/store";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  let url = "";
  /**
   * onMount set url if given via query param.
   */
  onMount(() => {
    if (/^\?q=/.test($page.url.search)) {
      url = $page.url.searchParams.get("q") || "";
    }
  });

  /**
   * load loads provider metadata / feed and reroute to given URL.
   */
  const load = () => {
    goto(`${base}/feed?q=${url}`);
  };

  /**
   * keydown loads provider metadata when "Enter"-key was pressed.
   * @param e
   */
  const keydown = (e: KeyboardEvent) => {
    if (e.key === "Enter") load();
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
    margin-left: 210px;
    font-size: x-large;
    font-weight: bold;
  }
  .loadbutton {
    min-width: 200px;
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
