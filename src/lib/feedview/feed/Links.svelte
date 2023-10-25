<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de>
-->

<script lang="ts">
  import type { Link } from "./feedTypes";
  export let links: Link[] = [];
</script>

<table>
  {#each links as link}
    <tr>
      <td class="key">{link.rel}: </td><td
        ><a id={crypto.randomUUID()} target="_blank" href={link.href}>{link.href}</a></td
      >
    </tr>
  {/each}
</table>

<style>
  .key {
    width: 8vw;
  }
  td {
    padding: 0.3rem;
  }
</style>
