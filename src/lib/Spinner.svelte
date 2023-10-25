<script lang="ts">
  export let open = false;
</script>

{#if open}
  <i class="bx bx-loader-alt spinner" />
{/if}

<style>
  .spinner {
    font-size: xx-large;
    animation-name: spin;
    animation-duration: 750ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    /* transform: rotate(3deg); */
    /* transform: rotate(0.3rad);/ */
    /* transform: rotate(3grad); */
    /* transform: rotate(.03turn);  */
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
