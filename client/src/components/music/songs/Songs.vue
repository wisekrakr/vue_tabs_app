<template>
  <v-layout column>
    <v-flex xs6>
      <Search />
      <SongsPanel />
      <div v-html="error" class="danger-alert" />
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from "./SongsPanel";
import Search from "@/components/actions/Search";

export default {
  data: () => ({
    error: null
  }),
  components: {
    SongsPanel,
    Search
  }
};
</script>

<style scoped></style>
