<script lang="ts">
  import { appStore } from "$lib/store";
  import { loadFile } from "./loadFile";
  let files: FileList | null;
  let input: any;
  $: if (files) {
    appStore.setUploadedFile();
    appStore.setDocument(null);
    loadFile(files[0]);
  }
  $: if (!$appStore.ui.uploadedFile) {
    if (input) input.value = "";
  }
</script>

<input type="file" accept="application/json" bind:files bind:this={input} />

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
