<script lang="ts">
  import FeedView from "$lib/feedview/FeedView.svelte";
  import { onMount } from "svelte";
  import { appStore } from "$lib/store";
  import { page } from "$app/stores";
  import { browser } from "$app/environment";
  import { loadFeed, loadProviderMetaData } from "$lib/urlloader";
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
