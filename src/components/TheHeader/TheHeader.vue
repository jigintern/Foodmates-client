<template>
  <header class="d-flex align-center px-8 py-2 primary">
    <v-icon>mdi-circle</v-icon>
    <span @click="reload" style="cursor:pointer;">Foodmates</span>
    <TheHeaderSearchWindow class="ml-auto mt-2" />
  </header>
</template>

<script>
import TheHeaderSearchWindow from './TheHeaderSearchWindow/TheHeaderSearchWindow'

export default {
  components: {
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
