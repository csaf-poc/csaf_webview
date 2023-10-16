<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de
-->

<script lang="ts">
  import Collapsible from "$lib/Collapsible.svelte";
  import KeyValue from "../../KeyValue.svelte";
  import type { Note } from "$lib/singleview/docmodel/docmodeltypes";
  import ValueField from "../../ValueField.svelte";
  export let note: Note;
  let keys: string[] = [];
  let values: string[] = [];
  if (note.audience) {
    keys.push("Audience");
    values.push(note.audience);
  }
  keys.push("Category");
  values.push(note.category);
  if (note.title) {
    keys.push("Title");
    values.push(note.title);
  }
</script>

<Collapsible header={`Category:${note.category}`} level="4">
  <KeyValue compact={true} {keys} {values} />
  <p>
    <ValueField label="Text" value={note.text} />
  </p>
</Collapsible>

<style>
  p {
    margin-top: 2rem;
  }
</style>
