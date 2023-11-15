<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de>
-->

<script lang="ts">
  export let header: string;
  export let open = false;
  export let level = "2";
  export let class_ = "";
  export let highlight = false;
  export let onClose = () => {
    //default: Do notthing
  };
  let visibility = "none";
  $: if (open) {
    visibility = "block";
  } else {
    visibility = "none";
  }
  let icon = "bx-chevron-down";
  /**
   * toggle toggles visibility of content.
   */
  const toggle = () => {
    if (visibility === "block") {
      onClose();
      visibility = "none";
    } else {
      visibility = "block";
    }
  };
  $: if (visibility === "block") {
    icon = "bx-chevron-down";
  } else {
    icon = "bx-chevron-right";
  }
</script>

<div class:collapsible={true} class:bg-light={highlight}>
  {#if level == "2"}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div style="cursor:pointer" id={header} on:click={toggle} class={class_}>
      <h2><i class="bx {icon}" />{header}</h2>
    </div>
  {/if}
  {#if level == "3"}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div style="cursor:pointer" id={header} on:click={toggle} class={class_}>
      <h3><i class="bx {icon}" />{header}</h3>
    </div>
  {/if}
  {#if level == "4"}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div style="cursor:pointer" id={header} on:click={toggle} class={class_}>
      <h4><i class="bx {icon}" />{header}</h4>
    </div>
  {/if}
  {#if level == "5"}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div style="cursor:pointer" id={header} on:click={toggle} class={class_}>
      <h6><i class="bx {icon}" />{header}</h6>
    </div>
  {/if}
  {#if visibility === "block"}
    <div class="body">
      <slot />
    </div>
  {/if}
</div>

<style>
  .collapsible {
    white-space: nowrap;
    width: fit-content;
    max-width: 95vw;
  }
  .body {
    padding-left: 3rem;
    white-space: normal;
  }
  h2,
  h3,
  h4 {
    margin: 0;
  }
  h3,
  h4 {
    line-height: 3rem;
  }
  h2 {
    font-weight: bold;
  }
  h6 {
    line-height: 0.3em;
    font-size: large;
    margin: 0.6rem;
  }
</style>
