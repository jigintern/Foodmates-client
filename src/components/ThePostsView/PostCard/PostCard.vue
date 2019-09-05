<template>
  <v-card>
    <v-col class="px-3">

      <v-row v-if="post.image_address">
        <v-img :src="`https://t2.intern.jigd.info/${post.image_address}`" class="post-image pa-2">
          <v-row align="end" class="fill-height">
            <v-sheet tile color="rgba(0, 0, 0, .5)" class="lightbox white--text pa-2" width="100%">
              <h4 class="caption ml-2">{{ post.store_name }}</h4>
              <span class="ml-4 body-1 font-weight-black">{{ post.dish_name }}</span>
            </v-sheet>
          </v-row>
        </v-img>
      </v-row>

      <v-row v-else>
        <v-sheet tile class="px-4 py-2 orange white--text" style="width: 100%;">
          <h4 class="caption ml-2">{{ post.store_name }}</h4>
          <span class="body-1 ml-4">{{ post.dish_name }}</span>
        </v-sheet>
      </v-row>

      <v-row>
        <v-col cols="2" class="pa-0">
          <v-avatar size=32 class="ma-2" style="cursor:pointer;" @click="goProfile">
            <img :src="`https://t2.intern.jigd.info/${post.icon_address}`">
          </v-avatar>
        </v-col>
        <v-col cols="9" class="pa-0" align-self="center">
          <v-row class="body-1">
            <span class="title">{{ post.user_name }}</span>
            <span class="caption ml-3">@{{ post.login_name }}</span>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <h4 style="text-align: right; width: 100%;" class="pr-4 caption grey--text">{{ post.created_at }}</h4>
      </v-row>
      <v-row>
        <p class="comment body-1 mx-5">{{ post.comment }}</p>
      </v-row>
<!-- 
      <div class="d-flex justify-end pa-4">
        <v-icon class="px-2">mdi-bookmark-outline</v-icon>
        <v-icon class="px-2">mdi-message-outline</v-icon>
        <v-icon class="px-2">mdi-dots-vertical</v-icon>
      </div>
 -->
    </v-col>
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
.row {
  padding: 0 0;
}

.col {
  padding: 0 0;
}

.post-image {
  max-height: 300px;
  justify-content: center;
}
</style>