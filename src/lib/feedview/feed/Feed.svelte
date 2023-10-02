<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de
-->
<script lang="ts">
  import Collapsible from "$lib/Collapsible.svelte";
  import KeyValue from "$lib/KeyValue.svelte";
  import { appStore } from "$lib/store";
  import FeedView from "../FeedView.svelte";
  import Entries from "../entries/Entries.svelte";
  import Category from "./Category.svelte";
  import Links from "./Links.svelte";
  $: feed = $appStore.currentFeed?.feed;
  $: link = feed.link.find((l: any) => l.rel === "self");
</script>

{#if feed}
  <div id={link.href}>
    <KeyValue
      keys={["ID", "Title", "Updated"]}
      values={[feed?.id, feed?.title, feed?.updated]}
      compact={true}
    />
  </div>
  <Collapsible header="Links" level="3">
    <Links links={feed.link} />
  </Collapsible>
  <Collapsible header="Category" level="3">
    <Category categories={feed.category} />
  </Collapsible>
  <Collapsible header="Entries" level="3">
    <Entries entries={feed.entry} />
  </Collapsible>
{/if}
