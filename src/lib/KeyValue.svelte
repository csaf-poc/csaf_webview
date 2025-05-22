<!--
 This file is Free Software under the Apache-2.0 License
 without warranty, see README.md and LICENSES/Apache-2.0.txt for details.

 SPDX-License-Identifier: Apache-2.0

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de>
-->

<script lang="ts">
  export let keys: Array<String>;
  export let values: any;
</script>

<table class="keyvalue">
  <tbody>
    {#each keys as key, index}
      {#if key == "text" || key == "Text"}
        <tr
          ><td class="key">{key}</td><td class="value">
            <div>
              {values[index].replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, "")}
            </div>
          </td>
        </tr>
      {:else}
        <tr><td class="key">{key}</td><td class="value">{values[index]}</td></tr>
      {/if}
    {/each}
  </tbody>
</table>
