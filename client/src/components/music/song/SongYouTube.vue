<template>
  <Panel title="YouTube Video">
    <iframe
      class="youtube"
      :src="`https://www.youtube.com/embed/` + `${youtubeId}`"
      frameborder="0"
      allow="accelerometer; encrypted-media; gyroscope"
      allowfullscreen
    ></iframe>
  </Panel>
</template>

<script>
export default {
  props: ["youtubeId"]
};
</script>

<style scoped>
.youtube {
  width: 90%;
}
</style>
