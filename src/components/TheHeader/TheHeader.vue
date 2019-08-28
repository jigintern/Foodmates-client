<template>
  <v-toolbar color="#F5DD64" fixed>
    <v-icon>mdi-delete-circle</v-icon>
    <div @click="reset">
      <v-btn>ﾌﾛｽﾄｵﾊﾞｻﾝ</v-btn>
    </div>
    <v-toolbar-title>Foodmates</v-toolbar-title>
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
    reset: function () {
      this.$router.go({path: this.$router.currentRoute.path, force: true})
    }
  }
}
</script>
