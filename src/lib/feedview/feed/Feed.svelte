<script lang="ts">
  import KeyValue from "$lib/KeyValue.svelte";
  import { appStore } from "$lib/store";
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
{/if}
