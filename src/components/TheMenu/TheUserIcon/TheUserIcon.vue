<template>
  <div>
    <v-avatar size="32">
      <v-img :src="`https://t2.intern.jigd.info/${user.icon_address}`" />
    </v-avatar>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: false,
      default: () => {}
    }
  }
}

</script>
