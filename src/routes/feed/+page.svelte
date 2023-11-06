<script lang="ts">
  import { appStore } from "$lib/store";
  import { browser } from "$app/environment";
  import { loadFeed, loadProviderMetaData } from "$lib/urlloader";
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
      if (/provider-metadata\.json/.test(feed)) {
        loadProviderMetaData(feed);
      } else {
        loadFeed(feed);
      }
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
      if (/provider-metadata\.json/.test(feed)) {
        loadProviderMetaData(feed);
      } else {
        loadFeed(feed);
      }
    } else {
      appStore.setCurrentFeed(null);
      appStore.setProviderMetadata(null);
    }
    appStore.setFeedMode();
  });
</script>

<FeedView />
<Spinner open={$appStore.ui.feedLoading} />
