<template>
  <v-container grid-list-xl>
    <v-layout row>
      <v-flex v-for="post in posts" :key="post.dish_name" justify-center xs12 md6 lg4>
        <Post v-if="post.image_address==''" :post="post"/>
        <PostWithPhoto v-else :post="post" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Post from './Post/Post'
import PostWithPhoto from './Post/PostWithPhoto'

export default {
  components: {
    Post,
    PostWithPhoto
  },
  props: [
    'posts'
  ]
}
</script>
