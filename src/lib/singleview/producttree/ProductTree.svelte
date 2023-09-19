<script lang="ts">
  import { appStore } from "$lib/store";
  import Branch from "./branch/Branch.svelte";
  import Collapsible from "$lib/Collapsible.svelte";
  import Relationships from "./relationship/Relationships.svelte";
  import ProductGroups from "./productgroup/ProductGroups.svelte";
  import ProductNames from "./product/ProductNames.svelte";
</script>

{#each $appStore.doc?.productTree.branches as branch}
  <Collapsible header="Branches" open={$appStore.ui.isProductTreeVisible}>
    <Branch {branch} />
  </Collapsible>
{/each}

{#if $appStore.doc?.productTree.relationships}
  <Collapsible header="Relationships" open={$appStore.ui.isProductTreeVisible}>
    <Relationships relationships={$appStore.doc?.productTree.relationships} />
  </Collapsible>
{/if}

{#if $appStore.doc?.productTree.product_groups}
  <Collapsible header="Product groups" open={$appStore.ui.isProductTreeVisible}>
    <ProductGroups productGroups={$appStore.doc?.productTree.product_groups} />
  </Collapsible>
{/if}

{#if $appStore.doc?.productTree.full_product_names}
  <Collapsible header="Full Product Names" open={$appStore.ui.isProductTreeVisible}>
    <ProductNames productNames={$appStore.doc?.productTree.full_product_names} />
  </Collapsible>
{/if}
