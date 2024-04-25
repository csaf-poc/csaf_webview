<!--
 This file is Free Software under the Apache-2.0 License
 without warranty, see README.md and LICENSES/Apache-2.0.txt for details.

 SPDX-License-Identifier: Apache-2.0

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de>
-->

<script lang="ts">
  import BranchComponent from "./Branch.svelte";
  import Product from "$lib/singleview/producttree/product/Product.svelte";
  import type { Branch } from "$lib/types";

  export let branch: Branch;
</script>

<div class="branch">
  <span class="tag is-small">{branch.category}</span>
  {branch.name}
  {#if branch.branches}
    {#each branch.branches as b}
      <BranchComponent branch={b} />
    {/each}
  {/if}
  {#if branch.product}
    <Product product={branch.product} />
  {/if}
</div>
