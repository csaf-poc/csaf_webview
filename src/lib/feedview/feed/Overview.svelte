<!--
 This file is Free Software under the Apache-2.0 License
 without warranty, see README.md and LICENSES/Apache-2.0.txt for details.

 SPDX-License-Identifier: Apache-2.0

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de>
-->

<script lang="ts">
  import { appStore } from "$lib/store";
  import Collapsible from "$lib/Collapsible.svelte";
  import Distributions from "./distributions/Distributions.svelte";
  import GeneralInformation from "./GeneralInformation.svelte";
  import SafeLink from "../../SafeLink.svelte";
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
      <table class="keyvalue">
        <tbody>
          <tr><td class="key">fingerprint</td><td class="value">{key.fingerprint}</td></tr>
          <tr><td class="key">url</td><td class="value"><SafeLink url={key.url}/></td></tr>
        </tbody>
      </table>
    {/each}
  </Collapsible>
{/if}
