<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de
-->

<script lang="ts">
  import { appStore } from "$lib/store";
  let headerColumns: any = [];
  let productLines: string[][];
  $: if ($appStore.doc) {
    const vulnerabilities = [...$appStore.doc.vulnerabilities];
    headerColumns = vulnerabilities.shift();
    productLines = vulnerabilities;
  }
</script>

{#if $appStore.doc}
  <div>
    <h2>Vulnerabilities overview</h2>
    {#if productLines.length > 0}
      <table class="striped">
        <thead>
          <tr>
            {#each headerColumns as column, index}
              <th>{column}</th>
            {/each}
          </tr>
        </thead>
        <tbody>
          {#each productLines as line, index}
            <tr>
              {#each line as column, index}
                {#if index < 1}
                  <td>{column}</td>
                {:else if column === "N.A"}
                  <td>{column}</td>
                {:else}
                  <td
                    ><i
                      class:bx={true}
                      class:bx-x={column === "K"}
                      class:bx-check={column === "F"}
                      class:bx-error={column === "U"}
                      class:bx-minus={column === "N"}
                      class:bx-heart={column === "R"}
                    /></td
                  >
                {/if}
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
      <div class="legend">
        <h6>Legend</h6>
        <dl>
          <dt><i class="bx bx-check" /></dt>
          <dd>Fixed</dd>
          <dt><i class="bx bx-error" /></dt>
          <dd>Under investigation</dd>
          <dt><i class="bx bx-x" /></dt>
          <dd>Known affected</dd>
          <dt><i class="bx bx-minus" /></dt>
          <dd>Not affected</dd>
          <dt><i class="bx bx-heart" /></dt>
          <dd>Recommended</dd>
        </dl>
      </div>
    {/if}
  </div>
{/if}

<style>
  tr {
    line-height: 2rem;
  }
  .legend {
    margin-top: 2rem;
  }
  dt {
    font-size: large;
    float: left;
    clear: left;
    width: 1rem;
  }
  dd {
    margin-bottom: 0.3em;
  }
</style>
