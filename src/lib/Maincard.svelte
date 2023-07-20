<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de
-->
<script lang="ts">
	import { appStore } from './store';
	let tlpStyle: string = '';
	const formatDate = (d: string) => {
		if (d === '') return '';
		let [date, _] = d.split('T');
		return date;
	};
	$: title = $appStore.data ? $appStore.data['document']['title'] : '';
	$: lang = $appStore.data ? $appStore.data['document']['lang'] : '';
	$: csafVersion = $appStore.data ? $appStore.data['document']['csaf_version'] : '';
	$: tlp = $appStore.data ? $appStore.data['document']['distribution']['tlp']['label'] : '';
	$: if (tlp === 'WHITE') tlpStyle = 'tlpclear';
	$: id = $appStore.data ? $appStore.data['document']['tracking']['id'] : '';
	$: status = $appStore.data ? $appStore.data['document']['tracking']['status'] : '';
	$: published = formatDate(
		$appStore.data ? $appStore.data['document']['tracking']['initial_release_date'] : ''
	);
	$: lastUpdate = formatDate(
		$appStore.data ? $appStore.data['document']['tracking']['current_release_date'] : ''
	);
</script>

{#if $appStore.data}
	<div class="">
		<dl>
			<dt>TLP</dt>
			<dd><span class={tlpStyle}>{tlp}</span></dd>
			<dt>Title</dt>
			<dd>{title}</dd>
			<dt>ID</dt>
			<dd>{id}</dd>
			<dt>Language</dt>
			<dd>{lang}</dd>
			<dt>CSAF-Version</dt>
			<dd>{csafVersion}</dd>
			<dt>Published</dt>
			<dd>{published}</dd>
			<dt>Last update</dt>
			<dd>{lastUpdate}</dd>
			<dt>Status</dt>
			<dd>{status}</dd>
		</dl>
	</div>
{/if}

<style>
	dt {
		font-size: large;
	}
	dd {
		margin-bottom: 1.5em;
	}
	.tlpclear {
		background: #000;
		color: #fff;
	}
	.tlpred {
		background: #ff2b2b;
		color: #fff;
	}
	.tlpamber {
		background: #ffc000;
		color: #fff;
	}
	.tlpgreen {
		background: #33ff00;
		color: #fff;
	}
</style>
