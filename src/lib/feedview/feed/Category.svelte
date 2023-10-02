<script lang="ts">
  import KeyValue from "$lib/KeyValue.svelte";
  import type { Category } from "./feedTypes";
  export let categories: Category[] = [];
</script>

{#each categories as category}
  <KeyValue keys={["scheme", "term"]} values={[category.scheme, category.term]} compact={true} />
{/each}
