<template>
  <div>
    <Profile class="pt-8 pb-12" />
    <PostsView :posts="posts" />

    <v-btn
      large
      icon
      fixed bottom right
      class="post-button mr-4"
      color="primary"
      style="background-color:white;"
      @click="isPostFormActivated = true"
    >
      <v-icon size="64">mdi-pencil-circle</v-icon>
    </v-btn>
    
    <Menu class="menu" @reflesh="updatePosts" />
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


<style lang="stylus" scoped>
.menu
  position: fixed
  top: 80px
  padding-left: 4%

@media (max-width: 360px)
  .menu
    position: fixed
    top: auto
    bottom: 0
    padding-left: 0
  
  .post-button
    margin-bottom: 56px
</style>

<script>
import Menu from '../components/TheMenu/TheMenu'
import Profile from '../components/TheProfile/TheProfile'
import PostsView from '../components/ThePostsView/ThePostsView'
import PostModal from '../components/ThePostModal/ThePostModal'

export default {
  components: {
    Menu,
    Profile,
    PostsView,
    PostModal
  },

  created () {
    this.getProfile()
    this.updatePosts()
  },

  methods: {
    async postSubmit() {
      console.log("[Home.vue] postSubmit()")
      this.isPostFormActivated = false
      await this.updatePosts()
      await this.getRecommendedUsers()
    },

    async updatePosts() {
      console.log("[Profile.vue] updatePosts()")
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
      console.log("[Profile.vue] postCancel()")
      this.isPostFormActivated = false
    },

    async getProfile() {
      console.log("[Profile.vue] getProfile()")
      await this.$store.dispatch('viewUserInfo', this.$route.params.user_id)
    }
  },

  data () {
    return {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      },
      id: 0,
      posts: [],
      recommendedUsers: [],
      isPostFormActivated: false,
      isUpdating: false
    }
  }
}
</script>
