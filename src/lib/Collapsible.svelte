<script lang="ts">
  export let header: string;
  export let open: boolean = true;
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
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click={toggle}><h2><i class="bx {icon}" />{header}</h2></div>
  <div style="display:{visibility}" class="body">
    <slot />
  </div>
</div>

<style>
  .body {
    padding-left: 3rem;
  }
</style>
