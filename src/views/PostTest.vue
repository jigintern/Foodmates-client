<template>
  <div>
    <div>
      <TheHeader/>
      <v-container grid-list-xl>
        <v-layout row>
          <v-flex justify-center xs12 md6 lg4 v-for="element in posts" :key="element.dish_name">
            <PostsView :post="element"/>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <PostModal id="post-modal"/>
  </div>
</template>

<script>
/* eslint-disable */
import TheHeader from '../components/TheHeader/TheHeader'
import PostsView from '../components/ThePostsView/ThePostsView'
import PostModal from '../components/ThePostModal/ThePostModal'

const postURL = "http://localhost:8080/api/v1/posts/"

export default {
  components: {
    PostsView,
    PostModal,
    TheHeader
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
      .then(res => {
        console.log(res.data)
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
