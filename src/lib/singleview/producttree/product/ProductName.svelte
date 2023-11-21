<script lang="ts">
  import ProductIdentificationHelper from "./ProductIdentificationHelper.svelte";
  import KeyValue from "$lib/KeyValue.svelte";
  import { appStore } from "$lib/store";
  import { tick } from "svelte";
  import Collapsible from "$lib/Collapsible.svelte";
  export let product: any;
  async function updateUI() {
    await tick();
    document.getElementById(`${product?.product_id}`)?.scrollIntoView({ behavior: "smooth" });
  }
  let highlight = false;
  $: if ($appStore.ui.selectedProduct === product?.product_id) {
    highlight = true;
    updateUI();
  } else {
    highlight = false;
  }
</script>

<div id={product?.product_id}>
  <Collapsible
    header={product.name}
    level="4"
    {highlight}
    open={$appStore.ui.selectedProduct === product.product_id}
    onClose={() => {
      if ($appStore.ui.selectedProduct === product.product_id) {
        appStore.resetSelectedProduct();
      }
    }}
  >
    <KeyValue keys={["Name", "Product ID"]} values={[product.name, product.product_id]} />
    {#if product.product_identification_helper}
      <ProductIdentificationHelper helper={product.product_identification_helper} />
    {/if}
  </Collapsible>
</div>
