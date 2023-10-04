<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de
-->

<script lang="ts">
  import Collapsible from "$lib/Collapsible.svelte";
  import Entry from "./Entry.svelte";
  import { appStore } from "$lib/store";
  import { loadSingleCSAF } from "$lib/urlloader";
  import { tick } from "svelte";
  export let entries: any = [];
  export let year: string;
  let visibility = "none";
  let icon = "bx-chevron-down";
  async function switchSingleMode() {
    await tick();
    appStore.setSingleMode();
  }
  const open = (e: Event) => {
    let url: string = (e.target as Element).getAttribute("href")!;
    switchSingleMode();
    loadSingleCSAF(url);
    window.location.hash = `#/single?q=${url}`;
    e.preventDefault();
  };
  const toggle = () => {
    if (visibility === "block") {
      visibility = "none";
    } else {
      visibility = "block";
    }
  };
  const entryIDURLLookup = entries.reduce((acc: any, entry: any) => {
    const selfURL = entry.link.find((link: any) => link.rel === "self");
    acc[entry.id] = selfURL.href;
    return acc;
  }, {});
  $: if (visibility === "block") {
    icon = "bx-chevron-down";
  } else {
    icon = "bx-chevron-right";
  }
</script>

<Collapsible header={year} level="4">
  {#each entries as entry}
    <div class:collapsible={true}>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div style="cursor:pointer">
        <h4>
          <i class="bx {icon}" on:click={toggle} /><a
            href={entryIDURLLookup[entry.id]}
            on:click={open}>{entry.title}</a
          >
        </h4>
      </div>
      <div style="display:{visibility}" class="body">
        <Entry {entry} />
      </div>
    </div>
  {/each}
</Collapsible>

<style>
  h4 {
    padding: 0;
  }
  .body {
    margin-left: 3rem;
  }
</style>
