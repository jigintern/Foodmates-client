<template>
  <v-card>
    <header class="d-flex flex-column py-2 px-4 primary white--text">
        <span class="" style="font-size:16px;">{{ post.dish_name }}</span>
        <span class="" style="font-size:10px;">{{ post.store_name }}</span>
    </header>
    <v-img :src="`https://t2.intern.jigd.info/${post.image_address}`" class="post-image" />
    <div class="d-flex">
      <v-avatar small class="ma-4" style="cursor:pointer;" @click="goProfile">
        <img :src="`https://t2.intern.jigd.info/${post.icon_address}`">
      </v-avatar>
    <div class="d-flex flex-column mt-4 mr-8">
      <span style="height:1.28em;">{{ post.user_name }}</span>
      <span style="font-size:8px;">{{ post.created_at }}</span>
      <p class="mt-2" style="text-align:justify;font-size:12.8px;">{{ post.comment }}</p>
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
  props: ['post'],
  methods: {
    goProfile () {
      this.$router.push({
        name: 'profile',
        params: { user_id: this.post.login_name }
      })
    }
  }
}
</script>

<style scoped>

.post-image {
  max-height: 300px;
  justify-content: center;
}
</style>