<template>
  <v-card class="card d-flex pa-4">
    <v-avatar class="mr-4" size="32">
      <img :src="`https://t2.intern.jigd.info/${userData.icon_address}`">
    </v-avatar>
    <div class="d-flex flex-column">
      <span style="height:1.28em;font-size:14.4px;">{{ userData.name }}</span>
      <div class="d-flex">
        <span class="" style="font-size:8px;">{{ recommendedUser.times + " times match" }}</span>
        <follow-button :user="userData" />
      </div>
    </div>
  </v-card>
</template>

<style lang="stylus" scoped>
.card
  min-width: 280px
</style>

<script>
import FollowButton from '../../FollowButton/FollowButton'

export default {
  components: {
    FollowButton
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
        await this.myServer.get('/users/read/id/' + this.recommendedUser.user_id, this.headers)
          .then(res => {
            console.log("response: " + JSON.stringify(res.data))
            self.userData = res.data
          })
        this.isUpdating = false
      } catch (e) {
        console.log(`update error: ${e}`)
      }
    }
  },
  data(){
    return {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      },
      userData: null
    }
  }
}
</script>