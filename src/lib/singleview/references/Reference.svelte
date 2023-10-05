<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de
-->

<script lang="ts">
  import KeyValue from "$lib/KeyValue.svelte";
  export let reference: any;
  let keys: string[] = [];
  let values: string[] = [];
  if (reference.category) {
    keys.push("Category");
    values.push(reference.category);
  }
  keys.push("Summary");
  values.push(reference.summary);
  keys.push("URL");
  values.push(reference.url);
</script>

<div class="reference">
  <KeyValue compact={true} {keys} {values} />
</div>

<style>
  .reference {
    margin-bottom: 1rem;
  }
</style>
