<template>
  <div class="header-logo">
    <v-icon>mdi-circle</v-icon>
    <span @click="reload" style="cursor:pointer;">Foodmates</span>
  </div>
</template>

<script>
export default {
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

<style lang="stylus" scoped>

</style>