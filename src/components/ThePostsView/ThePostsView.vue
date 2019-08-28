<template>
  <v-container grid-list-xl>
    <v-layout row>
      <v-flex v-for="element in posts" :key="element.dish_name" justify-center xs12 md6 lg4>
        <Post :post="element"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
/* eslint-disable */
import Post from './Post/Post'

export default {
  components: {
    Post
  },
  props: ['posts']
}
</script>