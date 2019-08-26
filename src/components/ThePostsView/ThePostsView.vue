<template>
<div>
  <v-card class="post" v-for="post in post_data">
    <header class="header">
      <span class="foodname">{{ post.foodname }}</span>
      <div class="case">
        <small class="restrant-name">{{ post.restrant_name }}</small>
        <small class="restrant-address">{{ post.restrant_address }}</small>
      </div>
    </header>
    <div class="status">
      <div class="postauthor-icon" style="background-color:#F5DD64;width:32pt;height:32pt;border-radius:16pt"></div>
      <div class="case">
        <div class="case">
          <small class="posttime">{{ post.posttime }}</small>
          <span class="postauthor">{{ post.postauthor }}</span>
        </div>
        <p class="postbody">
          {{ post.postbody }}
        </p>
      </div>
    </div>
    <div class="button-case">
        <v-icon class="button">mdi-bookmark</v-icon>
        <v-icon class="button">mdi-forum</v-icon>
        <v-icon class="button">mdi-menu</v-icon>
    </div>
  </v-card>
</div>
</template>

<style lang="stylus" scoped>
.post
  margin 12pt
  width 240pt
  font-size 10pt

  .header
    display flex
    align-items center
    padding 2pt 8pt
    height 28pt
    background-color #F5DD64
    color #fff

    .foodname
      flex 1 0
      padding-left 4.8pt
      font-size 12pt
      border-left solid 2pt #fff

    .case
      display flex
      flex-direction column
      
      .restrant-name
        font-size 8pt

      .restrant-address
        font-size 6.4pt

  .status
    display flex
    margin 8pt 12pt

    .postauthor-icon
      margin-right 12pt

    .case
      flex 1 1

      .case
        display flex
        flex-direction column
        justify-content center
        height 32pt
      
        .posttime
          font-size 6.4pt

        .postauthor
          font-size 12pt

      .postbody
        margin-top 8pt
        margin-bottom 4pt
        padding-right 8pt
        text-align justify

  .button-case
    display flex
    justify-content flex-end
    padding 12pt 8pt

    .button
      margin 0 8pt
</style>

<script>
export default {
  name: 'thepostview',
  data: function () {
    return {
      post_data: [
        {
          'foodname': 'カレーライス（中辛）',
          'restrant_name': 'レストランDEMI',
          'restrant_address': '京都府舞鶴市',
          'posttime': '2019-01-01',
          'postauthor': '箒コウモリ',
          'postbody': '味ついてておいしいです',
        },
      ]
    }
  }
}
</script>
