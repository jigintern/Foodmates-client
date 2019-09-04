<template>
  <div>
    <v-btn @click="followToggle"
           width="120"
           :class="(isFollowing ? 'white--text' : 'orange--text') + ' ml-5'"
           :color="(isFollowing ? 'orange' : 'white')"
           :outlined="!isFollowing"
           depressed
           rounded
    >{{ isFollowing ? 'following' : 'follow' }}</v-btn>
</div>
</template>

<script>
export default {

  created () {
    this.myServer.post('/friendships/isfollowing/', {
      "UserId":7,
      "FollowId":5
    },{ headers: this.headers }
      ).then(res => {
        console.log(res.data)
        console.log(typeof(res.data))
        this.isFollowing = res.data.following
      })
  },

  data () {
    return {
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      isFollowing: true
    }
  },
  methods: {
    followToggle () {
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
          ).then(res => {
            console.log(res.data + "ですとろーい!")
            this.isFollowing = false
          })
        }else{
          this.myServer.post(
            '/friendships/create/',
            {
              "UserId":7,
              "FollowId":5
            },
            { headers: this.headers }
          ).then(() => {
            this.isFollowing = true
            console.log("くりえいと！")
          })
        }
      })
    }
  }
}
</script>
