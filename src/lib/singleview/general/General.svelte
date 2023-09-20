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
  $: publisherIssuingAuthority = $appStore.doc?.publisher.issuing_authority;
  $: publisherContactDetails = $appStore.doc?.publisher.contact_details;
  $: category = $appStore.doc?.category;
  $: title = $appStore.doc?.title;
  $: lang = $appStore.doc?.lang;
  $: csafVersion = $appStore.doc?.csafVersion;
  $: tlp = $appStore.doc?.tlp;
  $: tlpurl = $appStore.doc?.tlp.url;
  $: if (tlp?.label === TLP.WHITE) {
    tlpStyle = "tlpclear";
  } else if (tlp?.label === TLP.RED) {
    tlpStyle = "tlred";
  } else if (tlp?.label === TLP.AMBER) {
    tlpStyle = "tlamber";
  } else if (tlp?.label === TLP.GREEN) {
    tlpStyle = "tlgreen";
  }
  $: id = $appStore.doc?.id;
  $: published = $appStore.doc?.published;
  $: lastUpdate = $appStore.doc?.lastUpdate;
  $: status = $appStore.doc?.status;
</script>

<div class="documentdata">
  <table>
    <tr>
      <td class="key">ID</td>
      <td class="value">{id}</td>
    </tr>
    <tr>
      <td class="key">CSAF-Version</td>
      <td class="value">{csafVersion}</td>
    </tr>
    {#if tlp?.label}
      <tr>
        <td class="key">TLP</td>
        <td class="value"><span class={tlpStyle}>{tlp?.label}</span></td>
      </tr>
    {/if}
    {#if tlp?.url}
      <tr>
        <td class="key">TLP URL</td>
        <td class="value"><a href={tlpurl}>{tlp?.url}</a></td>
      </tr>
    {/if}
    <tr>
      <td class="key">Category</td>
      <td class="value">{category}</td>
    </tr>
    <tr>
      <td class="key">Title</td>
      <td class="value">{title}</td>
    </tr>
    <tr>
      <td class="key">Publisher name</td>
      <td class="value">{publisherName}</td>
    </tr>
    <tr>
      <td class="key">Publisher category</td>
      <td class="value">{publisherCategory}</td>
    </tr>
    <tr>
      <td class="key">Publisher namespace</td>
      <td class="value">{publisherNamespace}</td>
    </tr>
    {#if publisherIssuingAuthority}
      <tr>
        <td class="key">Publisher issuing authority</td>
        <td class="value">{publisherIssuingAuthority}</td>
      </tr>
    {/if}
    {#if publisherContactDetails}
      <tr>
        <td class="key">Publisher contact details</td>
        <td class="value">{publisherContactDetails}</td>
      </tr>
    {/if}
    {#if lang}
      <tr>
        <td class="key">Language</td>
        <td class="value">{lang}</td>
      </tr>
    {/if}
    <tr>
      <td class="key">Published</td>
      <td class="value">{published}</td>
    </tr>
    <tr>
      <td class="key">Last update</td>
      <td class="value">{lastUpdate}</td>
    </tr>
    <tr>
      <td class="key">Tracking Version</td>
      <td class="value">{trackingVersion}</td>
    </tr>
    {#if $appStore.doc?.status !== Status.final}
      <tr>
        <td class="key">Status</td>
        <td class="value">{status}</td>
      </tr>
    {/if}
  </table>
</div>

{#if $appStore.doc?.isRevisionHistoryPresent}
  <div class="revisionhistorysection">
    <Collapsible header="Revision history" level="3" open={$appStore.ui.isRevisionHistoryVisible}>
      <div class="revisionhistory">
        <table class="striped">
          <thead>
            <tr
              ><th class="date">Date</th>
              <th class="number">Number</th>
              <th class="summary">Summary</th>
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
  </div>
{/if}

<style>
  .key {
    width: 21rem;
    padding: 0.2rem;
    vertical-align: top;
  }
  .date {
    width: 20%;
  }
  .number {
    width: 5%;
  }
  .summary {
    width: 80%;
  }
  .value {
    padding: 0.2rem;
  }
  .revisionhistorysection {
    margin-left: 3rem;
  }
  .documentdata {
    width: 60vw;
    min-width: 80rem;
    margin-left: 3rem;
  }
  .revisionhistory {
    width: 60vw;
    min-width: 70rem;
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
