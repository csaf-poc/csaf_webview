<script lang="ts">
  import Collapsible from "$lib/Collapsible.svelte";
  export let vulnerability: any;
</script>

<Collapsible header="Flags" level="4">
  {#each vulnerability.flags as flag}
    {#if flag.date}
      <div class="">
        <h6>Date</h6>
        <p>{flag.date}</p>
      </div>
    {/if}
    {#if flag.group_ids}
      <div class="">
        <h6>Group IDs</h6>
        <ul>
          {#each flag.group_ids as gid}
            <li>{gid}</li>
          {/each}
        </ul>
      </div>
    {/if}
    <div class="">
      <h6>Label</h6>
      <p>{flag.label}</p>
    </div>
    {#if flag.product_ids}
      <div class="">
        <h6>Product IDs</h6>
        <ul>
          {#each flag.product_ids as pid}
            <li>{pid}</li>
          {/each}
        </ul>
      </div>
    {/if}
  {/each}
</Collapsible>

<style>
  h6 {
    line-height: 0.3em;
    font-size: large;
  }
  p {
    margin-left: 4rem;
    font-size: small;
    font-family: monospace;
  }
  ul {
    list-style-type: none;
    margin-block-end: 0px;
  }
</style>
