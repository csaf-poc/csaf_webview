<script lang="ts">
  import ProductGroup from "./ProductGroup.svelte";
  export let productGroups: any;
</script>

{#each productGroups as productGroup}
  <ProductGroup {productGroup} />
{/each}
