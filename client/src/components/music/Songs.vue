<template>
  <v-layout column>
    <v-flex xs6>
      <Panel title="Songs">
        <div v-for="song in songs" :key="song.id">
          {{ song.title }} | {{ song.artist }} | {{ song.album }}
        </div>
      </Panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from "@/services/SongsService.js";
import Panel from "@/components/templates/Panel";

export default {
  data: () => ({
    songs: null
  }),
  components: {
    Panel
  },
  async mounted() {
    //   request to backend as soon as page loads
    const res = await SongsService.getAllSongs();
    this.songs = res.data;
  }
};
</script>

<style></style>
