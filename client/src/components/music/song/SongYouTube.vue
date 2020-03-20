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
import Panel from "@/components/templates/Panel";
export default {
  props: ["youtubeId"],
  components: {
    Panel
  }
};
</script>

<style scoped></style>
