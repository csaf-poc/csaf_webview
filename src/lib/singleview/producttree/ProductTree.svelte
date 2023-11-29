<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de>
-->

<script lang="ts">
  import { appStore } from "$lib/store";
  import Branch from "./branch/Branch.svelte";
  import Collapsible from "$lib/Collapsible.svelte";
  import ProductGroups from "./productgroup/ProductGroups.svelte";
  import ProductNames from "./product/ProductNames.svelte";
  import Relationships from "./relationship/Relationships.svelte";
</script>

{#if $appStore.doc?.productTree.branches}
  {#each $appStore.doc?.productTree.branches as branch}
    <Collapsible
      header="Branches"
      open={$appStore.ui.isProductTreeVisible ||
        ($appStore.ui.isProductTreeOpen &&
          !(
            $appStore.doc?.productTree.relationships &&
            $appStore.doc?.productTree.product_groups &&
            $appStore.doc?.productTree.full_product_names
          ))}
    >
      <Branch {branch} />
    </Collapsible>
  {/each}
{/if}

{#if $appStore.doc?.productTree.relationships}
  <Collapsible
    header="Relationships"
    open={$appStore.ui.isProductTreeVisible ||
      ($appStore.ui.isProductTreeOpen &&
        !(
          $appStore.doc?.productTree.branches &&
          $appStore.doc?.productTree.product_groups &&
          $appStore.doc?.productTree.full_product_names
        ))}
  >
    <Relationships relationships={$appStore.doc?.productTree.relationships} />
  </Collapsible>
{/if}

{#if $appStore.doc?.productTree.product_groups}
  <Collapsible
    header="Product groups"
    open={$appStore.ui.isProductTreeVisible ||
      ($appStore.ui.isProductTreeOpen &&
        !(
          $appStore.doc?.productTree.branches &&
          $appStore.doc?.productTree.relationships &&
          $appStore.doc?.productTree.full_product_names
        ))}
  >
    <ProductGroups productGroups={$appStore.doc?.productTree.product_groups} />
  </Collapsible>
{/if}

{#if $appStore.doc?.productTree.full_product_names}
  <Collapsible
    header="Full Product Names"
    open={$appStore.ui.isProductTreeVisible ||
      ($appStore.ui.isProductTreeOpen &&
        !(
          $appStore.doc?.productTree.branches &&
          $appStore.doc?.productTree.relationships &&
          $appStore.doc?.productTree.product_groups
        ))}
  >
    <ProductNames productNames={$appStore.doc?.productTree.full_product_names} />
  </Collapsible>
{/if}
