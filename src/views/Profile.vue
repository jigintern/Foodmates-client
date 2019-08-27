<template>
  <div>
    <div>
      <TheHeader />
      <Profile />
      <v-container grid-list-xl>
        <v-layout row>
          <v-flex justify-center xs12 md6 lg4 v-for="element in posts" :key="element.dish_name">
            <PostsView :post="element"/>
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
import Profile from '../components/TheProfile/TheProfile'

export default {

  name: 'App',
  components: {
    PostsView,
    PostModal,
    TheHeader,
    Profile,
  },
  data: function() {
    
  }
}
</script>
