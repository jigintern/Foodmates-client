<template>
  <v-app-bar color="primary" app>
    <v-toolbar-title>
      <the-header-logo />
    </v-toolbar-title>
    <v-toolbar-items class="ml-auto" style="width:52%;">
      <the-header-search-window style="width:100%;" />
    </v-toolbar-items>
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
