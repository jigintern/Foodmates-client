<template>
  <div>
    <div>
      <TheHeader />
      <Profile />
    </div>
    <!--<PostModal id="post-modal"/>-->
  </div>
</template>



<script>
/* eslint-disable */
import TheHeader from '../components/TheHeader/TheHeader'
import PostsView from '../components/ThePostsView/ThePostsView'
import PostModal from '../components/ThePostModal/ThePostModal'
import Profile from '../components/TheProfile/TheProfile'

export default {

  name: 'App',
  components: {
    PostsView,
    PostModal,
    TheHeader,
    Profile,
  }
}
</script>
