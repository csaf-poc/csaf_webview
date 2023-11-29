<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de>
-->

<script lang="ts">
  import { appStore } from "$lib/store";
  import { loadSingleCSAF } from "$lib/urlloader";
  import { tick } from "svelte";
  import Collapsible from "$lib/Collapsible.svelte";
  import KeyValue from "$lib/KeyValue.svelte";
  import type { EntryType } from "./entrytypes";
  export let entry: EntryType;
  /**
   * switchSingleMode waits for UI to settle and switches to single mode.
   */
  async function switchSingleMode() {
    await tick();
    appStore.setSingleMode();
  }
  /**
   * open opens document in the single view mode via given link.
   * @param e
   */
  const open = (e: Event) => {
    let url: string = (e.target as Element).getAttribute("href")!;
    switchSingleMode();
    loadSingleCSAF(url);
    e.preventDefault();
  };
</script>

<KeyValue
  keys={["ID", "Published", "Title", "Updated"]}
  values={[entry.id, entry.published, entry.title, entry.updated]}
/>
<Collapsible header="Content" level="5">
  <KeyValue keys={["Type", "Src"]} values={[entry.content.type, entry.content.src]} />
</Collapsible>
<Collapsible header="Format" level="5">
  <KeyValue keys={["Schema", "Version"]} values={[entry.format.schema, entry.format.version]} />
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
