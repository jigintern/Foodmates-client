<template>
  <magic-grid maxColWidth="480">
    <div v-for="post in posts" :key="post.dish_name" class="item">
      <post-card :post="post"/>
    </div>
  </magic-grid>
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
