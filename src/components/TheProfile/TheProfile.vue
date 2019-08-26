<template>
<div class="profile">
  <div style="background-color:#F5DD64;width:120pt;height:120pt;border-radius:60pt"></div>
  <div class="case">
    <h2 class="account-name">{{ account.name }}</h2>
    <small class="account-friendship">{{ account.following }} following {{ account.followed }} followed</small>
    <p class="account-comment">{{ account.comment }}</p>
    <div class="case">
      <small class="detail"><v-icon class="figure">mdi-cake</v-icon>{{ account.birthday }}</small>
      <small class="detail"><v-icon class="figure">mdi-location_city</v-icon>{{ account.address }}</small>
    </div>
  </div>
</div>
</template>

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

<script>
export default {
  name: 'thepostview',
  data: function () {
    return {
      account: 
        {
          'name': 'watαno',
          'following': 100,
          'followed': 200,
          'comment': 'NIT Ibaraki Collage 2I / Webアプリ制作、ゲーム制作等 / 好きなものを創って、好きな知識を仕入れて生きてます / jig.jp2019インターンer / 技術バイトでは画像処理をしています',
          'birthday': '2001-01-01',
          'address': '茨城県 ひたちなか市'
        }
    }
  }
}
</script>
