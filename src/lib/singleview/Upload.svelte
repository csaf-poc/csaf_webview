<script lang="ts">
  import { appStore } from "$lib/store";
  const fileSelected = (e: any) => {
    const file = e.target.files[0];
    console.log(file);
    if (file.type === "application/json") {
      appStore.setDocument(null);
    }
  };
</script>

<form>
  <input type="file" on:change={fileSelected} />
</form>

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
