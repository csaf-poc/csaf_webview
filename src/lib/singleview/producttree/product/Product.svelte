<script lang="ts">
  import ProductIdentificationHelper from "./ProductIdentificationHelper.svelte";
  import { appStore } from "$lib/store";
  import { tick } from "svelte";
  import Collapsible from "$lib/Collapsible.svelte";
  import KeyValue from "$lib/singleview/KeyValue.svelte";
  export let product: any;
  let highlight = false;
  async function updateUI() {
    await tick();
    document.getElementById(`${product?.product_id}`)?.scrollIntoView({ behavior: "smooth" });
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
    <KeyValue keys={["Name", "Product ID"]} values={[product.name, product.product_id]} />
    {#if product.product_identification_helper}
      <ProductIdentificationHelper helper={product.product_identification_helper} />
    {/if}
  </div>
</Collapsible>
