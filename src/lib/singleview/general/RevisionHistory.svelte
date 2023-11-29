<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de>
-->

<script lang="ts">
  import { appStore } from "$lib/store";
</script>

{#if $appStore.doc?.isRevisionHistoryPresent}
  <div class="revisionhistory">
    <table class="striped">
      <thead>
        <tr
          ><th class="history-date">Date</th>
          <th class="history-number">Number</th>
          <th class="history-summary">Summary</th>
          <th class="hisotry-legacyversion">Legacy_version</th>
        </tr>
      </thead>
      <tbody>
        {#each $appStore.doc?.revisionHistory as entry}
          <tr>
            <td>{entry.date}</td><td>{entry.number}</td><td>{entry.summary}</td><td
              >{#if entry.legacyVersion}{entry.legacyVersion}{/if}</td
            >
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
{/if}
