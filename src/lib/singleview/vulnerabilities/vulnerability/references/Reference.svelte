<script lang="ts">
  import KeyValue from "$lib/singleview/KeyValue.svelte";
  export let reference: any;
  let keys: string[] = [];
  let values: string[] = [];
  if (reference.category) {
    keys.push("Category");
    values.push(reference.category);
  }
  keys.push("Summary");
  values.push(reference.summary);
  keys.push("URL");
  values.push(reference.url);
</script>

<div class="reference">
  <KeyValue {keys} {values} />
</div>

<style>
  .reference {
    margin-bottom: 1rem;
  }
</style>
