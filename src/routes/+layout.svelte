<script lang="ts">
  import "chota/dist/chota.min.css";
  import "boxicons/css/boxicons.min.css";
  import { appStore } from "$lib/store";
  import { base } from "$app/paths";
  /*global __APP_VERSION__*/
  const version: string = __APP_VERSION__;
  const MODE = {
    SINGLE: "Switch to ROLIE-feed",
    FEED: "Switch to single view"
  };
  $: mode = $appStore.ui.appMode;
  $: switchToRoute = mode === MODE.SINGLE ? `${base}/feed` : `${base}/`;
  const disable = (e: Event) => {
    e.preventDefault();
  };
</script>

<svelte:window on:dragover={disable} on:drop={disable} />

<div class="content">
  <!-- svelte-ignore a11y-no-redundant-roles -->
  <div class="header">
    <h1 role="heading" class="text-center">CSAF Webview+</h1>
    <a href={switchToRoute} class="switchbutton button">{mode}</a>
    <h4>v{version}</h4>
  </div>
  <slot />
</div>

<style>
  .switchbutton {
    box-shadow: 1px 3px 3px #c1c1c1;
  }
  .header > h1 {
    font-weight: bold;
  }
  .content {
    margin-left: 3rem;
    margin-right: 3rem;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .switchbutton {
    position: relative;
    left: -90px;
  }
</style>
