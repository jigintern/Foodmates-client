<template>
  <div>
    <v-btn
      @click="followToggle"
      width="120"
      :class="(isFollowing ? 'white--text' : 'orange--text') + ' ml-5'"
      :color="(isFollowing ? 'orange' : 'white')"
      :outlined="!isFollowing"
      depressed
      rounded
    >
      {{ isFollowing ? 'following' : 'follow' }}
    </v-btn>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    user: {
      type: Object,
      required: true,
      default: () => {
        return { id: 0 }
      }
    }
  },

  computed: {
    ...mapGetters({
      authUser: 'authUser'
    })
  },

  created () {
    this.myServer.post(
      '/friendships/isfollowing/',
      this.userAssociation,
      { headers: this.headers }
    ).then(res => {
      console.log(res.data)
      console.log(typeof(res.data))
      this.isFollowing = res.data.following
    })
  },

  data () {
    return {
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      isFollowing: true,
      userAssociation: {
        "UserId": this.authUser.id,
        "FollowId": this.user.id
      }
    }
  },

  methods: {
    followToggle () {
      this.isFollowing = !this.isFollowing
      this.myServer.post(
        '/friendships/isfollowing/',
        this.userAssociation,
        { headers: this.headers }
      )
      .then(res => {
        console.log(res.data)
        if (res.data.following == true){
          this.myServer.post(
            '/friendships/destroy/',
            this.userAssociation,
            { headers: this.headers }
          ).then(() => {
            this.isFollowing = false
          })
        } else {
          this.myServer.post(
            '/friendships/create/',
            this.userAssociation,
            { headers: this.headers }
          ).then(() => {
            this.isFollowing = true
          })
        }
      })
    }
  }
}
</script>
