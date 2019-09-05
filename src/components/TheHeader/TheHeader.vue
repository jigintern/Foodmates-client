<template>
  <v-app-bar color="primary" app>
    <v-row class="fill-height">
      <v-col>
        <v-toolbar-title>
          <the-header-logo />
        </v-toolbar-title>
      </v-col>
      <v-spacer />
      <v-col cols="5" align-self="center" justify="end">
        <the-header-search-window />
      </v-col>
      <v-col v-if="authUser" class="mr-2" align-self="center" justify="end">
        <the-header-user-card :user="authUser" />
      </v-col>
      <v-col v-if="authUser" class="mr-2" align-self="center" justify="end">
        <v-btn @click="logout">ログアウト</v-btn>
      </v-col>
      <v-col v-else class="mr-2" align-self="center" justify="end" cols="1">
        <v-btn block text to="/login">ログイン</v-btn>
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
  },

  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
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