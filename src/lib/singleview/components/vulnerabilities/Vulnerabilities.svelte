<script lang="ts">
  import { appStore } from "$lib/store";
</script>

{#if $appStore.doc?.isVulnerabilitiesPresent}
  <div>
    <h2>Vulnerabilities</h2>
  </div>
{/if}
