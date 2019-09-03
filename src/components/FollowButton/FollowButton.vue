<template>
  <v-btn @click="followToggle"
         width="120"
         :class="(isFollowing ? 'orange--text' : 'white--text') + ' ml-5'"
         :color="(isFollowing ? 'white' : 'orange')"
         :outlined="isFollowing"
         depressed
         rounded
  >{{ isFollowing ? 'follow' : 'following' }}</v-btn>
</template>

<script>
export default {
  data () {
    return {
      isFollowing: false,
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'
      }
    }
  },
  methods: {
    followToggle (event) {
      this.isFollowing = !this.isFollowing
      this.myServer.post(
        '/friendships/isfollowing/',
        {
          "UserId":7,
          "FollowId":5
        },
        { headers: this.headers }
      )
      .then(res => {
        console.log(res.data)
        if(res.data.following == true){
          this.myServer.post(
            '/friendships/destroy/',
            {
              "UserId":7,
              "FollowId":5
            },
            { headers: this.headers }
          )
          console.log(res.data + "ですとろーい!")
        }else{
          this.myServer.post(
            '/friendships/create/',
            {
              "UserId":7,
              "FollowId":5
            },
            { headers: this.headers }
          )
          console.log("くりえいと！")
        }
      })
    }
  }
}
</script>
