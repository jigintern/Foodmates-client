<template>
  <div>
    <div>
      <Header/>
      <Profile />
      <RecommendedUsers />
      <v-container grid-list-xl>
        <v-layout row>
          <v-flex justify-center xs12 md6 lg4 v-for="post in posts" :key="post.dish_name">
            <Post :post="post"/>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <PostModal id="post-modal"/>
  </div>
</template>

<script>
/* eslint-disable */
import Header from '../components/TheHeader/TheHeader'
import Post from '../components/ThePostsView/Post/Post'
import PostsView from '../components/ThePostsView/ThePostsView'
import PostModal from '../components/ThePostModal/ThePostModal'
import Profile from '../components/TheProfile/TheProfile'
import RecommendedUsers from '../components/TheRecommendedUsers/TheRecommendedUsers'

const postURL = 'http://4bd22d48.ngrok.io/api/v1/posts/readall/'

export default {
  components: {
    PostsView,
    PostModal,
    Post,
    Header,
    Profile,
    RecommendedUsers
  },
  data: {
  info: {
  },
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    }
  },
  created() {
    const self = this
    this.$axios.get(postURL,this.headers)
    console.log(res.data)
      .then(res => {
        self.posts = res.data
      })
  },
  data() {
    return {
      posts: []
    }
  }
}
</script>
