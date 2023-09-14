<script lang="ts">
  export let keys: Array<String>;
  export let values: any;
</script>

{#each keys as key, index}
  <table>
    <tbody>
      <tr><td class="key">{key}</td><td class="value">{values[index]}</td></tr>
    </tbody>
  </table>
{/each}

<style>
  .key {
    padding: 0.2rem;
    width: 21rem;
  }
  .value {
    padding: 0.2rem;
  }
</style>
