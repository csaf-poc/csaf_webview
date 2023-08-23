<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de
-->
<script lang="ts">
	import SingleDocumentView from "$lib/DocumentView.svelte";
	import Droparea from "$lib/Droparea.svelte";
	import "chota/dist/chota.min.css";
	import "boxicons/css/boxicons.min.css";
	import { browser } from "$app/environment";
	import { page } from "$app/stores";
	// @ts-ignore
	const version: string = "__APP_VERSION__";
	const externalReference = browser && $page.url.searchParams.get("ref");
	$: noRef = !externalReference;
	const disable = (e: Event) => {
		e.preventDefault();
	};
</script>

<svelte:window on:dragover={disable} on:drop={disable} />

<div class="container">
	<!-- svelte-ignore a11y-no-redundant-roles -->
	<div class="header">
		<h1 role="heading" class="text-center">CSAF Webview+</h1>
		<h4>v. {version}</h4>
	</div>
	{#if noRef}
		<div class="row">
			<div class="col">
				<Droparea />
			</div>
		</div>
		<div class="row">
			<div class="col">
				<SingleDocumentView />
			</div>
		</div>
	{/if}
</div>

<style>
	.header {
		display: flex;
		align-content: flex-end;
		align-items: center;
		justify-content: space-between;
	}
</style>
