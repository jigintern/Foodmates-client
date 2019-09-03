<template>
  <div class="header-logo">
      <img src="/img/logotype.png" @click="reload" style="height:32px;cursor:pointer;">
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