<script lang="ts">
  export let distribution: any;
</script>

{#if distribution.rolie && distribution.rolie.feeds}
  {#each distribution.rolie.feeds as feed}
    <div class="entry">
      <table>
        <tbody>
          <tr
            ><td class="key">Summary</td><td class="value"
              ><span class="header">{feed.summary}</span></td
            ></tr
          >
          <tr
            ><td class="key">TLP-Label</td><td class="value"
              ><span
                class:tlpclear={feed.tlp_label === "WHITE"}
                class:tlpamber={feed.tlp_label === "AMBER"}
                class:tlpred={feed.tlp_label === "RED"}
                class:tlpgreen={feed.tlp_label === "GREEN"}>{feed.tlp_label}</span
              ></td
            ></tr
          >
          <tr><td class="key">URL</td><td class="value"><a href={feed.url}>{feed.url}</a></td></tr>
        </tbody>
      </table>
    </div>
  {/each}
{/if}

<style>
  .entry {
    padding: 0.5rem;
  }
  .header {
    font-size: large;
  }
  .key {
    padding: 0;
    width: 8vw;
  }
  .value {
    padding: 0;
  }
  .tlpclear {
    background: #000;
    color: #fff;
  }
  .tlpred {
    background: #000;
    color: #ff2b2b;
  }
  .tlpamber {
    background: #000;
    color: #ffc000;
  }
  .tlpgreen {
    background: #000;
    color: #33ff00;
  }
</style>
