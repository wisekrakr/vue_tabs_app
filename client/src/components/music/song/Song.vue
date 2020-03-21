<template>
  <div>
    <SongMetaData :song="song" />
    <SongGuitarTab :tab="song.tab" />

    <v-layout>
      <v-flex xs6>
        <SongLyrics :lyrics="song.lyrics" />
      </v-flex>

      <v-flex xs6>
        <SongYouTube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>
    <div v-html="error" class="danger-alert" />
  </div>
</template>

<script>
import SongsService from "@/services/SongsService.js";
import SongMetaData from "./SongMetaData";
import SongYouTube from "./SongYouTube";
import SongLyrics from "./SongLyrics";
import SongGuitarTab from "./SongGuitarTab";

export default {
  data: () => ({
    song: {},
    error: null
  }),
  components: {
    SongMetaData,
    SongYouTube,
    SongLyrics,
    SongGuitarTab
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
