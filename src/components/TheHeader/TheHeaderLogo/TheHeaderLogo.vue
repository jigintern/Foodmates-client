<template>
  <v-img :src="'/img/logotype.png'" @click="reload" style="height:64px;width:120px;cursor:pointer;" />
</template>

<script>
export default {
  methods: {
    reload () {
      this.$router.push('/')
    }
  }
}
</script>

