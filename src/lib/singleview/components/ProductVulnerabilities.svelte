<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de
-->

<script lang="ts">
  import { appStore } from "$lib/store";
  import { CSAFDocProps, DocumentCategory } from "../docmodel/docmodeltypes";
  import { ProductStatusSymbol } from "../productvulnerabilities/productvulnerabilitiestypes";
  let headerColumns: string[] = [];
  let productLines: string[][];
  $: if ($appStore.doc) {
    const vulnerabilities = [...$appStore.doc.productVulnerabilities];
    headerColumns = vulnerabilities.shift()!;
    productLines = vulnerabilities;
  }
  $: isDocumentASecurityAdvisory =
    $appStore.doc &&
    $appStore.doc[CSAFDocProps.CATEGORY] === DocumentCategory.CSAF_SECURITY_ADVISORY;
</script>

{#if isDocumentASecurityAdvisory}
  <div>
    <h2>Vulnerabilities overview</h2>
    {#if productLines.length > 0}
      <table class="striped">
        <thead>
          <tr>
            {#each headerColumns as column, index}
              {#if index < 2}
                <th>{column}</th>
              {:else}
                <th><a href={column}>{column}</a></th>
              {/if}
            {/each}
          </tr>
        </thead>
        <tbody>
          {#each productLines as line, index}
            <tr>
              {#each line as column, index}
                {#if index < 1}
                  <td><a href={column}>{column}</a></td>
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
