<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de>
-->
<script lang="ts">
  import { appStore } from "$lib/store";
  import { loadFile } from "./loadFile";

  let hover = false;
  let valid: boolean | null = null;
  $: invalid = valid === false;
  let text = "Drop your CSAF-file here";
  $: if ($appStore.ui.uploadedFile) {
    text = "Drop your CSAF-file here";
    hover = false;
    valid = null;
  }
  /**
   * Handler when the file was dropped on the droparea.
   * Loads and displays file
   * @param e
   */
  const fileDropped = (e: DragEvent) => {
    if (e.dataTransfer) {
      appStore.reset();
      appStore.clearUploadedFile();
      const csafFile: File = e.dataTransfer.files[0];
      const type: string = csafFile.type;
      if (type == "application/json") {
        valid = true;
        text = `Displaying file "${csafFile.name}".`;
        loadFile(csafFile);
      } else {
        text = `File "${csafFile.name}" has an invalid format.`;
        valid = false;
        appStore.reset();
      }
    }
  };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  title="Drop a CSAF file here"
  class="droparea"
  class:hover
  class:droparea-error={valid == false}
  class:droparea-okay={valid == true}
  on:dragover|preventDefault={() => {
    hover = true;
  }}
  on:dragleave={() => {
    hover = false;
  }}
  on:drop|preventDefault={fileDropped}
>
  {#if invalid}<i class="bx bx-error" />{/if}{text}
</div>

<style>
  .hover {
    color: #fff;
    border: 1px dashed #fff;
  }
</style>
