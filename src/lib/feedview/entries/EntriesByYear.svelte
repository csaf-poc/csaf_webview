<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de>
-->

<script lang="ts">
  import Collapsible from "$lib/Collapsible.svelte";
  import UrlCollapsible from "$lib/feedview/entries/URLCollapsible.svelte";
  import Entry from "./Entry.svelte";
  import type { EntryIDURLLookup, EntryType, Link } from "./entrytypes";
  export let entries: EntryType[] = [];
  export let year: string;
  const entryIDURLLookup = entries.reduce((acc: EntryIDURLLookup, entry: EntryType) => {
    const selfURL = entry.link.find((link: Link) => link.rel === "self");
    acc[entry.id] = selfURL!.href;
    return acc;
  }, {});
</script>

<Collapsible header={year} level="4">
  {#each entries as entry}
    <UrlCollapsible {entry} lookupID={entryIDURLLookup[entry.id]} level="4">
      <Entry {entry} />
    </UrlCollapsible>
  {/each}
</Collapsible>
