<script lang="ts">
  import KeyValue from "$lib/singleview/KeyValue.svelte";
  import { appStore } from "$lib/store";
</script>

{#if $appStore.providerMetadata}
  <h2>Feed information</h2>
  <div>
    <KeyValue
      keys={["last_updated", "metadata_version", "list_on_CSAF_aggregators"]}
      values={[
        $appStore.providerMetadata["last_updated"],
        $appStore.providerMetadata["metadata_version"],
        $appStore.providerMetadata["list_on_CSAF_aggregators"]
      ]}
    />
  </div>
{/if}
