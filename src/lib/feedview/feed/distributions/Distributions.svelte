<script lang="ts">
  import Collapsible from "$lib/Collapsible.svelte";
  import { appStore } from "$lib/store";
  import Distribution from "./Distribution.svelte";
</script>

{#if $appStore.providerMetadata}
  {#each $appStore.providerMetadata["distributions"] as distribution, index}
    <Collapsible header={`Distribution ${index + 1}`} level="3">
      <Distribution {distribution} />
    </Collapsible>
  {/each}
{/if}
