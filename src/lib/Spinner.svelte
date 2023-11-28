<script lang="ts">
  export let active = false;
  export let modal = false;
</script>

{#if modal}
  {#if active}
    <div class="loading-container">
      <i class="bx bx-loader-alt spinner" />
    </div>
  {/if}
{:else if active}
  <i class="bx bx-loader-alt spinner" />
{/if}
