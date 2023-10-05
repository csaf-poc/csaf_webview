<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de
-->
<script lang="ts">
  import SingleView from "$lib/singleview/SingleView.svelte";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { loadSingleCSAF } from "$lib/urlloader";
  import { appStore } from "$lib/store";
  import { browser } from "$app/environment";
  $: if (browser) {
    if (/^\?q=/.test($page.url.search)) {
      const url = $page.url.search.replace("?q=", "");
      loadSingleCSAF(url);
    } else {
      appStore.setDocument(null);
    }
  }
  onMount(() => {
    if (/^\?q=/.test($page.url.search)) {
      const url = $page.url.search.replace("?q=", "");
      loadSingleCSAF(url);
    } else {
      appStore.setDocument(null);
    }
    appStore.setSingleMode();
  });
</script>

<SingleView />
