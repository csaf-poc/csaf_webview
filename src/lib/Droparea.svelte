<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de
-->
<script lang="ts">
	import { appStore } from './store';
	let hover: boolean = false;
	let valid: boolean | null = null;
	let text: string = 'Drop your CSAF-file here';
	const fileDropped = (e: DragEvent) => {
		if (e.dataTransfer) {
			const csafFile: File = e.dataTransfer.files[0];
			const type: string = csafFile.type;
			if (type == 'application/json') {
				valid = true;
				text = `Displaying file "${csafFile.name}".`;
				readFile(csafFile);
			} else {
				text = `File "${csafFile.name}" has an invalid format.`;
				valid = false;
				appStore.setData('');
			}
		}
	};
	const readFile = (csafFile: File) => {
		const fileReader: FileReader = new FileReader();
		fileReader.onload = (e) => {
			if (e.target) {
				const jsonDocument = JSON.parse(e.target.result as string);
				appStore.setData(jsonDocument);
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
	{#if valid === false}<i class="bx bx-error" />{/if}{text}
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
