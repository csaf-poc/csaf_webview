<script lang="ts">
  import { appStore } from "$lib/store";
  let url = "";
  let proxyURL = "";
  let disabled = true;
  let proxy = false;
  $: proxyInputVisible = proxy ? "display: block;" : "display: none;";
  $: if (/^http/.test(url)) {
    disabled = false;
  }
  async function loadProviderMetaData() {
    let targetURL = url;
    if (proxy && proxyURL) {
      targetURL = `${proxyURL}${url}`;
    }
    const response = await fetch(`${targetURL}`);
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
      <button {disabled} class="loadbutton" on:click={load}
        ><i class="bx bx-book-open" />View feed</button
      >
      <input class="url" type="text" bind:value={url} on:keydown={keydown} />
    </div>
  </div>
</div>
<div class="row">
  <div class="col">
    <div style="display:flex">
      <div class="proxychoice">
        <input id="proxy" type="checkbox" bind:checked={proxy} />
        <label for="proxy">Use Proxy</label>
      </div>
      <div class="proxyurl" style={proxyInputVisible}>
        <input type="text" bind:value={proxyURL} />
      </div>
    </div>
  </div>
</div>

<style>
  .proxychoice {
    width: 200px;
    height: 50px;
    font-size: large;
  }
  .proxyurl {
    width: 100%;
    height: 50px;
    font-size: large;
    margin-left: 1.5rem;
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
