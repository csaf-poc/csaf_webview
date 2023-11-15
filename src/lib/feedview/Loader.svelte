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
  <div class="col-3">
    <div style="display:flex">
      <button
        class="loadbutton"
        title="View provider_metadata.json or ROLIE-feed from URL"
        on:click={load}
        ><i class="bx bx-file" /><span class="btnlabel">URL</span>
      </button>
      <button
        class="clearbutton"
        title="Clear the URL field"
        on:click={() => {
          url = "";
        }}><i class="bx bx-trash" /><span class="btnlabel">Clear</span></button
      >
    </div>
  </div>
  <div class="col-9">
    <input class="url" type="text" bind:value={url} on:keydown={keydown} />
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
    width: 50%;
    height: 50px;
    font-size: large;
  }
  .clearbutton {
    margin-left: 1rem;
    width: 50%;
    height: 50px;
    font-size: large;
  }
  .btnlabel {
    margin-left: 0.5rem;
  }
  .url {
    height: 50px;
  }
</style>
