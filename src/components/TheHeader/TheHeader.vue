<template>
  <v-app-bar class="header" app color="primary">
    <v-toolbar-title>
      <the-header-logo />
    </v-toolbar-title>
    <v-toolbar-items class="ml-auto">
      <the-header-search-window />
    </v-toolbar-items>
<!--
      <v-col v-if="authUser" class="mr-2" align-self="center" justify="end">
        <the-header-user-card :user="authUser" />
      </v-col>
      <v-col v-if="authUser" class="mr-2" align-self="center" justify="end">
        <v-btn block text @click="logout">ログアウト</v-btn>
      </v-col>
      <v-col v-if="!authUser" class="mr-2" align-self="center" justify="end" cols="1">
        <v-btn block text to="/login">ログイン</v-btn>
      </v-col>
      <v-col v-if="!authUser" class="mr-2" align-self="center" justify="end" cols="1">
        <v-btn block text to="/signup">サインアップ</v-btn>
      </v-col>
    </v-row>
    -->
  </v-app-bar>
</template>

<style lang="stylus" scoped>
.header
  padding: 4px 4%

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
