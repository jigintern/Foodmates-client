<template>
  <v-app-bar class="header" app color="primary">
    <v-toolbar-title>
      <the-header-logo />
    </v-toolbar-title>
    <v-toolbar-items class="ml-auto">
      <the-header-search-window v-if="authUser" />
      
      <div v-else class="d-flex align-center">
        <v-btn text to="/login" class="mr-2">log in</v-btn>
        <v-btn text to="/signup">sign up</v-btn>
      </div>
    </v-toolbar-items>
  </v-app-bar>
</template>

<style lang="stylus" scoped>
.header
  padding: 4px calc(4% - 16px)

@media (min-width: 1700px)
  .header
    padding: 4px calc(50% - 800px)
</style>

<script>
import TheHeaderSearchWindow from './TheHeaderSearchWindow/TheHeaderSearchWindow'
import TheHeaderLogo from './TheHeaderLogo/TheHeaderLogo'
import { mapGetters } from 'vuex'

export default {
  components: {
    TheHeaderLogo,
    TheHeaderSearchWindow
  },
  computed: {
    ...mapGetters({
      authUser: 'authUser'
    })
  },
  data () {
    return {
      isPostFormActivated: false,
      isUpdating: false
    }
  }
}
</script>
