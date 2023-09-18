<script lang="ts">
  import KeyValue from "../KeyValue.svelte";

  export let helper: any;
  let keys: any = [];
  let values: any = [];
  if (helper.cpe) {
    keys.push("cpe");
    values.push(helper.cpe);
  }
  if (helper.hashes) {
    keys.push("hashes");
    values.push(helper.hashes);
  }
  if (helper.model_numbers) {
    keys.push("model_numbers");
    values.push(helper.model_numbers);
  }
  if (helper.purl) {
    keys.push("purl");
    values.push(helper.purl);
  }
  if (helper.sbom_urls) {
    keys.push("sbom_urls");
    values.push(helper.sbom_urls);
  }
  if (helper.serial_numbers) {
    keys.push("serial_numbers");
    values.push(helper.serial_numbers);
  }
  if (helper.skus) {
    keys.push("skus");
    values.push(helper.skus);
  }
  if (helper.x_generic_uris) {
    keys.push("x_generic_uris");
    values.push(helper.x_generic_uris);
  }
</script>

<h6>Product Version Helper</h6>
<KeyValue compact={true} {keys} {values} />

<style>
  h6 {
    margin-bottom: 0;
  }
</style>
