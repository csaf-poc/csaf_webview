<!--
 This file is Free Software under the Apache-2.0 License
 without warranty, see README.md and LICENSES/Apache-2.0.txt for details.

 SPDX-License-Identifier: Apache-2.0

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de>
-->

<script lang="ts">
  import EntriesByYear from "./EntriesByYear.svelte";
  import type { EntryType, EntriesByYearRecord } from "./entrytypes";

  export let entries: EntryType[] = [];
  /**
   * entriesByYear contains etries grouped by years.
   */
  const entriesByYear = entries.reduce((acc: EntriesByYearRecord, entry: EntryType) => {
    const published = new Date(entry.published);
    if (!acc[published.getFullYear()]) acc[published.getFullYear()] = [];
    acc[published.getFullYear()].push(entry);
    return acc;
  }, {});
  const years = Object.keys(entriesByYear).sort((entry1: any, entry2: any) => {
    if (entry1 < entry2) return 1;
    if (entry1 > entry2) return -1;
    return 0;
  });
</script>

{#each years as year}
  <EntriesByYear {year} entries={entriesByYear[year]} />
{/each}
