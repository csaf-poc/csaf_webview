<script lang="ts">
  import "boxicons/css/boxicons.min.css";
  import "chota/dist/chota.min.css";
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
  /**
   * Disable disables dropping a JSON anywhere on the page.
   * @param e
   */
  const disable = (e: Event) => {
    e.preventDefault();
  };
</script>

<svelte:window on:dragover={disable} on:drop={disable} />

<div class="content">
  <!-- svelte-ignore a11y-no-redundant-roles -->
  <div class="header">
    <div class="programname">
      <h1 role="heading">CSAF Webview</h1>
    </div>
    <div>
      <a href={switchToRoute} class="switchbutton button">{mode}</a>
    </div>
    <div class="version">
      <h4>v{version}</h4>
    </div>
  </div>
  <slot />
</div>

<style>
  .switchbutton {
    box-shadow: 1px 3px 3px #c1c1c1;
  }
  .content {
    margin-left: 3rem;
    margin-right: 3rem;
  }
  .header {
    display: flex-column;
    align-items: center;
  }

  h1 {
    margin-bottom: 0;
  }
  @media only screen and (min-width: 768px) {
    .header {
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;
    }
    .programname {
      min-width: 45vw;
    }
    .version {
      min-width: 20vw;
      text-align: right;
      margin-left: auto;
    }
  }
</style>
