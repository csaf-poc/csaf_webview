<script lang="ts">
  import KeyValue from "../KeyValue.svelte";
  import type { hashEntry } from "./producttreetypes";

  export let hash: hashEntry[];
</script>

{#each hash as hashEntry}
  <KeyValue
    compact={true}
    keys={["algorithm", "value"]}
    values={[hashEntry.algorithm, hashEntry.value]}
  />
{/each}
