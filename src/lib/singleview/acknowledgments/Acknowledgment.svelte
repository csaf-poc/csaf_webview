<script lang="ts">
  import KeyValue from "$lib/KeyValue.svelte";
  import ValueList from "$lib/ValueList.svelte";
  import type { Acknowledgement } from "../docmodel/docmodeltypes";
  export let ack: Acknowledgement;
  const keys: Array<String> = [];
  const values: any = [];
  if (ack.names) {
    keys.push("Names");
    values.push(ack.names.join(", "));
  }
  if (ack.organization) {
    keys.push("Organization");
    values.push(ack.organization);
  }
  if (ack.summary) {
    keys.push("Summary");
    values.push(ack.summary);
  }
</script>

<KeyValue {keys} {values} />
{#if ack.urls}
  <ValueList label="URLs" values={ack.urls} />
{/if}
