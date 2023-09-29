<script lang="ts">
  import KeyValue from "$lib/KeyValue.svelte";
  import { appStore } from "$lib/store";
  $: feed = $appStore.currentFeed?.feed;
  $: link = feed.link.find((l: any) => l.rel === "self");
</script>

{#if feed}
  <div id={link.href}>
    <KeyValue keys={["ID", "Title"]} values={[feed?.id, feed?.title]} compact={true} />
  </div>
{/if}
