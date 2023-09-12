<script lang="ts">
  import Collapsible from "$lib/Collapsible.svelte";
  export let vulnerability: any;
</script>

<Collapsible header="Product status" level="4">
  <div class="status">
    {#if vulnerability.product_status?.fist_affected}
      <h6>- Fist affected</h6>
      <ul>
        {#each vulnerability.product_status?.fist_affected as elem}
          <li>{elem}</li>
        {/each}
      </ul>
    {/if}
    {#if vulnerability.product_status?.first_fixed}
      <h6>First fixed</h6>
      <ul>
        {#each vulnerability.product_status?.first_fixed as elem}
          <li>{elem}</li>
        {/each}
      </ul>
    {/if}
    {#if vulnerability.product_status?.fixed}
      <h6>Fixed</h6>
      <ul>
        {#each vulnerability.product_status?.fixed as elem}
          <li>{elem}</li>
        {/each}
      </ul>
    {/if}
    {#if vulnerability.product_status?.under_invenstigation}
      <h6>Under investigation</h6>
      <ul>
        {#each vulnerability.product_status?.under_invenstigation as elem}
          <li>{elem}</li>
        {/each}
      </ul>
    {/if}
    {#if vulnerability.product_status?.known_affected}
      <h6>Known affected</h6>
      <ul>
        {#each vulnerability.product_status?.known_affected as elem}
          <li>{elem}</li>
        {/each}
      </ul>
    {/if}
    {#if vulnerability.product_status?.known_not_affected}
      <h6>Known not affected</h6>
      <ul>
        {#each vulnerability.product_status?.known_not_affected as elem}
          <li>{elem}</li>
        {/each}
      </ul>
    {/if}
    {#if vulnerability.product_status?.last_affected}
      <h6>Last affected</h6>
      <ul>
        {#each vulnerability.product_status?.last_affected as elem}
          <li>{elem}</li>
        {/each}
      </ul>
    {/if}
    {#if vulnerability.product_status?.recommended}
      <h6>Recommended</h6>
      <ul>
        {#each vulnerability.product_status?.recommended as elem}
          <li>{elem}</li>
        {/each}
      </ul>
    {/if}
  </div>
</Collapsible>

<style>
  .status {
    margin-top: 1.5rem;
  }
  h6 {
    line-height: 0.3em;
    font-size: large;
  }
  ul {
    list-style-type: none;
  }
</style>
