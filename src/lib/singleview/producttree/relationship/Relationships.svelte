<script lang="ts">
  import Relation from "./Relation.svelte";
  export let relationships: any;
</script>

{#each relationships as relation}
  <Relation {relation} />
{/each}
