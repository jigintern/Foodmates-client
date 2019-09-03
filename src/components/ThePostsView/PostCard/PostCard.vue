<template>
  <v-card>
    <header class="d-flex align-center px-4 py-2 orange white--text">
      <span class="caption">{{ post.restaurant_name }}</span>
      <span class="body-1 ml-2">{{ post.dish_name }}</span>
    </header>
    <img v-if="post.image_address" :src="`https://t2.intern.jigd.info${post.image_address}`" width="100%" />
    <v-layout column class="pa-4">
      <v-flex class="post_created caption">{{ post.created_at }}</v-flex>
      <v-flex class="user_name body-2">{{ post.user_name }}</v-flex>
      <v-flex>
        <p class="comment body-1">{{ post.comment }}</p>
      </v-flex>
    </v-layout>
    <div class="d-flex justify-end pa-4">
      <v-icon class="px-2">mdi-bookmark-outline</v-icon>
      <v-icon class="px-2">mdi-message-outline</v-icon>
      <v-icon class="px-2">mdi-dots-vertical</v-icon>
    </div>
  </v-card>
</template>

<script>
  export default {
    props: ['post']
  }
</script>
