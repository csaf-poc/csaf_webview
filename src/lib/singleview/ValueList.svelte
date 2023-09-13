<script lang="ts">
  export let values = "";
  export let label = "";
</script>

<h6>{label}</h6>
<ul>
  {#each values as value}
    <li>{value}</li>
  {/each}
</ul>

<style>
  h6 {
    line-height: 0.3em;
    font-size: large;
  }
  ul {
    list-style-type: none;
  }
</style>
