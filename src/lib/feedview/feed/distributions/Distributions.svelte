<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de
-->
<script lang="ts">
  import { appStore } from "$lib/store";
  import Collapsible from "$lib/Collapsible.svelte";
  import Distribution from "./Distribution.svelte";
</script>

{#if $appStore.providerMetadata}
  {#each $appStore.providerMetadata["distributions"] as distribution, index}
    <Collapsible header={`Distribution ${index + 1}`} level="3">
      <Distribution {distribution} />
    </Collapsible>
  {/each}
{/if}
