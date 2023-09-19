<script lang="ts">
  import { appStore } from "$lib/store";
  import { tick } from "svelte";
  async function updateUI(yPosition: number) {
    await tick();
    window.scrollTo({ top: yPosition, behavior: "smooth" });
  }
  const backPressed = (e: Event) => {
    const lastElement = $appStore.ui.history[0];
    appStore.shiftHistory();
    updateUI(lastElement);
    e.preventDefault();
  };
</script>

{#if $appStore.ui.history.length > 0}
  <a class="back button dark" href="#top" on:click={backPressed}>Back <i class="bx bx-undo" /></a>
{/if}

<style>
  .back {
    background-color: black;
    color: white;
    text-align: center;
    width: 9rem;
    padding: 1rem;
    position: sticky;
    bottom: 1rem;
    right: 1rem;
    cursor: pointer;
  }
</style>
