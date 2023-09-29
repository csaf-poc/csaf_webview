<script lang="ts">
  import type { Note } from "$lib/singleview/docmodel/docmodeltypes";
  import SingleNote from "$lib/singleview/notes/Note.svelte";
  export let notes: Note[];
</script>

{#if notes}
  {#each notes as note}
    <SingleNote {note} />
  {/each}
{/if}
