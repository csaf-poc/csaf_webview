<script lang="ts">
  export let keys: Array<String>;
  export let values: any;
  export let compact = false;
  let width = compact ? "width:8vw" : "width: 15vw;";

  $: keyStyle = `padding: 0.2rem; ${width}`;
</script>

{#each keys as key, index}
  <table>
    <tbody>
      <tr><td style={keyStyle}>{key}</td><td class="value">{values[index]}</td></tr>
    </tbody>
  </table>
{/each}

<style>
  .value {
    padding: 0.2rem;
  }
</style>
