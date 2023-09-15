<script lang="ts">
  import Branch from "./Branch.svelte";
  import { appStore } from "$lib/store";
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
    <div
      id={branch.product.product_id}
      class:bg-light={$appStore.ui.selectedProduct === branch.product.product_id}
    >
      {branch.product.name} <a href={branch.product.product_id}>({branch.product.product_id})</a>
    </div>
  {/if}
</div>

<style>
  .branch {
    margin-left: 3rem;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
  }
</style>
