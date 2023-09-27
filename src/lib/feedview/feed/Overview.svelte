<script lang="ts">
  import Collapsible from "$lib/Collapsible.svelte";
  import KeyValue from "$lib/singleview/KeyValue.svelte";
  import { appStore } from "$lib/store";
  import FeedInformation from "./FeedInformation.svelte";
  import Feeds from "./Feeds.svelte";
</script>

{#if $appStore.providerMetadata}
  <Collapsible header="Feed information" level="2" open={true}>
    <FeedInformation />
  </Collapsible>
  <Collapsible header="Public open PGP keys" level="2">
    {#each $appStore.providerMetadata["public_openpgp_keys"] as key}
      <KeyValue keys={["fingerprint", "url"]} values={[key.fingerprint, key.url]} />
    {/each}
  </Collapsible>
  <Collapsible header="Feeds" level="2" open={true}>
    <Feeds />
  </Collapsible>
{/if}
