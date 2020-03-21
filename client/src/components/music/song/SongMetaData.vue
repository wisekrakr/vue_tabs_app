<template>
  <Panel :title="song.title">
    <v-btn
      v-if="$store.state.isUserLoggedIn"
      slot="action"
      light
      medium
      absolute
      right
      middle
      fab
      :to="`/songs/get/` +song.id +`/edit`"
    >
      <v-icon>mdi-file-document-edit</v-icon>
    </v-btn>
    <v-layout>
      <v-flex>
        <ul class="meta-list">
          <li>
            Artist:
            <span>{{ song.artist }}</span>
          </li>
          <li>
            Album:
            <span>{{ song.album }}</span>
          </li>
          <li>
            Genre:
            <span>{{ song.genre }}</span>
          </li>
          <li>
            Release Date:
            <span>{{ formatDate(song.releaseDate) }}</span>
          </li>
        </ul>
      </v-flex>

      <v-flex>
        <img :src="song.albumImageUrl" class="album-image" />
      </v-flex>
    </v-layout>
  </Panel>
</template>

<script>
import moment from "moment";

export default {
  props: ["song"],

  methods: {
    formatDate(date) {
      return moment(date).format("YYYY-MM-DD");
    }
  }
};
</script>

<style scoped>
.meta-list {
  list-style-type: none;
  padding: 1.5rem;
  width: 400px;
}
.meta-list li {
  display: block;
  text-align: left;
}
.meta-list li span {
  background: var(--light-color);
  display: block;
  text-align: right;
}
.album-image {
  padding-top: 1.5rem;
  width: 40% !important;
  margin: auto !important;
}
</style>
