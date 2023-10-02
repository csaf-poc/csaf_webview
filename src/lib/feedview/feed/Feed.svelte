<script lang="ts">
  import Collapsible from "$lib/Collapsible.svelte";
  import KeyValue from "$lib/KeyValue.svelte";
  import { appStore } from "$lib/store";
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
{/if}
