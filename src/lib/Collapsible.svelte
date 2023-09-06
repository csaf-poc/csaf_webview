<script lang="ts">
  export let header: string;
  export let open: boolean = false;
  export let level: string = "2";
  export let class_: string = "";
  export let onClose: Function = () => {};
  let visibility = "none";
  $: if (open) {
    visibility = "block";
  } else {
    visibility = "none";
  }
  let icon = "bx-chevron-down";
  const toggle = (e: Event) => {
    if (visibility === "block") {
      onClose();
      visibility = "none";
    } else {
      visibility = "block";
    }
  };
  $: if (visibility === "block") {
    icon = "bx-chevron-down";
  } else {
    icon = "bx-chevron-right";
  }
</script>

<div>
  {#if level == "2"}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div id={header} on:click={toggle} class={class_}><h2><i class="bx {icon}" />{header}</h2></div>
  {/if}
  {#if level == "3"}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div id={header} on:click={toggle} class={class_}><h3><i class="bx {icon}" />{header}</h3></div>
  {/if}
  {#if level == "4"}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div id={header} on:click={toggle} class={class_}><h4><i class="bx {icon}" />{header}</h4></div>
  {/if}
  <div style="display:{visibility}" class="body">
    <slot />
  </div>
</div>

<style>
  .body {
    padding-left: 3rem;
  }
  h2,
  h3,
  h4 {
    margin-bottom: 0;
  }
</style>
