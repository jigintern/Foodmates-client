<template>
  <div>
    <v-btn outlined rounded="" flat class="py-1 px-4">
      <v-row>
        <v-col class="shrink" align-self="center">
          <v-avater size="32">
            <v-img :src="`https://t2.intern.jigd.info/${user.icon_address}`" />
          </v-avater>
        </v-col>
        <v-col align-self="center">
          <span class="title">{{ user.user_name }}</span>
          <span class="caption ml-3">@{{ user.id }}</span>
        </v-col>
      </v-row>
    </v-btn>
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

<style scoped>
.col {
  padding: 0;
  margin: 0;
}

.row {
  padding: 0;
  margin: 0;
}
</style>