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
      isFollowing: false
    }
  },
  methods: {
    followToggle (event) {
      this.isFollowing = !this.isFollowing
      alert("isFollowing: " + this.isFollowing)
    }
  }
}
</script>
