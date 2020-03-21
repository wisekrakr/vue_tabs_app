<template>
  <v-layout row wrap>
    <v-flex xs4>
      <Panel title="Song Meta Data">
        <div class="pl-4 pr-4">
          <v-text-field required :rules="[rules.required]" label="Title" v-model="song.title" />
          <v-text-field required :rules="[rules.required]" label="Artist" v-model="song.artist" />
          <v-text-field required :rules="[rules.required]" label="Album" v-model="song.album" />
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field v-model="song.releaseDate" label="Release Date" v-on="on"></v-text-field>
            </template>
            <v-date-picker v-model="song.releaseDate" @input="menu2 = false"></v-date-picker>
          </v-menu>
          <v-text-field required :rules="[rules.required]" label="Genre" v-model="song.genre" />
          <v-text-field label="Album Image Url" v-model="song.albumImageUrl" />
          <v-text-field label="Youtube Id" v-model="song.youtubeId" />
        </div>
      </Panel>
    </v-flex>
    <v-flex xs8>
      <Panel title="Guitar Tab">
        <v-textarea required :rules="[rules.required]" label="Tab" multi-line v-model="song.tab" />
      </Panel>
      <Panel title="Song Lyrics">
        <v-textarea label="Lyrics" multi-line v-model="song.lyrics" />
      </Panel>
      <button @click="saveSong" class="btn large-btn" style="width:50%">Edit Song</button>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from "@/services/SongsService.js";
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
    },
    menu2: false,
    rules: {
      required: value => !!value || "Required"
    }
  }),

  methods: {
    async saveSong() {
      try {
        await SongsService.updateSong(
          this.$store.state.route.params.songId,
          this.song
        );

        this.$router.push({
          name: "song",
          params: {
            songId: this.$store.state.route.params.songId
          }
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  },
  async mounted() {
    try {
      const res = await SongsService.getSong(
        this.$store.state.route.params.songId
      );

      this.song = {
        title: res.data.title,
        artist: res.data.artist,
        album: res.data.album,
        releaseDate: null,
        genre: res.data.genre,
        albumImageUrl: res.data.albumImageUrl,
        youtubeId: res.data.youtubeId,
        lyrics: res.data.lyrics,
        tab: res.data.tab
      };
    } catch (error) {
      this.error = error.response.data.error;
    }
  }
};
</script>

<style></style>
