<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de
-->
<script lang="ts">
  import SingleDocumentView from "$lib/singleview/components/DocumentView.svelte";
  import Droparea from "$lib/singleview/components/Droparea.svelte";
  import ProductVulnerabilities from "$lib/singleview/components/ProductVulnerabilities.svelte";
  import Vulnerabilities from "./components/vulnerabilities/Vulnerabilities.svelte";
</script>

<div class="row">
  <div class="col">
    <Droparea />
  </div>
</div>
<div class="row">
  <div class="col">
    <SingleDocumentView />
  </div>
</div>
<div class="row">
  <div class="col">
    <ProductVulnerabilities />
  </div>
</div>
<div class="row">
  <div class="col">
    <Vulnerabilities />
  </div>
</div>
