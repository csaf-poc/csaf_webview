<!--
 This file is Free Software under the Apache-2.0 License
 without warranty, see README.md and LICENSES/Apache-2.0.txt for details.

 SPDX-License-Identifier: Apache-2.0

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de>
-->
<script lang="ts">
  import { appStore } from "$lib/store";
  import Back from "$lib/Back.svelte";
  import Collapsible from "$lib/Collapsible.svelte";
  import Feed from "./feed/Feed.svelte";
  import Overview from "./feed/Overview.svelte";
  import UrlLoader from "$lib/UrlLoader.svelte";
  import { base } from "$app/paths";
  // Initial selections for dropdown example picker
  let selectedOption = "";
  let feedUrl = "";

  // How to call the feeds in the dropdown menu
  const dropdownChoices: string[] = [
    "BSI Provider-Metadata",
    "Siemens WHITE",
    "Intevation Provider-Metadata"
  ];

  // loadExampleFeed loads the example feed/provider-metadata.json depending on the string selected in the dropdown menu into the url field
  function loadExampleFeed(): void {
    const feedUrls: Record<string, string> = {
      "BSI Provider-Metadata": "https://wid.cert-bund.de/.well-known/csaf/provider-metadata.json",
      "Siemens WHITE": "https://cert-portal.siemens.com/productcert/csaf/ssa-feed-tlp-white.json",
      "Intevation Provider-Metadata":
        "https://intevation.de/.well-known/csaf/provider-metadata.json"
    };
    feedUrl = feedUrls[selectedOption] || "";
  }
</script>

<UrlLoader
  baseroute={`${base}/feed?q=`}
  tooltiptext={"URL to fetch provider metadata or ROLIE-feed"}
  placeholder={"ROLIE feed or provider metadata URL"}
  errormessage={$appStore.ui.feedErrorMsg}
  bind:url={feedUrl}
/>
<Overview />
{#if $appStore.currentFeed}
  <Collapsible
    header={$appStore.currentFeed?.feed.title}
    open={$appStore.ui.isFeedSectionOpen}
    onClose={() => {
      appStore.setFeedSectionClosed();
    }}
  >
    <Feed />
  </Collapsible>
{/if}

{#if $appStore.ui.history.length > 0}
  <Back />
{/if}
<br />
<br />
<br />
Example Feeds
<div class="dropdown-container">
  <select bind:value={selectedOption}>
    {#each dropdownChoices as choice}
      <option value={choice}>{choice}</option>
    {/each}
  </select>
  <button on:click={loadExampleFeed}>Fill in example Feed</button>
</div>
