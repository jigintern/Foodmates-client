<template>
  <div>
    <PostsView :posts="posts" />
    <PostModal />
  </div>
</template>

<script>
import PostsView from '../components/ThePostsView/ThePostsView'
import PostModal from '../components/ThePostModal/ThePostModal'

const postURL = 'http://6ed9c264.ngrok.io/api/v1/posts/readall/'

export default {
  components: {
    PostsView,
    PostModal
  },

  created () {
    this.$axios.get(postURL, this.headers)
      .then(res => {
        console.log(res.data)
        this.posts = res.data
      })
  },

  data () {
    return {
      posts: [],
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      }
    }
  }
}
</script>
