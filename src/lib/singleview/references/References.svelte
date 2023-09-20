<script lang="ts">
  import Reference from "./Reference.svelte";
  export let references: any;
</script>

{#if references}
  {#each references as reference}
    <Reference {reference} />
  {/each}
{/if}
