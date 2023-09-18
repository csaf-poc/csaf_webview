<script lang="ts">
  import KeyValue from "../KeyValue.svelte";
  import type { xGenericURI } from "./producttreetypes";

  export let x_generic_uris: xGenericURI[];
</script>

<p>X Generic URIs</p>
<div class="xgeneric">
  {#each x_generic_uris as uri}
    <KeyValue compact={true} keys={["Namespace", "URI"]} values={[uri.namespace, uri.uri]} />
  {/each}
</div>

<style>
  p {
    margin-bottom: 0;
  }
  .xgeneric {
    margin-left: 3rem;
  }
</style>
