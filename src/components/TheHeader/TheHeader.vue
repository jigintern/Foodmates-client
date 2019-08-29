<template>
  <v-toolbar class="orange">
    <v-icon>mdi-circle</v-icon>
    <v-toolbar-title @click="reload" style="cursor:pointer;">Foodmates</v-toolbar-title>
    <v-spacer/>
    <TheHeaderSearchWindow/>
  </v-toolbar>
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
