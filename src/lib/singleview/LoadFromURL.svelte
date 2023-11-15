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
  <div class="col-12 outline">
    <div class="urlcontainer" title="URL to fetch Advisory from">
      <span class="prepend">
        <i class="bx bx-file" /><span class="prependtext">URL</span>
      </span>
      <input class="urlinput" type="text" bind:value={URL} on:keydown={keydown} />
      {#if URL}
        <span class="postpend" title="Discard search">
          <button
            on:click={() => {
              URL = "";
            }}><i class="bx bx-x" /></button
          >
        </span>
      {/if}
    </div>
  </div>
</div>
{#if $appStore.ui.singleErrorMsg}
  <div class="row">
    <div class="col-12">
      <div class="errors text-error">{$appStore.ui.singleErrorMsg}</div>
    </div>
  </div>
{/if}

<style>
  .errors {
    font-size: x-large;
    font-weight: bold;
  }
  .outline {
    padding: 0.5rem;
    border: 1px solid #d2d6dd;
    border-radius: 5px;
  }
  .bx-x {
    font-size: larger;
  }
  .postpend {
    line-height: 1.1rem;
  }
  .postpend button {
    background: #fff;
  }
  .prepend {
    padding-left: 1rem;
    width: 7rem;
    white-space: nowrap;
  }
  .prependtext {
    margin-left: 0.1rem;
  }
  .urlinput {
    border: 0;
  }
  input:focus {
    outline: 0 !important;
    border: 0;
    border-color: #fff;
    border-radius: 0;
    box-shadow: none;
    -webkit-box-shadow: none;
  }
  .urlcontainer {
    display: flex;
    align-items: center;
    height: 40px;
  }
</style>
