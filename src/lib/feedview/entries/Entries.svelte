<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de
-->

<script lang="ts">
  import EntriesByYear from "./EntriesByYear.svelte";

  export let entries: any = [];
  const entriesByYear = entries.reduce((acc: any, entry: any) => {
    const published = new Date(entry.published);
    if (!acc[published.getFullYear()]) acc[published.getFullYear()] = [];
    acc[published.getFullYear()].push(entry);
    return acc;
  }, {});
  const years = Object.keys(entriesByYear).sort();
</script>

{#each years as year}
  <EntriesByYear {year} entries={entriesByYear[year]} />
{/each}
