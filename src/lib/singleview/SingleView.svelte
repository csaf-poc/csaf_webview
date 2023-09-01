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
  import General from "$lib/singleview/components/General.svelte";
  import Droparea from "$lib/singleview/components/Droparea.svelte";
  import ProductVulnerabilities from "$lib/singleview/components/ProductVulnerabilities.svelte";
  import Vulnerabilities from "./components/vulnerabilities/Vulnerabilities.svelte";
  import { CSAFDocProps, DocumentCategory } from "./docmodel/docmodeltypes";
  $: isDocumentASecurityAdvisory =
    $appStore.doc &&
    $appStore.doc[CSAFDocProps.CATEGORY] === DocumentCategory.CSAF_SECURITY_ADVISORY;
</script>

<div class="row">
  <div class="col">
    <Droparea />
  </div>
</div>
{#if $appStore.doc}
  <div class="row">
    <div class="col">
      <Collapsible header="General">
        <General />
      </Collapsible>
    </div>
  </div>
{/if}
{#if isDocumentASecurityAdvisory}
  <div class="row">
    <div class="col">
      <Collapsible header="Vulnerabilities overview" open={false}>
        <ProductVulnerabilities />
      </Collapsible>
    </div>
  </div>
{/if}
{#if $appStore.doc?.isVulnerabilitiesPresent}
  <div class="row">
    <div class="col">
      <Collapsible header="Vulnerabilities" open={false}>
        <Vulnerabilities />
      </Collapsible>
    </div>
  </div>
{/if}
