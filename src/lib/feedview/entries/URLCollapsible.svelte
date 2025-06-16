<!--
 This file is Free Software under the Apache-2.0 License
 without warranty, see README.md and LICENSES/Apache-2.0.txt for details.

 SPDX-License-Identifier: Apache-2.0

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de>
-->

<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  export let open = false;
  export let level = "2";
  export let highlight = false;
  export let entry: any;
  export let lookupID: string;
  export let onClose = () => {
    //default: Do notthing
  };
  let visibility = "none";
  $: if (open) {
    visibility = "block";
  }
  let icon = "bx-chevron-down";
  /**
   * openLink opens a single document given via link in single view mode.
   * @param e
   */
  const openLink = (e: Event) => {
    let url: string | null = (e.target as Element).getAttribute("href");
    if (url) {
      const feed = $page.url.searchParams.get("q") || "";
      goto(`${base}/?q=${url}&feed=${feed}`);
      e.preventDefault();
    }
  };
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

<div class:collapsible={true} class:highlight-section={highlight}>
  {#if level == "4"}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      title={entry.title}
      style="cursor:pointer"
      id={entry.id}
      on:click={toggle}
      class="url-collapsible-title"
    >
      <h5 class="url-collapsible-titletext">
        <i class="bx {icon}" />
        <a href={lookupID} on:click={openLink}>{entry.id}: {entry.title}</a>
      </h5>
    </div>
  {/if}
  {#if visibility === "block"}
    <div class="collapsible-body">
      <slot />
    </div>
  {/if}
</div>
