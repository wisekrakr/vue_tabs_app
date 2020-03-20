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
              <v-text-field v-model="song.releaseDate" label="Release Date" readonly v-on="on"></v-text-field>
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
      <button @click="addSong" class="btn large-btn" style="width:50%">Add Song</button>
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
    },
    menu2: false,
    rules: {
      required: value => !!value || "Required"
    }
  }),
  components: {
    Panel
  },
  methods: {
    async addSong() {
      try {
        await SongsService.addSong(this.song);
        // this.$store.dispatch("addSong", response.data.song);

        this.$router.push({
          name: "songs"
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style></style>
