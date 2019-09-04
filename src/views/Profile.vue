<template>
  <div>
    <Profile :profile="profile" />
    <PostsView :posts="posts" />
    <!--<PostModal id="post-modal"/>-->
  </div>
</template>

<script>
import Profile from '../components/TheProfile/TheProfile'
import PostsView from '../components/ThePostsView/ThePostsView'

export default {
  components: {
    Profile,
    PostsView
  },

  async created () {
    await this.getProfile()
    await this.updatePosts()
  },

  methods: {
    async updatePosts() {
      console.log("[Profile.vue] updatePosts()")
      try {
        this.isUpdating = true
        const self = this
        await this.myServer.get('/posts/read/' + this.$route.params.user_id, this.headers)
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
      try {
        const self = this
        await this.myServer.get('/users/' + this.$route.params.user_id, this.headers)
          .then(res => {
            console.log("response: " + JSON.stringify(res.data))
            self.profile = res.data
          })
      } catch (e) {
        console.log(`get error: ${e}`)
      }
    }
  },

  data () {
    return {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      },
      profile: {},
      posts: [],
      isUpdating: false,
    }
  }
}
</script>
