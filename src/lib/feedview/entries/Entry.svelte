<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de
-->

<script lang="ts">
  import Collapsible from "$lib/Collapsible.svelte";
  import KeyValue from "$lib/KeyValue.svelte";
  import { appStore } from "$lib/store";
  import { loadSingleCSAF } from "$lib/urlloader";
  import { tick } from "svelte";
  export let entry: any;
  async function switchSingleMode() {
    await tick();
    appStore.setSingleMode();
  }
  const open = (e: Event) => {
    let url: string = (e.target as Element).getAttribute("href")!;
    switchSingleMode();
    loadSingleCSAF(url);
    e.preventDefault();
  };
</script>

<KeyValue
  compact={true}
  keys={["ID", "Published", "Title", "Updated"]}
  values={[entry.id, entry.published, entry.title, entry.updated]}
/>
<Collapsible header="Content" level="5">
  <KeyValue
    compact={true}
    keys={["Type", "Src"]}
    values={[entry.content.type, entry.content.src]}
  />
</Collapsible>
<Collapsible header="Format" level="5">
  <KeyValue
    compact={true}
    keys={["Schema", "Version"]}
    values={[entry.format.schema, entry.format.version]}
  />
</Collapsible>

<Collapsible header="Links" level="5">
  <table>
    {#each entry.link as link}
      <tr>
        <td class="key">{link.rel}: </td>
        <td>
          {#if link.rel === "self"}
            <a href={link.href} on:click={open}>{link.href}</a>
          {:else}
            <a target="_blank" href={link.href}>{link.href}</a>
          {/if}
        </td>
      </tr>
    {/each}
  </table>
</Collapsible>

<style>
  .key {
    width: 6vw;
  }
  td {
    padding: 0.3rem;
  }
</style>
