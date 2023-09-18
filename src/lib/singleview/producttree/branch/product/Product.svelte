<script lang="ts">
  import ProductIdentificationHelper from "./ProductIdentificationHelper.svelte";
  import { appStore } from "$lib/store";
  import { tick } from "svelte";
  import Collapsible from "$lib/Collapsible.svelte";
  export let product: any;
  let highlight = false;
  async function updateUI() {
    await tick();
    document.querySelector(`#${product?.product_id}`)?.scrollIntoView({ behavior: "smooth" });
  }
  $: if ($appStore.ui.selectedProduct === product?.product_id) {
    highlight = true;
    updateUI();
  } else {
    highlight = false;
  }
</script>

<Collapsible
  header={product.product_id}
  level="5"
  {highlight}
  open={$appStore.ui.selectedProduct === product.product_id}
  onClose={() => {
    if ($appStore.ui.selectedProduct === product.product_id) {
      appStore.resetSelectedProduct();
    }
  }}
>
  <div id={product.product_id}>
    {product.name} <a href={product.product_id}>({product.product_id})</a>
    {#if product.product_identification_helper}
      <ProductIdentificationHelper helper={product.product_identification_helper} />
    {/if}
  </div>
</Collapsible>
