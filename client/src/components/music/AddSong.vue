<template>
  <v-layout row wrap>
    <v-flex xs4>
      <Panel title="Song Meta Data">
        <div class="pl-4 pr-4">
          <v-text-field label="Title" v-model="song.title" />
          <v-text-field label="Artist" v-model="song.artist" />
          <v-text-field label="Album" v-model="song.album" />
          <v-text-field label="Release Date" v-model="song.releaseDate" />
          <v-text-field label="Genre" v-model="song.genre" />
          <v-text-field label="Album Image Url" v-model="song.albumImageUrl" />
          <v-text-field label="Youtube Id" v-model="song.youtubeId" />
        </div>
      </Panel>
    </v-flex>
    <v-flex xs8>
      <Panel title="Guitar Tab">
        <v-textarea label="Tab" multi-line v-model="song.tab" />
      </Panel>
      <Panel title="Song Lyrics">
        <v-textarea label="Lyrics" multi-line v-model="song.lyrics" />
      </Panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from "@/services/SongsService.js";
import Panel from "@/components/templates/Panel";
export default {
  data: () => ({
    song: {
      title: null,
      artist: null,
      album: null,
      releaseDate: null,
      genre: null,
      albumImageUrl: null,
      youtubeId: null,
      lyrics: null,
      tab: null
    }
  }),
  components: {
    Panel
  },
  methods: {
    async addSong() {
      try {
        const response = await SongsService.addSong(this.song);
        this.$store.dispatch("addSong", response.data.song);
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  },
  async mounted() {
    await SongsService.addSong(this.song);
  }
};
</script>

<style></style>
