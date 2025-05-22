<!--
 This file is Free Software under the Apache-2.0 License
 without warranty, see README.md and LICENSES/Apache-2.0.txt for details.

 SPDX-License-Identifier: Apache-2.0

 SPDX-FileCopyrightText: 2024 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2024 Intevation GmbH <https://intevation.de>
-->

<!--
Component that renders a URL as a clickable if the URL is safe to click.
Safe to click here means that it uses one of the following protocols:
 http, https

Other URLs are renders a plain text.
-->

<script lang="ts">
  export let url = undefined;
  export let id = undefined;
  export let target = undefined;

  // Protocols that are considered safe for URLs that should be
  // clickable.
  const safeProtocols = ["https:", "http:"];

  let protocol = undefined;
  if (url) {
    try {
      protocol = new URL(url).protocol;
    } catch {
      // Ignore
    }
  }
</script>

{#if protocol && safeProtocols.includes(protocol)}
  <a {id} {target} href={url}>{url}</a>
{:else}
  {url}
{/if}
