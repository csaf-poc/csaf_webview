<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de
-->

<script lang="ts">
  import ProductIdentificationHelper from "./ProductIdentificationHelper.svelte";
  import KeyValue from "$lib/KeyValue.svelte";
  export let productNames: any;
</script>

{#each productNames as product}
  <KeyValue keys={["Name", "Product ID"]} values={[product.name, product.product_id]} />
  {#if product.product_identification_helper}
    <ProductIdentificationHelper helper={product.product_identification_helper} />
  {/if}
{/each}
