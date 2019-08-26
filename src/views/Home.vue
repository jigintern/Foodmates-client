<template>
  <div>
    <div>
      <TheHeader/>
      <div v-for="n in 10">
        <PostsView/>
      </div>
    </div>
    <!--<PostModal id="post-modal"/>-->
  </div>
</template>



<script>
/* eslint-disable */
import TheHeader from '../components/TheHeader/TheHeader'
import PostsView from '../components/ThePostsView/ThePostsView'
import PostModal from '../components/ThePostModal/ThePostModal'

export default {

  name: 'App',
  components: {
    PostsView,
    PostModal,
    TheHeader
  }
}
</script>
