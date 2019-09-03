<template>
  <v-layout wrap>
    <v-flex xs4 v-for="(post,index) in posts" :key="`post-${index}`" class="pa-3">
      <post-card :post="post"/>
    </v-flex>
  </v-layout>
</template>

<script>
import PostCard from './PostCard/PostCard'

export default {
  props: [
    'posts'
  ],
  components: {
    PostCard
  }
}
</script>

<style scoped>
span{
    overflow:hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.item {
  width:calc(33.3% - 32px);
}

@media (max-width: 640pt) {
  .item {
    width:96%;
  }
}
</style>
