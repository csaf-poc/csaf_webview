<script lang="ts">
  export let value = "";
  export let label = "";
</script>

<div class="">
  <h6>{label}</h6>
  <p>{value}</p>
</div>

<style>
  h6 {
    line-height: 0.3em;
    font-size: large;
  }
  p {
    margin-left: 4rem;
    text-align: justify;
  }
</style>
