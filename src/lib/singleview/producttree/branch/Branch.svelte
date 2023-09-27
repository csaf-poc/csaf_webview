<script lang="ts">
  import Branch from "./Branch.svelte";
  import Product from "$lib/singleview/producttree/product/Product.svelte";

  export let branch: any;
</script>

<div class="branch">
  <span class="tag is-small">{branch.category}</span>
  {branch.name}
  {#if branch.branches}
    {#each branch.branches as b}
      <Branch branch={b} />
    {/each}
  {/if}
  {#if branch.product}
    <Product product={branch.product} />
  {/if}
</div>

<style>
  .branch {
    margin-left: 3rem;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
  }
</style>
