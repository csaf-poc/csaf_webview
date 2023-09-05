<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de
-->
<script lang="ts">
  import { appStore } from "$lib/store";
  import { convertToDocModel } from "$lib/singleview/general/docmodel";
  import { generateProductVulnerabilities } from "./productvulnerabilities/productvulnerabilities";

  let hover: boolean = false;
  let valid: boolean | null = null;
  $: invalid = valid === false;
  let text: string = "Drop your CSAF-file here";
  const fileDropped = (e: DragEvent) => {
    if (e.dataTransfer) {
      const csafFile: File = e.dataTransfer.files[0];
      const type: string = csafFile.type;
      if (type == "application/json") {
        valid = true;
        text = `Displaying file "${csafFile.name}".`;
        readFile(csafFile);
      } else {
        text = `File "${csafFile.name}" has an invalid format.`;
        valid = false;
        appStore.setDocument(null);
      }
    }
  };
  const readFile = (csafFile: File) => {
    const fileReader: FileReader = new FileReader();
    let jsonDocument = {};
    fileReader.onload = (e: ProgressEvent<FileReader>) => {
      if (e.target) {
        try {
          jsonDocument = JSON.parse(e.target.result as string);
        } catch (_) {
          /*
						Treat unparsable documents as empty documents
					   	The according errors will be reflected in the converted
					   	DocModel.
					*/
        }
        let docModel = convertToDocModel(jsonDocument);
        docModel.productVulnerabilities = generateProductVulnerabilities(jsonDocument);
        appStore.setDocument(docModel);
        console.log(docModel);
      }
    };
    fileReader.readAsText(csafFile);
  };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="droparea"
  class:hover
  class:bg-error={valid == false}
  class:bg-success={valid == true}
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
  .droparea {
    height: 50px;
    width: 100%;
    border: 1px dashed gray;
    color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2em;
  }
  .hover {
    color: #fff;
    border: 1px dashed #fff;
  }
</style>
