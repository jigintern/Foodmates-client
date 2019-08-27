<template>
  <div>
    <div>
      <TheHeader/>
      <v-container>
        <v-layout row>
            <v-flex md4>
              <div v-for="n in 10">
                <PostsView/>
              </div>
            </v-flex>
        </v-layout>
</v-container>
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
