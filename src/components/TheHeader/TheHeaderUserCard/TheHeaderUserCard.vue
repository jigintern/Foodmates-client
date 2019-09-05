<template>
  <div>
    <v-btn v-if="user" outlined rounded="" class="px-4">
      <v-row>
        <v-col class="shrink" align-self="center">
          <v-avatar size="32">
            <v-img :src="`https://t2.intern.jigd.info/${user.icon_address}`" />
          </v-avatar>
        </v-col>
        <v-col align-self="center">
          <span class="title">{{ user.name }}</span>
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