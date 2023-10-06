<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de
-->

<script lang="ts">
  import { appStore } from "$lib/store";
  import KeyValue from "$lib/KeyValue.svelte";
</script>

{#if $appStore.providerMetadata}
  <KeyValue
    keys={[
      "Canonical URL",
      "Last updated",
      "Metadata version",
      "List on CSAF aggregators",
      "Mirror on CSAF aggregators",
      "Publisher category",
      "Publisher name",
      "Publisher namespace",
      "Role"
    ]}
    values={[
      $appStore.providerMetadata["canonical_url"],
      $appStore.providerMetadata["last_updated"],
      $appStore.providerMetadata["metadata_version"],
      $appStore.providerMetadata["list_on_CSAF_aggregators"] ? "✓" : "✘",
      $appStore.providerMetadata["mirror_on_CSAF_aggregators"] ? "✓" : "✘",
      $appStore.providerMetadata["publisher"]["category"],
      $appStore.providerMetadata["publisher"]["name"],
      $appStore.providerMetadata["publisher"]["namespace"],
      $appStore.providerMetadata["role"]
    ]}
  />
{/if}
