<template>
  <div>
    <v-avater small>
      <v-img :src="`https://t2.intern.jigd.info/${user.icon_address}`" />
    </v-avater>
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
