<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <Profile />
      <PostsView />
      <!-- <PostModal id="post-modal" /> -->
    </v-content>
  </v-app>
</template>

<script>
import Profile from './components/TheProfile/TheProfile'
import PostsView from './components/ThePostsView/ThePostsView'
import PostModal from './components/ThePostModal/ThePostModal'
export default {
  name: 'App',
  components: {
    Profile,
    PostsView,
    PostModal
  },
  data: () => ({
    //
  })
}
</script>