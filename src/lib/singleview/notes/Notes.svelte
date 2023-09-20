<script lang="ts">
  import type { Note } from "$lib/singleview/general/docmodeltypes";
  import SingleNote from "$lib/singleview/notes/Note.svelte";
  export let notes: Note[];
</script>

{#each notes as note}
  <SingleNote {note} />
{/each}
