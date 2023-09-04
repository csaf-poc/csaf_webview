<script lang="ts">
  import { appStore } from "$lib/store";
  import Vulnerability from "./Vulnerability.svelte";
  $: vulnerabilities = $appStore.doc?.vulnerabilities;
</script>

<div>
  {#each vulnerabilities as vulnerability, index}
    <Vulnerability {vulnerability} index={index + 1} />
  {/each}
</div>
