<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de>
-->

<script lang="ts">
  import { appStore } from "$lib/store";
  import Collapsible from "$lib/Collapsible.svelte";
  import Distributions from "./distributions/Distributions.svelte";
  import GeneralInformation from "./GeneralInformation.svelte";
  import KeyValue from "$lib/KeyValue.svelte";
</script>

{#if $appStore.providerMetadata}
  <Collapsible header="General information" level="2" open={$appStore.ui.isFeedGeneralSectionOpen}>
    <GeneralInformation />
  </Collapsible>
  <Collapsible header="Distributions" level="2" open={$appStore.ui.isFeedDistributionOpen}>
    <Distributions />
  </Collapsible>
  <Collapsible
    header="Public OpenPGP keys"
    level="2"
    open={$appStore.ui.isFeedPublicPGPSectionOpen}
  >
    {#each $appStore.providerMetadata["public_openpgp_keys"] as key}
      <KeyValue keys={["fingerprint", "url"]} values={[key.fingerprint, key.url]} />
    {/each}
  </Collapsible>
{/if}
