<template>
  <v-app-bar class="header" app color="primary">
    <v-toolbar-title>
      <the-header-logo />
    </v-toolbar-title>
    <v-toolbar-items class="ml-auto">
      <the-header-search-window />
    </v-toolbar-items>
    <v-btn @click="logout">ログアウト</v-btn>
  </v-app-bar>
</template>

<style lang="stylus" scoped>
.header
  padding: 4px 4%

@media (min-width: 1700px)
  .header
    padding: 4px calc(50% - 800px)
</style>

<script>
import TheHeaderSearchWindow from './TheHeaderSearchWindow/TheHeaderSearchWindow'
import TheHeaderLogo from './TheHeaderLogo/TheHeaderLogo'

export default {
  components: {
    TheHeaderLogo,
    TheHeaderSearchWindow
  },

  data () {
    return {
    }
  },

  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>
