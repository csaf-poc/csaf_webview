<script lang="ts">
  export let active = false;
</script>

{#if active}
  <div class="loading-container">
    <i class="bx bx-loader-alt spinner" />
  </div>
{/if}
