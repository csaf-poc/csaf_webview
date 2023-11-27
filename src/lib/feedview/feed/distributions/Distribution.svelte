<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de>
-->

<script lang="ts">
  import type { Distribution } from "./distributiontype";
  import { base } from "$app/paths";
  import { goto } from "$app/navigation";
  export let distribution: Distribution;
  const sortedFeeds = distribution.rolie.feeds.sort((entry1: any, entry2: any) => {
    if (entry1.url < entry2.url) return 1;
    if (entry1.url > entry2.url) return -1;
    return 0;
  });
  /**
   * openFeed opens a feed from a distribution.
   * @param e
   */
  const openFeed = (e: Event) => {
    const url = (e.target as Element).getAttribute("href")!;
    goto(`${base}/feed?q=${url}`);
    e.preventDefault();
  };
</script>

{#if distribution.rolie && distribution.rolie.feeds}
  {#each sortedFeeds as feed}
    <div class="entry">
      <table>
        <tbody>
          {#if feed.summary}
            <tr
              ><td class="key">Summary</td><td class="value"
                ><span class="header">{feed.summary}</span></td
              ></tr
            >
          {/if}
          <tr
            ><td class="key">TLP-Label</td><td class="value"
              ><span
                class:tlpclear={feed.tlp_label === "WHITE"}
                class:tlpamber={feed.tlp_label === "AMBER"}
                class:tlpred={feed.tlp_label === "RED"}
                class:tlpgreen={feed.tlp_label === "GREEN"}>{feed.tlp_label}</span
              ></td
            ></tr
          >
          <tr
            ><td class="key">URL</td><td class="value"
              ><a id={crypto.randomUUID()} on:click={openFeed} href={feed.url}>{feed.url}</a></td
            ></tr
          >
        </tbody>
      </table>
    </div>
  {/each}
{/if}
