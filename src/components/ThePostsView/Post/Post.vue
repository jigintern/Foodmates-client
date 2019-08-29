<template>
  <v-card class="">
    <header class="d-flex align-center px-4 py-2 orange white--text">
      <span class="" style="font-size:16px;">{{ post.dish_name }}</span>
      <div class="d-flex flex-column ml-auto">
        <span class="" style="font-size:12px;">{{ post.restaurant_name }}</span>
        <span class="" style="font-size:8px;">{{ post.restaurant_place }}</span>
      </div>
    </header>
    <div class="d-flex pa-4">
      <v-avatar class="mr-4" style="">
        <img :src="post.user_icon_address">
      </v-avatar>
      <div class="">
        <div class="">
          <small class="">{{ post.created_at }}</small>
          <span class="">{{ post.user_id }}</span>
        </div>
        <p class="content">
          {{ post.comment }}
        </p>
      </div>
    </div>
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
