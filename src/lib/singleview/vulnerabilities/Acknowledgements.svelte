<script lang="ts">
  import Collapsible from "$lib/Collapsible.svelte";
  export let vulnerability: any;
</script>

<Collapsible header="Acknowledgements" level="4">
  <div class="spacer" />
  {#each vulnerability.acknowledgments as ack}
    {#if ack.names}
      <h6>Names</h6>
      <ul>
        {#each ack.names as name}
          <li>{name}</li>
        {/each}
      </ul>
    {/if}
    {#if ack.organization}
      <div class="row">
        <div class="col">
          <h6>Organization</h6>
          <ul>
            <li>{ack.organization}</li>
          </ul>
        </div>
      </div>
    {/if}
    {#if ack.summary}
      <div class="note">
        <h6>Summary</h6>
        <p>{ack.summary}</p>
      </div>
    {/if}
    {#if ack.urls}
      <h6>- URLs</h6>
      <ul>
        {#each ack.urls as url}
          <li>{url}</li>
        {/each}
      </ul>
    {/if}
  {/each}
</Collapsible>

<style>
  .spacer {
    margin-top: 1em;
  }
  h6 {
    line-height: 0.3em;
    font-size: large;
  }
  ul {
    list-style-type: none;
  }
  p {
    margin-left: 4rem;
    font-size: small;
    font-family: monospace;
  }
</style>
