<script lang="ts">
  export let values = "";
  export let label = "";
</script>

<p>{label}</p>
<ul>
  {#each values as value}
    <li>{value}</li>
  {/each}
</ul>

<style>
  p {
    margin-bottom: 0;
  }
  ul {
    margin-top: 0;
    padding-left: 3rem;
    list-style-type: none;
  }
</style>
