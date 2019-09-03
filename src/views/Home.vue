<template>
  <div>
    <v-btn color="#679aba" dark @click="updatePosts">
      更新
    </v-btn>
    <v-progress-circular v-if="isUpdating" indeterminate color="primary" />
    <profile />
    <recommended-users />
    <posts-view :posts="posts" />
    <v-btn icon class="mx-8 my-6 orange--text" style="position:fixed;bottom:0;right:0;background-color:white;" @click="isPostFormActivated = true">
      <v-icon size="64">mdi-pencil-circle</v-icon>
    </v-btn>
    <v-dialog
      v-model="isPostFormActivated"
      width="360"
      z-index="10"
    >
      <post-modal @on_submit="postSubmit" @on_cancel="postCancel" />
    </v-dialog>
  </div>
</template>

<script>
import PostsView from '../components/ThePostsView/ThePostsView'
import PostModal from '../components/ThePostModal/ThePostModal'
import RecommendedUsers from '../components/TheRecommendedUsers/TheRecommendedUsers'
import Profile from '../components/TheProfile/TheProfile'

export default {
  components: {
    PostsView,
    PostModal,
    RecommendedUsers,
    Profile
  },

  async created () {
    await this.updatePosts()
  },

  methods: {
    async postSubmit() {
      console.log("[Home.vue] postSubmit()")
      this.isPostFormActivated = false
      await this.updatePosts()
    },

    async updatePosts() {
      console.log("[Home.vue] updatePosts()")
      try {
        this.isUpdating = true
        const self = this
        await this.myServer.get('/posts/readall/', this.headers)
          .then(res => {
            console.log("response: " + JSON.stringify(res.data))
            self.posts = res.data
          })
        this.isUpdating = false
      } catch (e) {
        console.log(`update error: ${e}`)
      }
    },

    postCancel() {
      console.log("[Home.vue] postCancel()")
      this.isPostFormActivated = false
    }
  },

  data () {
    return {
      posts: [],
      isPostFormActivated: false,
      isUpdating: false,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      }
    }
  }
}
</script>
