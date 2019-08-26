<template>
<v-overlay>
  <v-card class="postform">
    <SearchWindow />
    <div class="case">
      <div class="option-buttoncase">
        <v-icon class="button orange--text">mdi-menu</v-icon>
        <v-icon class="button orange--text">mdi-menu</v-icon>
      </div>
      <div class="buttoncase">
        <v-btn class="button orange">投稿</v-btn>
        <v-btn outlined class="button orange--text">キャンセル</v-btn>
      </div>
    </div>
  </v-card>
</v-overlay>
</template>

<style lang="stylus" scoped>
.postform
  padding 8pt 12pt
  width 240pt
  background-color #fff
  color #707070

  .case
    display flex
    align-items center

    .option-buttoncase
      flex-grow 1
      
      .button
        margin 0 4pt

    .buttoncase
      .button
        margin 0 4pt
</style>

<script>
import SearchWindow from '../TheHeader/TheHeaderSearchWindow/TheHeaderSearchWindow'
export default {
  name: 'thepostview',
  components: {
    SearchWindow,
  },
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
