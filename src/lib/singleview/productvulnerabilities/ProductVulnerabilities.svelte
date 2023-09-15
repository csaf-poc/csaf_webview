<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de
-->

<script lang="ts">
  import { appStore } from "$lib/store";
  import { ProductStatusSymbol } from "./productvulnerabilitiestypes";
  let headerColumns: string[] = [];
  let productLines: string[][];
  $: if ($appStore.doc) {
    const vulnerabilities = [...$appStore.doc.productVulnerabilities];
    // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
    headerColumns = vulnerabilities.shift()!;
    productLines = vulnerabilities;
  }
  const openProduct = (e: Event) => {
    // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
    let product: string = (e.target as Element).getAttribute("href")!;
    appStore.setProductTreeSectionVisible();
    appStore.setSelectedProduct(product);
    e.preventDefault();
  };
  const openCVE = (e: Event) => {
    // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
    let CVE: string = (e.target as Element).getAttribute("href")!;
    appStore.setSelectedCVE(CVE);
    appStore.setVulnerabilitiesSectionVisible();
    e.preventDefault();
  };
</script>

<div class="row">
  {#if productLines.length > 0}
    <div class="col col-10">
      <table class="striped">
        <thead>
          <tr>
            {#each headerColumns as column, index}
              {#if index < 2}
                <th>{column}</th>
              {:else}
                <th><a on:click={openCVE} href={column}>{column}</a></th>
              {/if}
            {/each}
          </tr>
        </thead>
        <tbody>
          {#each productLines as line}
            <tr>
              {#each line as column, index}
                {#if index < 1}
                  <td><a on:click={openProduct} href={column.id}>{column.name} ({column.id})</a></td
                  >
                {:else if column === "N.A"}
                  <td>{column}</td>
                {:else}
                  <td>
                    {#if column === ProductStatusSymbol.NOT_AFFECTED + ProductStatusSymbol.RECOMMENDED}
                      <i class="bx bx-heart" />
                      <i class="bx b-minus" />
                    {:else}
                      <i
                        class:bx={true}
                        class:bx-x={column === ProductStatusSymbol.KNOWN_AFFECTED}
                        class:bx-check={column === ProductStatusSymbol.FIXED}
                        class:bx-error={column === ProductStatusSymbol.UNDER_INVESTIGATION}
                        class:bx-minus={column === ProductStatusSymbol.NOT_AFFECTED}
                        class:bx-heart={column === ProductStatusSymbol.RECOMMENDED}
                      />
                    {/if}
                  </td>
                {/if}
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
    <div class="legend col col-2">
      <div class="">
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
    </div>
  {/if}
</div>

<style>
  tr {
    line-height: 2rem;
  }
  .legend {
    margin-top: auto;
  }
  dt {
    font-size: large;
    float: left;
    clear: left;
    width: 3rem;
  }
  dd {
    margin-bottom: 0.3em;
  }

  dd:last-of-type {
    margin-bottom: 0;
  }
  th {
    font-weight: 100;
  }
  h6 {
    font-weight: 600;
  }
</style>
