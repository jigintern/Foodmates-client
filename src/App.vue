<template>
  <v-app>
    <the-header />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<style lang="stylus">
body
  min-width: 320px
</style>

<script>
import TheHeader from '@/components/TheHeader/TheHeader'
export default {
  components: {
    TheHeader
  }
}
</script>