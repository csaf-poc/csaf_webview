<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

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
  export let url = undefined
  export let id = undefined
  export let target = undefined

  // Protocols that are considered safe for URLs that should be
  // clickable.
  const safeProtocols = ["https:", "http:"]

  let protocol = undefined
  if (URL.canParse(url)) {
    protocol = new URL(url).protocol
  }
</script>

{#if safeProtocols.includes(protocol)}
<a id={id} target={target} href={url}>{url}</a>
{:else}
{url}
{/if}
