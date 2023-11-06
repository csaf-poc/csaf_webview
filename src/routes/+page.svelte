<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de>
-->
<script lang="ts">
  import { appStore } from "$lib/store";
  import { browser } from "$app/environment";
  import { loadSingleCSAF } from "$lib/urlloader";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import SingleView from "$lib/singleview/SingleView.svelte";
  import Spinner from "$lib/Spinner.svelte";
  $: if (browser) {
    const doc = $page.url.searchParams.get("q") || "";
    if (doc) appStore.setLastDoc(`${doc}`);
    if (/^\?q=/.test($page.url.search)) {
      const url = $page.url.searchParams.get("q")!;
      loadSingleCSAF(url);
    } else {
      appStore.setDocument(null);
    }
  }
  /**
   * onMount checks queryparams and loads a single document if applicable.
   */
  onMount(() => {
    appStore.clearHistory();
    const doc = $page.url.searchParams.get("q") || "";
    if (doc) appStore.setLastDoc(`${doc}`);
    if (/^\?q=/.test($page.url.search)) {
      const url = $page.url.searchParams.get("q")!;
      loadSingleCSAF(url);
    } else {
      appStore.setDocument(null);
    }
    appStore.setSingleMode();
  });
</script>

<SingleView />
<Spinner open={$appStore.ui.csafLoading} />
