<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de>
-->

<script lang="ts">
  import Collapsible from "$lib/Collapsible.svelte";
  import SingleNote from "$lib/singleview/notes/Note.svelte";
  import type { Note } from "$lib/singleview/docmodel/docmodeltypes";
  export let notes: Note[];
</script>

{#if notes}
  {#each notes as note}
    <Collapsible header={`Category: ${note.category}`} level="4" open={notes.length === 1}>
      <SingleNote {note} />
    </Collapsible>
  {/each}
{/if}
