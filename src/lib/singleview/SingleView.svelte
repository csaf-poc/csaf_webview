<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de
-->
<script lang="ts">
  import { appStore } from "$lib/store";
  import Collapsible from "$lib/Collapsible.svelte";
  import General from "$lib/singleview/general/General.svelte";
  import Droparea from "$lib/singleview/Droparea.svelte";
  import ProductVulnerabilities from "$lib/singleview/productvulnerabilities/ProductVulnerabilities.svelte";
  import Vulnerabilities from "./vulnerabilities/Vulnerabilities.svelte";
  import { CSAFDocProps, DocumentCategory } from "./general/docmodeltypes";
  import Upload from "./Upload.svelte";
  import ProductTree from "./producttree/ProductTree.svelte";
  import Back from "./Back.svelte";
  $: isDocumentASecurityAdvisory =
    $appStore.doc &&
    $appStore.doc[CSAFDocProps.CATEGORY] === DocumentCategory.CSAF_SECURITY_ADVISORY;
</script>

<div class="row">
  <div class="col col-3">
    <Upload />
  </div>
  <div class="col col-9">
    <Droparea />
  </div>
</div>
{#if $appStore.doc}
  <div class="row">
    <div class="col">
      <h1>{$appStore.doc?.id}: {$appStore.doc?.title}</h1>
    </div>
  </div>
  <h2>General</h2>
  <General />
{/if}
{#if isDocumentASecurityAdvisory}
  <Collapsible
    header="Vulnerabilities overview"
    open={$appStore.ui.isVulnerabilisiesOverviewVisible}
  >
    <ProductVulnerabilities />
  </Collapsible>
{/if}

{#if $appStore.doc?.isProductTreePresent}
  <Collapsible
    header="Product tree"
    open={$appStore.ui.isProductTreeVisible}
    onClose={() => {
      appStore.setProductTreeSectionInVisible();
      appStore.resetSelectedProduct();
    }}
  >
    <ProductTree />
  </Collapsible>
{/if}
{#if $appStore.doc?.isVulnerabilitiesPresent}
  <Collapsible
    header="Vulnerabilities"
    open={$appStore.ui.isVulnerabilitiesSectionVisible}
    onClose={() => {
      appStore.setVulnerabilitiesSectionInvisible();
    }}
  >
    <Vulnerabilities />
  </Collapsible>
{/if}

<!-- <Back /> -->

<style>
  h2 {
    font-weight: bold;
    margin-left: 3rem;
  }
</style>
