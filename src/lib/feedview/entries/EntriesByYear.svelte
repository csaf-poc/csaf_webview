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

  export let entries: any = [];
  export let year: string;
</script>

<Collapsible header={year} level="4">
  {#each entries as entry}
    <Collapsible header={`${entry.title} (${entry.id})`} level="5">
      <Entry {entry} />
    </Collapsible>
  {/each}
</Collapsible>
