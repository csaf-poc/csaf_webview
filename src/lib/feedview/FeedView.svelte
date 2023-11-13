<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de>
-->
<script lang="ts">
  import { appStore } from "$lib/store";
  import Back from "$lib/Back.svelte";
  import Collapsible from "$lib/Collapsible.svelte";
  import Feed from "./feed/Feed.svelte";
  import Loader from "./Loader.svelte";
  import Overview from "./feed/Overview.svelte";
</script>

<Loader />
<Overview />
{#if $appStore.currentFeed}
  <Collapsible
    header={$appStore.currentFeed?.feed.title}
    open={$appStore.ui.isFeedSectionOpen}
    onClose={() => {
      appStore.setFeedSectionClosed();
    }}
  >
    <Feed />
  </Collapsible>
{/if}

{#if $appStore.ui.history.length > 0}
  <Back />
{/if}
