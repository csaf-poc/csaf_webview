<script lang="ts">
  import { appStore } from "$lib/store";
  import Distribution from "./Distribution.svelte";
</script>

{#if $appStore.providerMetadata}
  {#each $appStore.providerMetadata["distributions"] as distribution}
    <Distribution {distribution} />
  {/each}
{/if}
