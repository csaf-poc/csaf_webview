<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de>
-->
<script lang="ts">
  import { appStore } from "$lib/store";
  import Back from "../Back.svelte";
  import Collapsible from "$lib/Collapsible.svelte";
  import Droparea from "$lib/singleview/Droparea.svelte";
  import General from "$lib/singleview/general/General.svelte";
  import ProductTree from "./producttree/ProductTree.svelte";
  import ProductVulnerabilities from "$lib/singleview/productvulnerabilities/ProductVulnerabilities.svelte";
  import Upload from "./Upload.svelte";
  import Vulnerabilities from "./vulnerabilities/Vulnerabilities.svelte";
  import UrlLoader from "$lib/UrlLoader.svelte";
  import { base } from "$app/paths";
  $: isCSAF = !(
    !$appStore.doc?.isRevisionHistoryPresent &&
    !$appStore.doc?.isDocPresent &&
    !$appStore.doc?.isProductTreePresent &&
    !$appStore.doc?.isPublisherPresent &&
    !$appStore.doc?.isTLPPresent &&
    !$appStore.doc?.isTrackingPresent &&
    !$appStore.doc?.isVulnerabilitiesPresent
  );
</script>

<div class="loadfromurl">
  <UrlLoader
    baseroute={`${base}/?q=`}
    tooltiptext={"URL to fetch Advisory from"}
    errormessage={$appStore.ui.singleErrorMsg}
  />
</div>
<div class="row">
  <div class="col-6 col-3-lg">
    <Upload />
  </div>
  <div class="col-6 col-9-lg">
    <Droparea />
  </div>
</div>

{#if isCSAF}
  {#if $appStore.doc}
    <div class="row">
      <div class="col">
        <h1>{$appStore.doc["id"]}: {$appStore.doc["title"]}</h1>
      </div>
    </div>
    <Collapsible header="General" open={$appStore.ui.isGeneralSectionVisible}>
      <General />
    </Collapsible>
  {/if}
  {#if $appStore.doc?.productVulnerabilities.length > 1}
    <Collapsible
      header="Vulnerabilities overview"
      open={$appStore.ui.isVulnerabilitiesOverviewVisible}
    >
      <ProductVulnerabilities />
    </Collapsible>
  {:else}
    <h2>No Vulnerabilities overview</h2>
    (As no products are connected to vulnerabilities.)
  {/if}

  {#if $appStore.doc && $appStore.doc["isProductTreePresent"]}
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
  {#if $appStore.doc && $appStore.doc["isVulnerabilitiesPresent"]}
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

  {#if $appStore.ui.history.length > 0}
    <Back />
  {/if}
{/if}

<style>
  h1 {
    padding: 0;
    margin-top: 3rem;
  }
  h2 {
    /* style similar to h2 in Collapsible.svelte */
    margin: 0;
    font-weight: bold;
  }
  .loadfromurl {
    margin-bottom: 1rem;
  }
</style>
