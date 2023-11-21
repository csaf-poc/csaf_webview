<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de>
-->

<script lang="ts">
  export let values: any = [];
  export let label = "";
</script>

<p>{label}</p>
<ul class="valuelist">
  {#each values as value}
    <li>{value}</li>
  {/each}
</ul>
