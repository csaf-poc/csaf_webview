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
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  let URL = "";
  /**
   * onMount sets the URL when a query parameter was given.
   */
  onMount(() => {
    if (/^\?q=/.test($page.url.search)) {
      URL = $page.url.searchParams.get("q") || "";
    }
  });
  /**
   * loads a single CSAF document and routes to according URL.
   */
  const loads = () => {
    goto(`${base}/?q=${URL}`);
  };
  /**
   * keydown listnes for "Enter" to start loading.
   * @param e
   */
  const keydown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loads();
    }
  };
</script>

<div class="row">
  <div class="col">
    <div style="display:flex">
      <button class="loadbutton" title="URL to single CSAF document" on:click={loads}
        ><i class="bx bx-book-open" />URL</button
      >
      <button
        class="clearbutton"
        title="Clear the URL field"
        on:click={() => {
          URL = "";
        }}><i class="bx bx-trash" /> Clear</button
      >
      <input class="url" type="text" bind:value={URL} on:keydown={keydown} />
    </div>
  </div>
</div>
{#if $appStore.ui.singleErrorMsg}
  <div class="row">
    <div class="col"><div class="errors text-error">{$appStore.ui.singleErrorMsg}</div></div>
  </div>
{/if}

<style>
  .errors {
    margin-left: 200px;
    font-size: x-large;
    font-weight: bold;
  }
  .loadbutton {
    min-width: 200px;
    height: 50px;
    font-size: large;
  }
  .clearbutton {
    margin-left: 1rem;
    min-width: 140px;
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
