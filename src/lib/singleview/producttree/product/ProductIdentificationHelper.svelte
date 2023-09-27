<script lang="ts">
  import KeyValue from "$lib/singleview/KeyValue.svelte";
  import ValueList from "$lib/singleview/ValueList.svelte";
  import FileHash from "./FileHash.svelte";
  import XGenericUri from "./XGenericURI.svelte";
  export let helper: any;
</script>

<div class="helperinfo">
  <h5>Product Version Helper</h5>
  <div class="helperinfobody">
    {#if helper.cpe}
      <KeyValue compact={true} keys={["cpe"]} values={helper.cpe} />
    {/if}
    {#if helper.hashes}
      {#each helper.hashes as hash}
        <FileHash {hash} />
      {/each}
    {/if}
    {#if helper.model_numbers}
      <ValueList label="Model numbers" values={helper.model_numbers} />
    {/if}
    {#if helper.purl}
      <KeyValue compact={true} keys={["purl"]} values={helper.purl} />
    {/if}
    {#if helper.sbom_urls}
      <ValueList label="SBOM URLs" values={helper.sbom_urls} />
    {/if}
    {#if helper.serial_numbers}
      <ValueList label="Serial numbers" values={helper.serial_numbers} />
    {/if}
    {#if helper.skus}
      <ValueList label="SKUs" values={helper.skus} />
    {/if}
    {#if helper.x_generic_uris}
      <XGenericUri x_generic_uris={helper.x_generic_uris} />
    {/if}
  </div>
</div>

<style>
  .helperinfobody {
    margin-left: 3rem;
  }
  h5 {
    margin-bottom: 0;
  }
</style>
