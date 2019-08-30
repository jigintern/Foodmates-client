<template>
  <v-card class="d-flex pa-4">
    <v-avatar class="mr-4" size="32">
      <img :src="recommended_user.icon_src">
    </v-avatar>
    <div class="d-flex flex-column">
      <span style="height:1.28em;font-size:14.4px;">{{ recommended_user.username }}</span>
      <div class="d-flex">
        <span class="" style="font-size:8px;">{{ recommended_user.match_times + " times match" }}</span>
        <v-btn class="orange--text ml-8" outlined small rounded>follow</v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  components: {
  },
  props: [
    'recommended_user'
  ]
}
</script>