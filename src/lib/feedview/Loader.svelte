<script lang="ts">
  import { appStore } from "$lib/store";
  let url = "";
  async function loadProviderMetaData() {
    const response = await fetch(`${url}`);
    const providerMetadata = await response.json();
    appStore.setProviderMetadata(providerMetadata);
  }
  const load = () => {
    loadProviderMetaData();
  };

  const keydown = (e: KeyboardEvent) => {
    if (e.key === "Enter") loadProviderMetaData();
  };
</script>

<div class="row">
  <div class="col">
    <div style="display:flex">
      <button class="loadbutton" on:click={load}><i class="bx bx-book-open" />View feed</button>
      <input class="url" type="text" bind:value={url} on:keydown={keydown} />
    </div>
  </div>
</div>

<style>
  .loadbutton {
    width: 200px;
    height: 50px;
    font-size: large;
  }
  .bx-book-open {
    margin-right: 1rem;
  }
  .url {
    margin-left: 1rem;
  }
</style>
