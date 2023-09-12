<script lang="ts">
  import Collapsible from "$lib/Collapsible.svelte";
  export let vulnerability: any;
</script>

<Collapsible header="Remediations" level="4">
  {#each vulnerability.remediations as remediation}
    <dl>
      <dt>Category</dt>
      <dd>{remediation.category}</dd>
      <dt>Details</dt>
      <dd>{remediation.details}</dd>
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
