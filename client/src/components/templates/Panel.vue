<template>
  <div class="container">
    <div class="white elevation-2">
      <v-toolbar dense dark>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <slot name="action" />
      </v-toolbar>

      <div class="pl-2 pr-2 pt-1 pb-1">
        <slot>
          No slot content defined.
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style scoped>
.container {
  width: 100%;
}
</style>
