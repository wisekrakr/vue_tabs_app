<template>
  <Panel title="Songs">
    <v-btn
      v-if="$store.state.isUserLoggedIn"
      slot="action"
      light
      medium
      absolute
      right
      middle
      fab
      to="/songs/add-song"
    >
      <v-icon>mdi-music-note-plus</v-icon>
    </v-btn>

    <div v-for="song in songs" :key="song.id" class="song-list">
      <router-link :to="`/songs/get/${song.id}`">
        <v-layout>
          <v-flex xs6>
            <div class="song-title">{{ song.title }}</div>
            <div class="song-artist">{{ song.artist }}</div>
            <div class="song-genre">{{ song.genre }}</div>
          </v-flex>
          <v-flex xs6>
            <img class="album-image" :src="song.albumImageUrl" />
          </v-flex>
        </v-layout>
      </router-link>
    </div>
  </Panel>
</template>

<script>
import SongsService from "@/services/SongsService.js";

export default {
  data: () => ({
    songs: null,
    error: null
  }),
  watch: {
    "$route.query.search": {
      immediate: true,
      async handler(value) {
        this.songs = (await SongsService.getAllSongs(value)).data;
      }
    }
  }
};
</script>

<style scoped>
.song-list {
  width: 80%;
  margin: 0 auto;
}

.song-list a {
  position: relative;
  display: block;
  padding: 0.4em 0.4em 0.4em 2em;
  *padding: 0.4em;
  margin: 0.5em 0;
  background: var(--primary-color);
  color: var(--secondary-color);
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

.song-list a:hover {
  background: var(--light-color);
  text-decoration: none;
  transform: scale(1.1);
}

.song-title {
  font-size: 28px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
</style>
