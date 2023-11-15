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
  let switchToRoute = "";
  $: mode = $appStore.ui.appMode;
  $: {
    if (mode === MODE.SINGLE) {
      if ($appStore.ui.lastFeed) {
        if ($appStore.ui.lastDoc) {
          switchToRoute = `${base}/feed?q=${$appStore.ui.lastFeed}&doc=${$appStore.ui.lastDoc}`;
        } else {
          switchToRoute = `${base}/feed?q=${$appStore.ui.lastFeed}`;
        }
      } else {
        if ($appStore.ui.lastDoc) {
          switchToRoute = `${base}/feed?doc=${$appStore.ui.lastDoc}`;
        } else {
          switchToRoute = `${base}/feed`;
        }
      }
    } else {
      if ($appStore.ui.lastDoc) {
        if ($appStore.ui.lastFeed) {
          switchToRoute = `${base}/?q=${$appStore.ui.lastDoc}&feed=${$appStore.ui.lastFeed}`;
        } else {
          switchToRoute = `${base}/?q=${$appStore.ui.lastDoc}`;
        }
      } else {
        if ($appStore.ui.lastFeed) {
          switchToRoute = `${base}/?feed=${$appStore.ui.lastFeed}`;
        } else {
          switchToRoute = `${base}/`;
        }
      }
    }
  }
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
      <h4>v{version}</h4>
    </div>
    <div><h4>{mode === MODE.SINGLE ? "Single View" : "Multi View"}</h4></div>
    <div class="switchbtn">
      <a title={mode} href={switchToRoute} class="switchbutton button"
        >{mode !== MODE.SINGLE ? "Switch to Single View" : "Switch to Multi View"}</a
      >
    </div>
  </div>
  <slot />
</div>

<style>
  .switchbutton {
    box-shadow: 1px 3px 3px #c1c1c1;
    color: rgb(63, 65, 68);
  }
  .content {
    margin-left: 3rem;
    margin-right: 3rem;
  }
  .header {
    display: flex-column;
    align-items: center;
    margin-block-end: 2rem;
  }

  .programname {
    display: flex;
    align-items: baseline;
  }

  h1 {
    margin-bottom: 0;
    margin-right: 1rem;
  }
  @media only screen and (min-width: 768px) {
    .header {
      display: flex;
      align-items: center;
      margin-block-end: 1rem;
    }
    .programname {
      min-width: 45vw;
    }
    .switchbtn {
      min-width: 20vw;
      text-align: right;
      margin-left: auto;
    }
  }
</style>
