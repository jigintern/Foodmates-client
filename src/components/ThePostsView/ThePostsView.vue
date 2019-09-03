<template>
  <v-container grid-list-xl>
    <v-layout row>
      <v-flex v-for="(post, index) in posts" :key="`post-${index}`" justify-center xs12 md6 lg4>
        <post-card :post="post"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PostCard from './PostCard/PostCard'

export default {
  components: {
    PostCard
  },
  props: [
    'posts'
  ]
}
</script>
