<script lang="ts">
  import type { Link } from "./feedTypes";
  export let links: Link[] = [];
</script>

<table>
  {#each links as link}
    <tr>
      <td class="key">{link.rel}: </td><td
        ><a id={crypto.randomUUID()} target="_blank" href={link.href}>{link.href}</a></td
      >
    </tr>
  {/each}
</table>

<style>
  .key {
    width: 8vw;
  }
  td {
    padding: 0.3rem;
  }
</style>
