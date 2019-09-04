<template>
  <v-app-bar class="header" app color="primary">
    <v-toolbar-title>
      <the-header-logo />
    </v-toolbar-title>
    <v-toolbar-items class="ml-auto">
      <the-header-search-window />
      <the-header-user-card :user="authUser" style="display:none;" />
    </v-toolbar-items>
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
import TheHeaderUserCard from './TheHeaderUserCard/TheHeaderUserCard'
import { mapGetters } from 'vuex'

export default {
  components: {
    TheHeaderLogo,
    TheHeaderSearchWindow,
    TheHeaderUserCard
  },

  computed: {
    ...mapGetters({
      authUser: 'authUser'
    })
  }
}
</script>

<style scoped>
.row {
  padding: 0;
}

.col {
  padding: 0;
}
</style>