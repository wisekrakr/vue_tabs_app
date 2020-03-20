<template>
  <div>
    <SongMetaData :song="song" />
    <Panel title="Guitar Tab">
      <v-layout xs6>
        <v-flex>
          <v-textarea readonly v-model="song.tab" />
        </v-flex>
      </v-layout>
    </Panel>

    <v-layout>
      <v-flex xs6>
        <Panel title="Song Lyrics">
          <v-textarea readonly v-model="song.lyrics" />
        </Panel>
      </v-flex>

      <v-flex xs6>
        <SongYouTube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>
    <div v-html="error" class="error" />
  </div>
</template>

<script>
import SongsService from "@/services/SongsService.js";
import Panel from "@/components/templates/Panel";
import SongMetaData from "./SongMetaData";
import SongYouTube from "./SongYouTube";

export default {
  data: () => ({
    song: {},
    error: null
  }),
  components: {
    Panel,
    SongMetaData,
    SongYouTube
  },
  async mounted() {
    //   request to backend as soon as page loads
    try {
      const res = await SongsService.getSong(
        this.$store.state.route.params.songId
      );

      this.song = res.data;
    } catch (error) {
      this.error = error.response.data.error;
    }
  }
};
</script>

<style scoped>
.v-textarea {
  padding: 1.5rem;
}
</style>
