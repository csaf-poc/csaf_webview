<script lang="ts">
  import { appStore } from "$lib/store";
  let url = "";
  async function loadProviderMetaData() {
    appStore.setErrorMsg("");
    appStore.reset();
    try {
      const response = await fetch(`${url}`);
      if (response.ok) {
        const providerMetadata = await response.json();
        appStore.setProviderMetadata(providerMetadata);
      }
      if (response.status === 404) {
        appStore.setErrorMsg("The resource you requested was not found on the server.");
      }
    } catch (error) {
      appStore.setErrorMsg(
        "Failed to load from URL. The server may be unreachable or the resource cannot be accessed due to CORS restrictions."
      );
    }
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
{#if $appStore.ui.errorMsg}
  <div class="row">
    <div class="col"><div class="errors text-error">{$appStore.ui.errorMsg}</div></div>
  </div>
{/if}

<style>
  .errors {
    margin-left: 200px;
    font-size: x-large;
    font-weight: bold;
  }
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
