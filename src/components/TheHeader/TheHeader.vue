<template>
  <v-app-bar color="primary" absolute>
    <the-header-logo />
    <v-spacer />
    <the-header-search-window />
  </v-app-bar>
</template>

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
      params: {
        text: ''
      }
    }
  },

  methods: {
    reload () {
      this.$router.go({
        path: this.$router.currentRoute.path,
        force: true
      })
    }
  }
}
</script>
