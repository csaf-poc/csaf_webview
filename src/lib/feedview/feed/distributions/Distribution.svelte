<script lang="ts">
  import Collapsible from "$lib/Collapsible.svelte";
  export let distribution: any;
</script>

{#if distribution.rolie && distribution.rolie.feeds}
  {#each distribution.rolie.feeds as feed}
    <Collapsible header={feed.summary} />
  {/each}
{/if}
