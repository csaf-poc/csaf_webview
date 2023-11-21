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

<div class="file-upload-container">
  <input
    class="file-upload"
    title="Upload CSAF Document from your device"
    type="file"
    accept="application/json"
    bind:files
    bind:this={input}
  />
</div>
