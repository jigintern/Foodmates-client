<template>
  <v-card class="d-flex pa-4">
    <v-avatar class="mr-4" size="32">
      <img :src="recommendedUser.icon_src">
    </v-avatar>
    <div class="d-flex flex-column">
      <span style="height:1.28em;font-size:14.4px;">{{ recommendedUser.user_name }}</span>
      <div class="d-flex">
        <span class="" style="font-size:8px;">{{ recommendedUser.match_times + " times match" }}</span>
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
    'recommendedUser'
  ],
  async created () {
    await this.getRecommendedUser()
  },

  methods: {
    async getRecommendedUser() {
      console.log("[RecommendedUser.vue] getRecommendedUser()")
      try {
        this.isUpdating = true
        const self = this
        await this.myServer.get(this.url + this.recommendedUserID, this.headers)
          .then(res => {
            console.log("response: " + JSON.stringify(res.data))
            self.posts = res.data
          })
        this.isUpdating = false
      } catch (e) {
        console.log(`update error: ${e}`)
      }
    }
  },
  data(){
    return {
      url: 'http://t2.intern.jigd.info/api/v1/users/',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      }
    }
  }
}
</script>