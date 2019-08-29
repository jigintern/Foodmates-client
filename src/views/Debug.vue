<template>
  <div>
    <div>
      <TheHeader/>
      <TheProfile />
      <RecommendPerson />
      <v-container grid-list-xl>
        <v-layout row>
          <v-flex justify-center xs12 md6 lg4 v-for="post in posts" :key="post.dish_name">
            <Post :post="post"/>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <!--<PostModal id="post-modal"/>-->
  </div>
</template>

<script>
/* eslint-disable */
import TheHeader from '../components/TheHeader/TheHeader'
import Post from '../components/ThePostsView/Post/Post'
import PostsView from '../components/ThePostsView/ThePostsView'
import PostModal from '../components/ThePostModal/ThePostModal'
import TheProfile from '../components/TheProfile/TheProfile'
import RecommendPerson from '../components/RecommendPerson'

const postURL = 'http://32bca9f3.ngrok.io/api/v1/posts/readall/'

export default {
  components: {
    PostsView,
    PostModal,
    Post,
    TheHeader,
    TheProfile,
    RecommendPerson
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
