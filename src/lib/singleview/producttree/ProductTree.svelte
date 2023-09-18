<script lang="ts">
  import { appStore } from "$lib/store";
  import Branch from "./Branch.svelte";
  import Collapsible from "$lib/Collapsible.svelte";
</script>

{#each $appStore.doc?.productTree.branches as branch}
  <Collapsible header="Branches" open={$appStore.ui.isProductTreeVisible}>
    <Branch {branch} />
  </Collapsible>
{/each}
