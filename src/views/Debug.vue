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
    <PostModal />
  </div>
</template>

<script>
import Header from '../components/TheHeader/TheHeader'
import Post from '../components/ThePostsView/Post/Post'
import PostModal from '../components/ThePostModal/ThePostModal'
import Profile from '../components/TheProfile/TheProfile'
import RecommendedUsers from '../components/TheRecommendedUsers/TheRecommendedUsers'

const postURL = 'http://86ab2198.ngrok.io/api/v1/posts/readall/'

export default {
  components: {
    PostModal,
    Post,
    Header,
    Profile,
    RecommendedUsers
  },

  created () {
    const self = this
    this.$axios.get(postURL, this.headers)
      .then(res => {
        console.log(res.data)
        self.posts = res.data
      })
  },

  data () {
    return {
      posts: [],
      info: {},
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      }
    }
  }
}
</script>
