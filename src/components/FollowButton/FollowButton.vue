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
      default: () => {}
    }
  },

  computed: {
    ...mapGetters({
      authUser: 'authUser',
      viewingUser: 'viewingUser'
    })
  },

  watch: {
    user: {
      handler: 'readFollowInfo',
      immediate: true
    }
  },

  data () {
    return {
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      isFollowing: true,
      userAssociation: {
        "UserId": 0,
        "FollowId": 0
      }
    }
  },

  methods: {
    async readFollowInfo(user) {
      console.log("fb: ", user)
      this.userAssociation = {
        "UserId": this.authUser.id,
        "FollowId": user.id
      }
      await this.myServer.post(
        '/friendships/isfollowing/',
        this.userAssociation,
        { headers: this.headers }
      ).then(res => {
        console.log("res_data: ", res.data)
        console.log("ass: ", this.userAssociation)
        this.isFollowing = res.data.following
      })
    },

    followToggle () {
      console.log("fb: ", this.user.id)
      this.userAssociation = {
        "UserId": this.authUser.id,
        "FollowId": this.user.id
      }
      this.isFollowing = !this.isFollowing
      this.myServer.post(
        '/friendships/isfollowing/',
        this.userAssociation,
        { headers: this.headers }
      )
      .then(res => {
        console.log("res_data: ", res.data)
        console.log("ass: ", this.userAssociation)
        this.myServer.post(
          '/friendships/' + (res.data.following ? 'destroy/' : 'create/'),
          this.userAssociation,
          { headers: this.headers }
        ).then(() => {
          this.isFollowing = !res.data.following
        })
      })
    }
  }
}
</script>
