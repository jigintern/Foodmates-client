<template>
  <div>
    <v-btn color="#679aba" dark @click="updatePosts">
      更新
    </v-btn>
    <v-progress-circular v-if="isUpdating" indeterminate color="primary" />
    <recommended-users :recommendedUsers="recommendedUsers" />
    <posts-view :posts="posts" />
    <v-btn
      :elevation="24"
      icon
      bottom
      right
      fixed
      color="orange"
      class="mr-8 mb-6"
      style="background-color:white;"
      @click="isPostFormActivated = true"
    >
      <v-icon size="64">mdi-pencil-circle</v-icon>
    </v-btn>
    <v-dialog
      scrollable
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
import { mapGetters } from 'vuex'

export default {
  components: {
    PostsView,
    PostModal,
    RecommendedUsers
  },

  computed: {
    ...mapGetters({
      authUser: 'authUser'
    })
  },

  async created () {
    if (!this.authUser) {
      this.$router.push('/login')
    }
    this.id = this.authUser.id
    await this.updatePosts()
    await this.getRecommendedUsers()
  },

  methods: {
    async postSubmit() {
      console.log("[Home.vue] postSubmit()")
      this.isPostFormActivated = false
      await this.updatePosts()
      await this.getRecommendedUsers()
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
    },

    async getRecommendedUsers() {
      console.log("[Home.vue] getReccommendedUsers()")
      try {
        const self = this
        await this.myServer.get('/posts/suggest/' + self.authUser.id, this.headers)
          .then(res => {
            console.log("response: " + JSON.stringify(res.data))
            self.recommendedUsers = res.data
          })
      } catch (e) {
        console.log(`get error: ${e}`)
      }
    }
  },

  data () {
    return {
      id: 0,
      posts: [],
      recommendedUsers: [],
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
