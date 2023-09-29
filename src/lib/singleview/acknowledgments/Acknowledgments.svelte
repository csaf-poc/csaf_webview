<script lang="ts">
  import type { Acknowledgement } from "../docmodel/docmodeltypes";
  import AcknowledgementComponent from "./Acknowledgment.svelte";
  export let acknowledegments: Acknowledgement[];
</script>

{#if acknowledegments}
  {#each acknowledegments as ack}
    <AcknowledgementComponent {ack} />
  {/each}
{/if}
