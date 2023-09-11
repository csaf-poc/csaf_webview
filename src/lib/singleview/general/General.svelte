<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de
-->
<script lang="ts">
  import Collapsible from "$lib/Collapsible.svelte";
  import { Status, TLP } from "$lib/singleview/general/docmodeltypes";
  import { appStore } from "$lib/store";
  let tlpStyle = "";
  $: trackingVersion = $appStore.doc?.trackingVersion;
  $: publisherName = $appStore.doc?.publisher.name;
  $: publisherCategory = $appStore.doc?.publisher.category;
  $: publisherNamespace = $appStore.doc?.publisher.namespace;
  $: category = $appStore.doc?.category;
  $: title = $appStore.doc?.title;
  $: lang = $appStore.doc?.lang;
  $: csafVersion = $appStore.doc?.csafVersion;
  $: tlp = $appStore.doc?.tlp;
  $: if (tlp === TLP.WHITE) {
    tlpStyle = "tlpclear";
  } else if (tlp === TLP.RED) {
    tlpStyle = "tlred";
  } else if (tlp === TLP.AMBER) {
    tlpStyle = "tlamber";
  } else if (tlp === TLP.GREEN) {
    tlpStyle = "tlgreen";
  }
  $: id = $appStore.doc?.id;
  $: published = $appStore.doc?.published;
  $: lastUpdate = $appStore.doc?.lastUpdate;
  $: status = $appStore.doc?.status;
</script>

<div class="documentdata">
  <dl>
    <dt>ID</dt>
    <dd>{id}</dd>
    <dt>CSAF-Version</dt>
    <dd>{csafVersion}</dd>
    <dt>TLP</dt>
    <dd><span class={tlpStyle}>{tlp}&nbsp;</span></dd>
    <dt>Category</dt>
    <dd>{category}</dd>
    <dt>Title</dt>
    <dd>{title}</dd>
    <dt>Publisher name</dt>
    <dd>{publisherName}</dd>
    <dt>Publisher category</dt>
    <dd>{publisherCategory}</dd>
    <dt>Publisher namespace</dt>
    <dd>{publisherNamespace}</dd>
    <dt>Language</dt>
    <dd>{lang}&nbsp;</dd>
    <dt>Published</dt>
    <dd>{published}</dd>
    <dt>Last update</dt>
    <dd>{lastUpdate}</dd>
    <dt>Tracking Version</dt>
    <dd>{trackingVersion}</dd>
    {#if $appStore.doc?.status !== Status.final}
      <dt>Status</dt>
      <dd>{status}</dd>
    {/if}
  </dl>
</div>

{#if $appStore.doc?.isRevisionHistoryPresent}
  <Collapsible header="Revision history" level="3" open={$appStore.ui.isRevisionHistoryVisible}>
    <div class="revisionhistory">
      <table class="striped">
        <thead>
          <tr
            ><th>Date</th>
            <th>Number</th>
            <th>Summary</th>
            <th>Legacy_version</th>
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
  </Collapsible>
{/if}

<style>
  .documentdata {
    width: 60vw;
    min-width: 80rem;
  }
  .revisionhistory {
    width: 40vw;
    min-width: 70rem;
  }
  dt {
    float: left;
    clear: left;
    width: 21rem;
    font-weight: 100;
  }
  dd {
    margin-bottom: 0.1em;
  }
  .tlpclear {
    background: #000;
    color: #fff;
  }
  .tlpred {
    background: #ff2b2b;
    color: #fff;
  }
  .tlpamber {
    background: #ffc000;
    color: #fff;
  }
  .tlpgreen {
    background: #33ff00;
    color: #fff;
  }
  th {
    font-weight: 100;
  }
</style>
