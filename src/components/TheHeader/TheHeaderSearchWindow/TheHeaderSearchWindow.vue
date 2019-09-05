<template>
  <v-form class="search-window d-flex align-center">
    <input placeholder="Search" class="search-bar white primary--text px-4">
    <v-btn icon class="ml-2" color="white"><v-icon>search</v-icon></v-btn>
  </v-form>
</template>

<style lang="stylus" scoped>
.search-bar
  width: 480px
  height: 32px
  font-size: 16px
  border-radius: 16px
  outline: 0

.search-bar::placeholder
  color: #ff66007f

@media (max-width: 920px)
  .search-bar
    display: none
</style>
