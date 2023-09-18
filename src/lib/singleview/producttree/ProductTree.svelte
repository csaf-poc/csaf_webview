<script lang="ts">
  import { appStore } from "$lib/store";
  import Branch from "./branch/Branch.svelte";
  import Collapsible from "$lib/Collapsible.svelte";
  import Relationships from "./relationship/Relationships.svelte";
</script>

{#each $appStore.doc?.productTree.branches as branch}
  <Collapsible header="Branches" open={$appStore.ui.isProductTreeVisible}>
    <Branch {branch} />
  </Collapsible>
{/each}

{#if $appStore.doc?.productTree.relationships}
  <Collapsible header="Relationships" open={$appStore.ui.isProductTreeVisible}>
    <Relationships relationships={$appStore.doc?.productTree.relationships} />
  </Collapsible>
{/if}
