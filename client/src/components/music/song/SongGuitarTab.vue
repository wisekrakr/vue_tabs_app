<template>
  <Panel title="Guitar Tab">
    <v-layout xs6>
      <v-flex>
        <v-textarea readonly v-model="tab" />
      </v-flex>
    </v-layout>
  </Panel>
</template>

<script>
export default {
  props: ["tab"]
};
</script>

<style>
</style>