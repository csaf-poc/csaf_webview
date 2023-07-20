<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de
-->
<script lang="ts">
	import Maincard from '$lib/Maincard.svelte';
	import Droparea from '$lib/Droparea.svelte';
	import 'chota/dist/chota.min.css';
	import 'boxicons/css/boxicons.min.css';

	const disable = (e: Event) => {
		e.preventDefault();
	};
</script>

<svelte:window on:dragover={disable} on:drop={disable} />

<div class="container">
	<h1 class="text-center">CSAF Webview+</h1>
	<div class="row">
		<div class="col">
			<Droparea />
		</div>
	</div>
	<div class="row">
		<div class="col">
			<Maincard />
		</div>
	</div>
</div>
