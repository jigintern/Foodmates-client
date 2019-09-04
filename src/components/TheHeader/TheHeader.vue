<template>
  <v-app-bar color="primary" app>
    <v-row>
      <v-col>
        <v-toolbar-title>
          <the-header-logo />
        </v-toolbar-title>
      </v-col>
      <v-spacer />
      <v-col cols="5" align-self="center" justify="end">
        <the-header-search-window />
      </v-col>
      <v-col class="mr-2" align-self="center" justify="end">
        <the-header-user-card :user="authUser" />
      </v-col>
    </v-row>
  </v-app-bar>
</template>

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
  },

  data () {
    return {
      
    }
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