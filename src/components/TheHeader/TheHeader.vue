<template>
  <v-toolbar color="#F5DD64" clipped-left app fixed>
    <v-icon>mdi-delete-circle</v-icon>
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
  }
}
</script>
