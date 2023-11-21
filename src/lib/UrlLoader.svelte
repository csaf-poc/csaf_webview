<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de>
-->

<script lang="ts">
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  export let baseroute: string;
  export let tooltiptext: string;
  export let errormessage: string;
  export let placeholder: string;
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
    goto(baseroute + url);
  };

  /**
   * keydown loads provider metadata when "Enter"-key was pressed.
   * @param e
   */
  const keydown = (e: KeyboardEvent) => {
    if (e.key === "Enter") load();
  };
</script>

<div class="url-outline">
  <div class="url-container" title={tooltiptext}>
    <div class="prepend">
      <i class="bx bx-file" />
      <span class="prependtext">URL</span>
    </div>
    <div class="url-input">
      <input {placeholder} type="text" bind:value={url} on:keydown={keydown} />
    </div>
    {#if url}
      <div class="postpend" title="Discard search">
        <button
          on:click={() => {
            url = "";
          }}><i class="bx bx-x" /></button
        >
      </div>
    {/if}
  </div>
</div>
{#if errormessage}
  <div class="error-message">
    {errormessage}
  </div>
{/if}
