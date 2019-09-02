<template>
  <div style="width:100%;">
    <Profile style="width:100%;" />
    <RecommendedUsers />
    <PostsView :posts="posts" />
    <PostModal />
  </div>
</template>

<style scoped>
 .item{
   width:calc(33.3% - 32px);
 }
@media (max-width: 640pt){
    .item{
      width:96%;
    }
}
</style>

<script>
import Header from '../components/TheHeader/TheHeader'
import Post from '../components/ThePostsView/Post/Post'
import PostModal from '../components/ThePostModal/ThePostModal'
import Profile from '../components/TheProfile/TheProfile'
import RecommendedUsers from '../components/TheRecommendedUsers/TheRecommendedUsers'
import PostsView from '../components/ThePostsView/ThePostsView'

const postURL = 'http://86ab2198.ngrok.io/api/v1/posts/readall/'

export default {
  components: {
    PostModal,
    Header,
    Profile,
    RecommendedUsers,
    PostsView
  },
/*
  created () {
    const self = this
    this.$axios.get(postURL, this.headers)
      .then(res => {
        console.log(res.data)
        self.posts = res.data
      })
  },*/

  data () {
    return {
      posts: [
        {
          'comment': 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        },
        {
          'comment': 'aaaa',
        },
        {
          'comment': 'aaaa',
        },
        {
          'comment': 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        },
        {
          'comment': 'aaaa',
        },
        {
          'comment': 'aaaa',
        },
        {
          'comment': 'aaaa',
        },
        {
          'comment': 'aaaa',
        },
      ],
      info: {},
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      }
    }
  }
}
</script>