<template>
  <Panel title="Search for a guitar tab">
    <v-text-field
      label="Search by song title, artist, album or genre"
      v-model="search"
    ></v-text-field>
  </Panel>
</template>

<script>
import _ from "lodash";
export default {
  data: () => ({
    search: ""
  }),
  watch: {
    search: _.debounce(async function() {
      const route = {
        path: "songs"
      };

      if (this.search !== "") {
        route.query = {
          search: this.search
        };
      }

      this.$router.push(route);
    }, 700),
    "$route.query.search": {
      immediate: true,
      handler(value) {
        this.search = value;
      }
    }
  }
};
</script>

<style></style>
