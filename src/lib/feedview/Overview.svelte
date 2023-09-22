<script lang="ts">
  import Collapsible from "$lib/Collapsible.svelte";
  import KeyValue from "$lib/singleview/KeyValue.svelte";
  import { appStore } from "$lib/store";
</script>

{#if $appStore.providerMetadata}
  <Collapsible header="Feed information" level="2" open={true}>
    <div>
      <KeyValue
        keys={[
          "Last updated",
          "Metadata version",
          "List on CSAF aggregators",
          "Mirror on CSAF aggregators",
          "Publisher category",
          "Publisher name",
          "Publisher namespace"
        ]}
        values={[
          $appStore.providerMetadata["last_updated"],
          $appStore.providerMetadata["metadata_version"],
          $appStore.providerMetadata["list_on_CSAF_aggregators"] ? "✓" : "✘",
          $appStore.providerMetadata["mirror_on_CSAF_aggregators"] ? "✓" : "✘",
          $appStore.providerMetadata["publisher"]["category"],
          $appStore.providerMetadata["publisher"]["name"],
          $appStore.providerMetadata["publisher"]["namespace"]
        ]}
      />
    </div>
  </Collapsible>
  <Collapsible header="Public open PGP keys" level="2">
    {#each $appStore.providerMetadata["public_openpgp_keys"] as key}
      <KeyValue keys={["fingerprint", "url"]} values={[key.fingerprint, key.url]} />
    {/each}
  </Collapsible>
{/if}
