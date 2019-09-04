<template>
  <img src="/img/logotype.png" @click="reload" class="header-logo mt-2">
</template>

<style lang="stylus" scoped>
.header-logo
  height: 64px
  cursor: pointer
</style>

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
