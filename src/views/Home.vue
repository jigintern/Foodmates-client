<template>
  <div>
    <v-btn color="#679aba" dark @click="updatePosts">
      更新
    </v-btn>
    <v-progress-circular v-if="isUpdating" indeterminate color="primary" />
    <profile />
    <recommended-users />
    <posts-view :posts="posts" />
    <v-btn icon class="mx-8 my-6 orange--text" style="position:fixed;bottom:0;right:0;" @click="isPostFormActivated = true">
      <v-icon size="64">mdi-pencil-circle</v-icon>
    </v-btn>
    <v-dialog
      v-model="isPostFormActivated"
      width="360"
      z-index="10"
    >
      <post-modal @post_submit="postSubmit" />
    </v-dialog>
  </div>
</template>

<script>
import Profile from '../components/TheProfile/TheProfile'
import PostsView from '../components/ThePostsView/ThePostsView'
import PostModal from '../components/ThePostModal/ThePostModal'
import RecommendedUsers from '../components/TheRecommendedUsers/TheRecommendedUsers'

export default {
  components: {
    Profile,
    PostsView,
    PostModal,
    RecommendedUsers
  },

  async created () {
    await this.updatePosts()
  },

  methods: {
    async postSubmit(content) {
      console.log("[Home.vue] postSubmit()")
      console.log("this.content" + content)
      try {
        await this.api.post(
          'posts',
          { 'content': content },
        ).then(async () => {
          await this.updatePosts()
        })
      } catch (e) {
        console.log('post error')
      } finally {
        this.isPostFormActivated = false
      }
    },

    async updatePosts() {
      console.log("[Home.vue] updatePosts()")
      console.log("myServer: " + this.myServer)
      try {
        this.isUpdating = true
        const newPosts = await this.myServer.get(
          'posts/readall/',
          { 
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept"
            },
            data: {}
          }
        ).then(res => res.data)
        console.log("response: " + newPosts)
        this.posts = newPosts
        this.isUpdating = false
      } catch (e) {
        console.log(`update error: ${e}`)
      }
    }
  },

  data () {
    return {
      posts: [],
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      },
      isPostFormActivated: false,
      isUpdating: false
    }
  }
}
</script>
