<script lang="ts">
  import Collapsible from "$lib/Collapsible.svelte";
  import type { Note } from "$lib/singleview/general/docmodeltypes";
  import KeyValue from "../KeyValue.svelte";
  import ValueField from "../ValueField.svelte";
  export let note: Note;
  let keys: string[] = [];
  let values: string[] = [];
  if (note.audience) {
    keys.push("Audience");
    values.push(note.audience);
  }
  keys.push("Category");
  values.push(note.category);
  if (note.title) {
    keys.push("Title");
    values.push(note.title);
  }
</script>

<Collapsible header={`Category:${note.category}`} level="4">
  <KeyValue compact={true} {keys} {values} />
  <p>
    <ValueField label="Text" value={note.text} />
  </p>
</Collapsible>

<style>
  p {
    margin-top: 2rem;
  }
</style>
