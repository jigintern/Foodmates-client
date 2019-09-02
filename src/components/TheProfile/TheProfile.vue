<template>
<div class="d-flex flex-wrap justify-center px-4 py-8 white">
  <router-link to="/Profile">
    <div style="background-color:#F5DD64;width:128px;height:128px;border-radius:64px"></div>
  </router-link>
  <div class="d-flex flex-column ml-8" style="flex:0 1 640px;">
    <div class="d-flex align-center pb-4">
      <div class="d-flex flex-column">
        <span style="height:1.28em;font-size:32px;">{{ account.name }}</span>
        <span class="" style="font-size:8px;">{{ account.following }} following {{ account.followed }} followed</span>
      </div>
      <v-btn class="orange--text ml-8" outlined small rounded>follow</v-btn>
    </div>
    <p class="" style="font-size:12px;">{{ account.comment }}</p>
    <div class="d-flex align-center" style="font-size:8px;">
      <v-icon class="figure mr-2" small>mdi-cake</v-icon><span class="mr-8">{{ account.birthday }}</span>
      <v-icon class="figure mr-2" small>mdi-home-city</v-icon><span class="mr-8">{{ account.address }}</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  created () {
    const self = this
    this.myServer.get('/users/1', this.headers)
      .then(res => {
        console.log(res.data)
        self.account = res.data
      })
  },

  data () {
    return {
      account: [],
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      }
    }
  }
}
</script>

<style lang="stylus">
.profile
  display flex
  justify-content center
  padding 24pt 0
  height 200pt
  background-color #fff
  font-size 10pt

  .case
    margin-left 64pt
    width 480pt

    .account-name
      font-size 32pt
      height 1.2em
      font-weight 400

      .button
        margin-left 24pt
        font-size 10pt

    .account-friendship
      font-size 6.4pt

    .account-comment
      margin-top 12pt
      margin-bottom 24pt

    .case
      display flex
      margin 0

      .detail
        margin-right 24pt

        .figure
          font-size 8pt
          margin-right 4pt

</style>
