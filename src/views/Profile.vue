<template>
  <div>
    <Profile />
    <PostsView :posts="posts" />
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

  created () {
    this.getProfile()
    this.updatePosts()
  },

  methods: {
    updatePosts() {
      console.log("[Profile.vue] updatePosts()")
      try {
        this.isUpdating = true
        const self = this
        this.myServer.get('/posts/read/' + this.$route.params.user_id, this.headers)
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

    getProfile() {
      console.log("[Profile.vue] getProfile()")
      this.$store.dispatch('viewUserInfo', this.$route.params.user_id)
    }
  },

  data () {
    return {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      },
      user: {},
      posts: [],
      isUpdating: false,
    }
  }
}
</script>
