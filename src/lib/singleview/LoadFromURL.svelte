<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de
-->

<script lang="ts">
  import { appStore } from "$lib/store";
  import { goto } from "$app/navigation";
  import { loadSingleCSAF } from "$lib/urlloader";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  let URL = "";
  onMount(() => {
    if (/^\?q=/.test($page.url.search)) {
      URL = $page.url.search.replace("?q=", "");
    }
  });
  const loads = () => {
    loadSingleCSAF(URL);
    goto(`/?q=${URL}`);
  };
  const keydown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loads();
    }
  };
</script>

<div class="row">
  <div class="col">
    <div style="display:flex">
      <button class="loadbutton" on:click={loads}><i class="bx bx-book-open" />URL</button>
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
