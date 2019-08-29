<template>
<div class="profile">
  <div style="background-color:#F5DD64;width:120pt;height:120pt;border-radius:60pt"></div>
  <div class="case">
    <h2 class="user_id">{{ account.updated_at }}<v-btn outlined class="button orange--text" rounded>follow</v-btn></h2>
    <small class="account-friendship">{{ account.following }} following {{ account.followed }} followed</small>
    <p class="account-comment">{{ account.comment }}</p>
    <div class="case">
      <small class="detail"><v-icon class="figure">mdi-cake</v-icon>{{ account.birthday }}</small>
      <small class="detail"><v-icon class="figure">mdi-message-processing</v-icon>{{ account.address }}</small>
    </div>
  </div>
</div>
</template>

<script>
const ProfileURL = 'http://919dd9a2.ngrok.io/api/v1/users/1'

export default {
  components: {
  },
  data: {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    }
  },
  created () {
    const self = this
    this.$axios.get(ProfileURL, this.headers)
      .then(res => {
        console.log(res.data)
        self.account = res.data
      })
  },
  data () {
    return {
      account: []
    }
  }
}
</script>

<style lang="stylus" scoped>
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
