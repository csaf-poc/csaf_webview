<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de
-->
<script lang="ts">
  import KeyValue from "$lib/KeyValue.svelte";
  import type { Category } from "./feedTypes";
  export let categories: Category[] = [];
</script>

{#each categories as category}
  <KeyValue keys={["scheme", "term"]} values={[category.scheme, category.term]} compact={true} />
{/each}
