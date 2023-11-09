<script lang="ts">
  export let checked: any;
</script>

<input id="expandall" bind:checked type="checkbox" />
<label for="expandall" class="expandall">Expand sections</label>

<style>
  .expandall {
    font-size: large;
  }
</style>
