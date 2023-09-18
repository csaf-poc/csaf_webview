<script lang="ts">
  import Branch from "./Branch.svelte";
  import { appStore } from "$lib/store";
  import { tick } from "svelte";
  import ProductIdentificationHelper from "./ProductIdentificationHelper.svelte";
  import Collapsible from "$lib/Collapsible.svelte";
  export let branch: any;
  let highlight = false;
  async function updateUI() {
    await tick();
    document
      .querySelector(`#${branch.product?.product_id}`)
      ?.scrollIntoView({ behavior: "smooth" });
  }
  $: if ($appStore.ui.selectedProduct === branch.product?.product_id) {
    highlight = true;
    updateUI();
  } else {
    highlight = false;
  }
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
    <Collapsible
      header={branch.product.product_id}
      level="5"
      {highlight}
      open={$appStore.ui.selectedProduct === branch.product.product_id}
      onClose={() => {
        if ($appStore.ui.selectedProduct === branch.product.product_id) {
          appStore.resetSelectedProduct();
        }
      }}
    >
      <div id={branch.product.product_id}>
        {branch.product.name} <a href={branch.product.product_id}>({branch.product.product_id})</a>
        {#if branch.product.product_identification_helper}
          <ProductIdentificationHelper helper={branch.product.product_identification_helper} />
        {/if}
      </div>
    </Collapsible>
  {/if}
</div>

<style>
  .branch {
    margin-left: 3rem;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
  }
</style>
