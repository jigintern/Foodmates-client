<template>
  <div>
    <div>
      <TheHeader/>
      <Profile />
      <v-container grid-list-xl>
        <v-layout row>
          <v-flex justify-center xs12 md6 lg4 v-for="post in posts" :key="`post-${post.dish_name}`">
            <Post :post="post"/>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <!--<PostModal id="post-modal"/>-->
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader/TheHeader'
import Post from '../components/ThePostsView/Post/Post'
import Profile from '../components/TheProfile/TheProfile'

const postURL = 'http://86ab2198.ngrok.io/api/v1/posts/readall/'

export default {
  components: {
    Post,
    TheHeader,
    Profile
  },

  data () {
    return {
      info: {},
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      },
      posts: []
    }
  },

  created () {
    const self = this
    this.$axios.get(postURL, this.headers)
      .then(res => {
        console.log(res.data)
        self.posts = res.data
      })
  }
}
</script>
