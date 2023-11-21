<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de>
-->
<script lang="ts">
  import { appStore } from "$lib/store";
  import { Status, TLP } from "$lib/singleview/docmodel/docmodeltypes";
  import Acknowledgments from "$lib/singleview/acknowledgments/Acknowledgments.svelte";
  import Collapsible from "$lib/Collapsible.svelte";
  import Notes from "$lib/singleview/notes/Notes.svelte";
  import References from "$lib/singleview/references/References.svelte";
  import RevisionHistory from "./RevisionHistory.svelte";
  import ValueList from "../../ValueList.svelte";
  let tlpStyle = "";
  $: aliases = $appStore.doc?.aliases;
  $: trackingVersion = $appStore.doc?.trackingVersion;
  $: generator = $appStore.doc?.generator;
  $: publisherName = $appStore.doc?.publisher.name;
  $: publisherCategory = $appStore.doc?.publisher.category;
  $: publisherNamespace = $appStore.doc?.publisher.namespace;
  $: publisherIssuingAuthority = $appStore.doc?.publisher.issuing_authority;
  $: publisherContactDetails = $appStore.doc?.publisher.contact_details;
  $: category = $appStore.doc?.category;
  $: title = $appStore.doc?.title;
  $: lang = $appStore.doc?.lang;
  $: sourceLang = $appStore.doc?.sourceLang;
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
  $: if (
    !$appStore.doc?.isRevisionHistoryPresent &&
    !$appStore.doc?.isDocPresent &&
    !$appStore.doc?.isProductTreePresent &&
    !$appStore.doc?.isPublisherPresent &&
    !$appStore.doc?.isTLPPresent &&
    !$appStore.doc?.isTrackingPresent &&
    !$appStore.doc?.isVulnerabilitiesPresent
  ) {
    appStore.setSingleErrorMsg("Are you sure the URL refers to a CSAF document?");
  }
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
    {#if $appStore.doc?.aggregateSeverity}
      <tr>
        <td class="key">Aggregate severity text</td>
        <td class="value"><span>{$appStore.doc?.aggregateSeverity.text}</span></td>
      </tr>
      {#if $appStore.doc?.aggregateSeverity.namespace}
        <tr>
          <td class="key">Aggregate severity namespace</td>
          <td class="value"><span>{$appStore.doc?.aggregateSeverity.namespace}</span></td>
        </tr>
      {/if}
    {/if}
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
    {#if sourceLang}
      <tr>
        <td class="key">Source lang</td>
        <td class="value">{sourceLang}</td>
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
    {#if generator}
      <tr>
        <td class="key">Generator engine</td>
        <td class="value"><span>{$appStore.doc?.generator?.engine.name}</span></td>
      </tr>
    {/if}
    {#if generator?.engine?.version}
      <tr>
        <td class="key">Generator engine version</td>
        <td class="value"><span>{$appStore.doc?.generator?.engine.version}</span></td>
      </tr>
    {/if}
    {#if generator?.date}
      <tr>
        <td class="key">Generator date</td>
        <td class="value"><span>{generator?.date}</span></td>
      </tr>
    {/if}
  </table>
</div>

{#if aliases}
  <ValueList label="Aliases" values={aliases} />
{/if}

{#if $appStore.doc?.isRevisionHistoryPresent}
  <div class="subsection">
    <Collapsible header="Revision history" level="3" open={$appStore.ui.isRevisionHistoryVisible}>
      <RevisionHistory />
    </Collapsible>
  </div>
{/if}

{#if $appStore.doc?.notes}
  <div class="subsection">
    <Collapsible header="Notes" level="3">
      <Notes notes={$appStore.doc?.notes} />
    </Collapsible>
  </div>
{/if}

{#if $appStore.doc?.acknowledgements}
  <div class="subsection">
    <Collapsible header="Acknowledgements" level="3">
      <Acknowledgments acknowledgments={$appStore.doc?.acknowledgements} />
    </Collapsible>
  </div>
{/if}

{#if $appStore.doc && $appStore.doc.references.length > 0}
  <div class="subsection">
    <Collapsible header="References" level="3">
      <References references={$appStore.doc?.references} />
    </Collapsible>
  </div>
{/if}
