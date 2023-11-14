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
  let files: FileList | null;
  let input: any;
  $: if (files) {
    appStore.reset();
    appStore.setUploadedFile();
    loadFile(files[0]);
  }
  $: if (!$appStore.ui.uploadedFile) {
    if (input) input.value = "";
  }
</script>

<input
  title="Upload CSAF Document from your device"
  type="file"
  accept="application/json"
  bind:files
  bind:this={input}
/>

<style>
  input[type="file"]::file-selector-button {
    border-radius: 4px;
    padding: 0 16px;
    height: 34px;
    cursor: pointer;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.16);
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
    margin-right: 16px;
    transition: background-color 200ms;
  }

  /* file upload button hover state */
  input[type="file"]::file-selector-button:hover {
    background-color: var(--color-primary);
    color: white;
  }

  /* file upload button active state */
  input[type="file"]::file-selector-button:active {
    background-color: var(--color-primary);
    color: white;
  }
</style>
