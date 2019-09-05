<template>
<div>
    <v-btn icon color="#679aba" @click="reflesh">
      <v-icon>mdi-reload</v-icon>
    </v-btn>
    <v-progress-circular v-if="isUpdating" indeterminate color="primary" />
  <the-user-icon :user="authUser" />
  </div>
</template>

<style lang="stylus" scoped>
.header
  padding: 4px 4%

@media (min-width: 1700px)
  .header
    padding: 4px calc(50% - 800px)
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
      this.$emit('reflesh');
    }
  }
}
</script>
