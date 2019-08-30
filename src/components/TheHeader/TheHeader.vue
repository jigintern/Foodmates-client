<template>
  <header class="d-flex align-center orange px-8 py-2">
    <v-icon>mdi-circle</v-icon>
    <span @click="reload" style="cursor:pointer;">Foodmates</span>
    <TheHeaderSearchWindow class="ml-auto mt-2" />
  </header>
</template>

<script>
/* eslint-disable */
import TheHeaderSearchWindow from './TheHeaderSearchWindow/TheHeaderSearchWindow'

export default {
  components:{
    TheHeaderSearchWindow
  },
  data: function () {
    return {
      params: {
        text: ''
      }
    }
  },
  methods: {
    reload: function () {
      this.$router.go({path: this.$router.currentRoute.path, force: true})
    }
  }
}
</script>
