<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de>
-->

<script lang="ts">
  import AcknowledgmentComponent from "./Acknowledgment.svelte";
  import type { Acknowledgment } from "../docmodel/docmodeltypes";
  export let acknowledgments: Acknowledgment[];
</script>

{#if acknowledgments}
  {#each acknowledgments as ack}
    <AcknowledgmentComponent {ack} />
  {/each}
{/if}
