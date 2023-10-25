<script lang="ts">
  import { appStore } from "$lib/store";
  import { browser } from "$app/environment";
  import { loadFeed, loadProviderMetaData } from "$lib/urlloader";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import FeedView from "$lib/feedview/FeedView.svelte";
  import Spinner from "$lib/Spinner.svelte";
  $: if (browser) {
    if (/^\?q=/.test($page.url.search)) {
      const url = $page.url.search.replace("?q=", "");
      if (/provider-metadata\.json/.test(url)) {
        loadProviderMetaData(url);
      } else {
        loadFeed(url);
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
    if (/^\?q=/.test($page.url.search)) {
      const url = $page.url.search.replace("?q=", "");
      if (/provider-metadata\.json/.test(url)) {
        loadProviderMetaData(url);
      } else {
        loadFeed(url);
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
