<template>
  <v-container

   >
    <v-layout row>
      <v-flex justify-center xs6 lg3 v-for="n in 4">
        <div class="text-center pa-5">
          <v-btn rounded>{{ "これはお勧めの人" + n }}</v-btn>
        </div>
      </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="stylus" scoped>
</style>
