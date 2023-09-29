<script lang="ts">
  import Collapsible from "$lib/Collapsible.svelte";
  import KeyValue from "$lib/KeyValue.svelte";
  import { appStore } from "$lib/store";
  import GeneralInformation from "./GeneralInformation.svelte";
  import Distributions from "./distributions/Distributions.svelte";
</script>

{#if $appStore.providerMetadata}
  <Collapsible header="General information" level="2" open={true}>
    <GeneralInformation />
  </Collapsible>
  <Collapsible header="Public OpenPGP keys" level="2">
    {#each $appStore.providerMetadata["public_openpgp_keys"] as key}
      <KeyValue keys={["fingerprint", "url"]} values={[key.fingerprint, key.url]} />
    {/each}
  </Collapsible>
  <Collapsible header="Distributions" level="2" open={true}>
    <Distributions />
  </Collapsible>
{/if}
