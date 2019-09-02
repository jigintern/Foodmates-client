<template>
    <magic-grid maxColWidth="480">
      <div v-for="post in posts" :key="post.dish_name" class="item">
        <Post v-if="post.image_address==''" :post="post"/>
        <PostWithPhoto v-else :post="post" />
      </div>
    </magic-grid>
</template>

<style scoped>
 .item{
   width:calc(33.3% - 32px);
 }
@media (max-width: 640pt){
    .item{
      width:96%;
    }
}
</style>

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

<style scoped>
span{
    overflow:hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
