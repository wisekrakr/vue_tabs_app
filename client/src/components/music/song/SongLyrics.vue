<template>
  <Panel title="Song Lyrics">
    <v-textarea readonly v-model="lyrics" />
  </Panel>
</template>

<script>
export default {
  props: ["lyrics"]
};
</script>

<style>
</style>