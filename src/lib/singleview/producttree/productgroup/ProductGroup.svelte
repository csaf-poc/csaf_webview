<script lang="ts">
  import ValueField from "$lib/ValueField.svelte";
  import ValueList from "$lib/ValueList.svelte";
  export let productGroup: any;
</script>

<ValueList label="Group IDs" values={productGroup.group_ids} />
<ValueList label="Product IDs" values={productGroup.product_ids} />

{#if productGroup.summary}
  <ValueField label="Summary" value={productGroup.summary} />
{/if}
