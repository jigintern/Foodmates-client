<template>
  <v-app-bar class="header" app color="primary">
    <v-toolbar-title>
      <the-header-logo />
    </v-toolbar-title>
    <v-toolbar-items class="ml-auto">
      <div class="mr-2">
        <v-btn block text to="/login">ログイン</v-btn>
      </div>
      <div class="mr-2">
        <v-btn block text to="/signup">サインアップ</v-btn>
      </div>
    </v-toolbar-items>
  </v-app-bar>
</template>

<style lang="stylus" scoped>
.header
  padding: 4px calc(4% - 16px)

@media (min-width: 1700px)
  .header
    padding: 4px calc(50% - 800px)
</style>

<script>
import TheHeaderSearchWindow from './TheHeaderSearchWindow/TheHeaderSearchWindow'
import TheHeaderLogo from './TheHeaderLogo/TheHeaderLogo'

export default {
  components: {
    TheHeaderLogo,
    TheHeaderSearchWindow
  }
}
</script>
