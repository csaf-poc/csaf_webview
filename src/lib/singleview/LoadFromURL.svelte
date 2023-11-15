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
  <div class="col-6 col-3-lg">
    <div style="display:flex">
      <button class="loadbutton" title="View single CSAF document from URL" on:click={loads}>
        <span style="white-space:nowrap"
          ><i class="bx bx-file" /><span class="btnlabel">URL</span></span
        >
      </button>
      <button
        class="clearbutton"
        title="Clear the URL field"
        on:click={() => {
          URL = "";
        }}
        ><span style="white-space:nowrap"
          ><i class="bx bx-trash" /><span class="btnlabel">Clear</span></span
        ></button
      >
    </div>
  </div>
  <div class="col-6 col-9-lg">
    <input class="url" type="text" bind:value={URL} on:keydown={keydown} />
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
    height: 50px;
    font-size: large;
    width: 50%;
  }
  .clearbutton {
    margin-left: 1rem;
    height: 50px;
    font-size: large;
    width: 50%;
  }
  .url {
    height: 50px;
    width: 100%;
  }
  .btnlabel {
    margin-left: 0.5rem;
  }
</style>
