<template>
  <div>
    <Header />
    <Profile />
    <PostsView :posts="posts" />
    <!--<PostModal id="post-modal"/>-->
  </div>
</template>

<script>
import Header from '../components/TheHeader/TheHeader'
import Profile from '../components/TheProfile/TheProfile'
import PostsView from '../components/ThePostsView/ThePostsView'

const postURL = 'http://86ab2198.ngrok.io/api/v1/posts/readall/'

export default {
  components: {
    PostsView,
    Header,
    Profile
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
