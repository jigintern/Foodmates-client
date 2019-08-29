<template>
  <div>
    <Header/>
    <Profile />
    <PostsView :posts="posts" />
    <!--<PostModal id="post-modal"/>-->
  </div>
</template>

<script>
/* eslint-disable */
import Header from '../components/TheHeader/TheHeader'
import Profile from '../components/TheProfile/TheProfile'
import PostsView from '../components/ThePostsView/ThePostsView'
import PostModal from '../components/ThePostModal/ThePostModal'

const postURL = "http://localhost:8080/api/v1/posts/readall/"

export default {
  components: {
    PostsView,
    PostModal,
    Header,
    Profile
  },
  data: {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    }
  },
  created() {
    this.$axios.get(postURL,this.headers)
      .then(res => {
        console.log(res.data)
        this.posts = res.data
      })
  },
  data() {
    return {
      posts: []
    }
  }
}
</script>
