<script lang="ts">
  import Collapsible from "$lib/Collapsible.svelte";
  import Acknowledgement from "./Acknowledgement.svelte";
  export let acknowledgments: any;
</script>

{#each acknowledgments as ack}
  <Acknowledgement {ack} />
{/each}
