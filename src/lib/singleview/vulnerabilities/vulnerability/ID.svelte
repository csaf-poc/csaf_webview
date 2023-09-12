<script lang="ts">
  import Collapsible from "$lib/Collapsible.svelte";
  export let vulnerability: any;
</script>

<Collapsible header="IDs" level="4">
  {#each vulnerability.ids as vulnerabilityID}
    <dl>
      <dt>Systemname</dt>
      <dd>{vulnerabilityID.system_name}</dd>
      <dt>Text</dt>
      <dd>{vulnerabilityID.text}</dd>
    </dl>
  {/each}
</Collapsible>

<style>
  dt {
    float: left;
    clear: left;
    font-weight: 100;
    width: 14rem;
  }
  dd {
    margin-bottom: 0.1em;
  }
</style>
