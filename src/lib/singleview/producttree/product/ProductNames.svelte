<script lang="ts">
  import ProductIdentificationHelper from "./ProductIdentificationHelper.svelte";
  import KeyValue from "$lib/KeyValue.svelte";
  export let productNames: any;
</script>

{#each productNames as product}
  <KeyValue keys={["Name", "Product ID"]} values={[product.name, product.product_id]} />
  {#if product.product_identification_helper}
    <ProductIdentificationHelper helper={product.product_identification_helper} />
  {/if}
{/each}
