<!--
 This file is Free Software under the Apache-2.0 License
 without warranty, see README.md and LICENSES/Apache-2.0.txt for details.

 SPDX-License-Identifier: Apache-2.0

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de>
-->

<script lang="ts">
  import KeyValue from "../../KeyValue.svelte";
  import type { Note } from "$lib/singleview/docmodel/docmodeltypes";

  export let note: Note;
  let keys: string[] = [];
  let values: string[] = [];
  if (note.audience) {
    keys.push("Audience");
    values.push(note.audience);
  }
  if (note.title) {
    keys.push("Title");
    values.push(note.title);
  }
</script>

<KeyValue {keys} {values} />
<div class="category-name">
  <h5>Text</h5>
</div>

<div class="markdown-text">
  <div>
    <!-- eslint-disable-next-line no-misleading-character-class -->
    {note.text.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, "")}
  </div>
</div>
