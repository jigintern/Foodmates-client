<template>
  <v-app>
    <the-header />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader'

export default {
  components: {
    TheHeader
  },
  data () {
    return {}
  }
}
</script>

<style lang="stylus">
body
  min-width: 320px
</style>