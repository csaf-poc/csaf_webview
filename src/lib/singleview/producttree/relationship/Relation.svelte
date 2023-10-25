<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de>
-->

<script lang="ts">
  import { appStore } from "$lib/store";
  import { tick } from "svelte";
  import Collapsible from "$lib/Collapsible.svelte";
  import KeyValue from "$lib/KeyValue.svelte";
  import ProductIdentificationHelper from "../product/ProductIdentificationHelper.svelte";
  import type { Relationship } from "$lib/types";
  export let relation: Relationship;
  let highlight = false;
  const openProduct = (e: Event) => {
    // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
    let product: string = (e.target as Element).getAttribute("href")!;
    appStore.setProductTreeSectionVisible();
    appStore.setSelectedProduct(product);
    appStore.unshiftHistory((e.target as Element).id);
    e.preventDefault();
  };
  async function updateUI() {
    await tick();
    document
      .getElementById(`${relation.full_product_name.product_id}`)
      ?.scrollIntoView({ behavior: "smooth" });
  }
  $: if ($appStore.ui.selectedProduct === relation.full_product_name.product_id) {
    highlight = true;
    updateUI();
  } else {
    highlight = false;
  }
</script>

<Collapsible
  header={`${relation.full_product_name.product_id}`}
  level="4"
  open={relation.full_product_name.product_id === $appStore.ui.selectedProduct}
  {highlight}
  onClose={() => {
    if ($appStore.ui.selectedProduct === relation.full_product_name.product_id) {
      appStore.resetSelectedProduct();
    }
  }}
>
  <div id={relation.full_product_name.product_id} class="relation">
    <KeyValue
      keys={["Category", "Name", "Product ID"]}
      values={[
        relation.category,
        relation.full_product_name.name,
        relation.full_product_name.product_id
      ]}
    />
    {#if relation.full_product_name.product_identification_helper}
      <ProductIdentificationHelper
        helper={relation.full_product_name.product_identification_helper}
      />
    {/if}
    <table>
      <tbody>
        <tr>
          <td class="key">Product reference</td>
          <td
            ><a id={crypto.randomUUID()} on:click={openProduct} href={relation.product_reference}
              >{relation.product_reference}</a
            ></td
          >
        </tr>
        <tr>
          <td class="key">Relates to</td>
          <td
            ><a
              id={crypto.randomUUID()}
              on:click={openProduct}
              href={relation.relates_to_product_reference}
              >{relation.relates_to_product_reference}</a
            ></td
          >
        </tr>
      </tbody>
    </table>
  </div>
</Collapsible>

<style>
  .key {
    width: 21rem;
  }
  .relation {
    margin-top: 2rem;
  }
</style>
