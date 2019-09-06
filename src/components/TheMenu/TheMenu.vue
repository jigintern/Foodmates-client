<template>
  <div class="d-flex wrapper">
    <v-btn v-if="!isUpdating" class="mr-8 mb-2" icon @click="reflesh">
      <v-icon>mdi-reload</v-icon>
    </v-btn>
    <v-progress-circular v-else indeterminate color="primary" />
    <v-btn class="mb-2 mr-8" icon>
      <v-icon @click="logout">mdi-logout-variant</v-icon>
    </v-btn>
    <the-user-icon :user="authUser" />
  </div>
</template>

<style lang="stylus" scoped>
.wrapper
  flex-direction: column
  
@media (max-width: 360px)
  .wrapper
    flex-direction: row
    justify-content: center
    width: 100%
    padding-top: 8px
    background: #fff
    filter: drop-shadow(0 -4px 4px #7f7f7f7f);
</style>

<script>
import TheUserIcon from './TheUserIcon/TheUserIcon'
import { mapGetters } from 'vuex'

export default {
  components: {
    TheUserIcon
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
  },
  methods: {
    reflesh () {
      this.isUpdating = true
      this.$emit('reflesh');
      this.isUpdating = false
    },
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>
