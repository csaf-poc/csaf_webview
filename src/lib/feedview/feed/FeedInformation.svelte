<script lang="ts">
  import KeyValue from "$lib/KeyValue.svelte";
  import { appStore } from "$lib/store";
</script>

{#if $appStore.providerMetadata}
  <KeyValue
    keys={[
      "Canonical URL",
      "Last updated",
      "Metadata version",
      "List on CSAF aggregators",
      "Mirror on CSAF aggregators",
      "Publisher category",
      "Publisher name",
      "Publisher namespace",
      "Role"
    ]}
    values={[
      $appStore.providerMetadata["canonical_url"],
      $appStore.providerMetadata["last_updated"],
      $appStore.providerMetadata["metadata_version"],
      $appStore.providerMetadata["list_on_CSAF_aggregators"] ? "✓" : "✘",
      $appStore.providerMetadata["mirror_on_CSAF_aggregators"] ? "✓" : "✘",
      $appStore.providerMetadata["publisher"]["category"],
      $appStore.providerMetadata["publisher"]["name"],
      $appStore.providerMetadata["publisher"]["namespace"],
      $appStore.providerMetadata["role"]
    ]}
  />
{/if}
