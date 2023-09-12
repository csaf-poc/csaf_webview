<script lang="ts">
  export let vulnerability: any;
</script>

<dl>
  {#if vulnerability.title}
    <dt>Title</dt>
    <dd>{vulnerability.title}</dd>
  {/if}
  {#if vulnerability.cwe}
    <dt>CWE ID</dt>
    <dd>{vulnerability.cwe.id}</dd>
    <dt>CWE Name</dt>
    <dd>{vulnerability.cwe.name}</dd>
  {/if}
  {#if vulnerability.discovery_date}
    <dt>Discovery date</dt>
    <dd>{vulnerability.discovery_date}</dd>
  {/if}
  {#if vulnerability.release_date}
    <dt>Release date</dt>
    <dd>{vulnerability.release_date}</dd>
  {/if}
</dl>

<style>
  dt {
    float: left;
    clear: left;
    font-weight: 100;
    width: 14rem;
  }
  dd {
    margin-bottom: 0.1em;
  }
</style>
