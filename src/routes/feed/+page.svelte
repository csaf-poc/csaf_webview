<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de>
-->
<script lang="ts">
  import { appStore } from "$lib/store";
  import { browser } from "$app/environment";
  import { load } from "$lib/urlloader";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import FeedView from "$lib/feedview/FeedView.svelte";
  import Spinner from "$lib/Spinner.svelte";
  $: if (browser) {
    const feed = $page.url.searchParams.get("q") || "";
    const doc = $page.url.searchParams.get("doc") || "";
    if (doc) appStore.setLastDoc(`${doc}`);
    if (feed) {
      appStore.setLastFeed(`${feed}`);
      load(feed);
    } else {
      appStore.setCurrentFeed(null);
      appStore.setProviderMetadata(null);
    }
  }
  appStore.setFeedMode();
  /**
   * onMount checks whether there is a query parameter given to load a feed.
   */
  onMount(() => {
    appStore.clearHistory();
    const feed = $page.url.searchParams.get("q") || "";
    const doc = $page.url.searchParams.get("doc") || "";
    if (doc) appStore.setLastDoc(`${doc}`);
    if (feed) {
      appStore.setLastFeed(`${feed}`);
      load(feed);
    } else {
      appStore.setCurrentFeed(null);
      appStore.setProviderMetadata(null);
    }
    appStore.setFeedMode();
  });
</script>

<div class="appbody">
  <FeedView />
</div>
<Spinner modal={false} active={$appStore.ui.loading} />
