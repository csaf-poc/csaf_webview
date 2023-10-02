<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de
-->

<script lang="ts">
  import { appStore } from "$lib/store";
  async function updateUI(id: string) {
    setTimeout(() => {
      const element = document.getElementById(`${id}`);
      const y = element!.getBoundingClientRect().top + window.scrollY - 150;
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 200);
  }
  const backPressed = (e: Event) => {
    const lastElement = $appStore.ui.history[0];
    appStore.shiftHistory();
    updateUI(lastElement);
    e.preventDefault();
  };
</script>

{#if $appStore.ui.history.length > 0}
  <a class="back button dark" href="#top" on:click={backPressed}
    >Last pos. <i class="bx bx-undo" /></a
  >
{/if}

<style>
  .back {
    background-color: black;
    color: white;
    text-align: center;
    width: 11rem;
    padding: 1rem;
    position: sticky;
    bottom: 1rem;
    margin-left: 90vw;
    cursor: pointer;
  }
</style>
