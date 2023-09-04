<script lang="ts">
  export let header: string;
  export let open: boolean = false;
  export let index: string = "2";
  export let class_: string = "";
  let visibility = open ? "block" : "none";
  let icon = "bx-chevron-down";
  const toggle = (e: Event) => {
    if (visibility === "block") visibility = "none";
    else {
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
  {#if index == "2"}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click={toggle} class={class_}><h2><i class="bx {icon}" />{header}</h2></div>
  {/if}
  {#if index == "3"}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click={toggle} class={class_}><h3><i class="bx {icon}" />{header}</h3></div>
  {/if}
  {#if index == "4"}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click={toggle} class={class_}><h4><i class="bx {icon}" />{header}</h4></div>
  {/if}
  <div style="display:{visibility}" class="body">
    <slot />
  </div>
</div>

<style>
  .body {
    padding-left: 3rem;
  }
</style>
