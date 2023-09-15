<script lang="ts">
  import { appStore } from "$lib/store";
  import Branch from "./Branch.svelte";
</script>

{#each $appStore.doc?.productTree.branches as branch}
  <Branch {branch} />
{/each}
