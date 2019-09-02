<template>
  <v-app-bar color="primary" app>
    <v-flex xs3>
      <v-toolbar-title>
        <the-header-logo class="ml-4" />
      </v-toolbar-title>
    </v-flex>
    <v-spacer />
    <v-flex xs5>
      <v-toolbar-items>
        <the-header-search-window />
      </v-toolbar-items>
    </v-flex>
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
    return {}
  }
}
</script>
