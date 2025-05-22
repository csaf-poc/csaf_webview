<!--
 This file is Free Software under the Apache-2.0 License
 without warranty, see README.md and LICENSES/Apache-2.0.txt for details.

 SPDX-License-Identifier: Apache-2.0

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de>
-->

<script lang="ts">
  import type { Link } from "./feedTypes";
  import SafeLink from "../../SafeLink.svelte";

  export let links: Link[] = [];
</script>

<table>
  {#each links as link}
    <tr>
      <td class="key">{link.rel}: </td><td
        ><SafeLink id={crypto.randomUUID()} target="_blank" url={link.href}/></td
      >
    </tr>
  {/each}
</table>
