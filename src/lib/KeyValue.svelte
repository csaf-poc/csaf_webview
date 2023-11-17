<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de>
-->

<script lang="ts">
  import { marked } from "marked";
  import DOMPurify from "dompurify";
  export let keys: Array<String>;
  export let values: any;
  export let compact = false;
  let width = compact ? "width:10rem" : "width: 15vw;";
  marked.use({ gfm: true });
  $: keyStyle = `padding: 0.2rem; ${width}`;
</script>

{#each keys as key, index}
  <table>
    <tbody>
      {#if key == "text" || key == "Text"}
        <tr
          ><td style={keyStyle}>{key}</td><td class="value">
            <small class="hint bg-light">Markdown</small>
            <div class="bd-light display-markdown">
              {@html DOMPurify.sanitize(
                marked.parse(values[index].replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, ""))
              )}
            </div>
          </td>
        </tr>
      {:else}
        <tr><td style={keyStyle}>{key}</td><td class="value">{values[index]}</td></tr>
      {/if}
    </tbody>
  </table>
{/each}

<style>
  .value {
    padding: 0.2rem;
    min-width: 50rem;
  }
  .display-markdown {
    padding: 0.5rem;
  }
</style>
