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

<div class="row">
  <div class="col-12 outline">
    <div class="urlcontainer" title={tooltiptext}>
      <span class="prepend">
        <i class="bx bx-file" />
        <span class="prependtext">URL</span>
      </span>
      <input class="urlinput" type="text" bind:value={url} on:keydown={keydown} />
      {#if url}
        <span class="postpend" title="Discard search">
          <button
            on:click={() => {
              url = "";
            }}><i class="bx bx-x" /></button
          >
        </span>
      {/if}
    </div>
  </div>
</div>
{#if errormessage}
  <div class="row">
    <div class="col">
      <div class="errors text-error">{errormessage}</div>
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
    font-size: larger;
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
