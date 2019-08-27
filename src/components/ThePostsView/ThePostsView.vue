<template>
  <div>
    <v-card class="post" v-for="post in post_data">
      <header class="header" color="#FFD54F">
        <span class="dish_name">{{ post.dish_name }}</span>
        <v-spacer/>
        <div class="case">
          <small class="restaurant_name">{{ post.restaurant_name }}</small>
          <small class="restaurant_place">{{ post.restaurant_place }}</small>
        </div>
      </header>
      <div class="status">
        <!-- <div class="postauthor-icon" style="background-color:#F5DD64;width:32pt;height:32pt;border-radius:16pt">
          <img :src="post.user_icon_address" style="width:100%;height:100%;">
        </div> -->
        <v-avatar>
          <img :src="post.user_icon_address">
        </v-avatar>
        <div class="case">
          <div class="case">
            <small class="posttime">{{ post.posttime }}</small>
            <span class="user_name">{{ post.user_name }}</span>
          </div>
          <p class="content">
            {{ post.content }}
          </p>
        </div>
      </div>
      <div class="button-case">
          <v-icon class="button">mdi-bookmark</v-icon>
          <v-icon class="button">mdi-forum</v-icon>
          <v-icon class="button">mdi-more_vert</v-icon>
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
		"dish_name":             "塩ラーメン",
		"restaurant_name":       "らあめん極",
		"restaurant_place":      "東京都 新宿区",
		"user_name":             "watano",
		"user_icon_address":     "img/users/icon/1.jpg",
		"is_bookmark":           false,
		"content":               "さっぱりしていて美味しかった。",
		"content_image_address": "public/img/posts/210.jpg"
	},
	{
		"dish_name":             "特製やきそば",
		"restaurant_name":       "麺麺",
		"restaurant_place":      "北海道 札幌市",
		"user_name":             "でみ",
		"user_icon_address":     "img/users/icon/2.jpg",
		"is_bookmark":           true,
		"content":               "量が多くて満足。また行きたい。",
		"content_image_address": "public/img/posts/222.jpg",
	},
	{
		"dish_name":             "虹色ハンバーグ",
		"restaurant_name":       "謎の店",
		"restaurant_place":      "沖縄県 沖縄市",
		"user_name":             "はたはた",
		"user_icon_address":     "public/img/users/icon/6.jpg",
		"is_bookmark":           false,
		"content":               "宇宙の味がした。",
		"content_image_address": "public/img/posts/309.jpg",
	},
	{
		"dish_name":             "わんこCOMP",
		"restaurant_name":       "jig.jp",
		"restaurant_place":      "福井県 鯖江市",
		"user_name":             "箒コウモリ",
		"user_icon_address":     "public/img/users/icon/3.jpg",
		"is_bookmark":           true,
		"content":               "一生分の栄養を摂取したような気分になった",
		"content_image_address": "public/img/posts/111.jpg",
	}
      ]
    }
  }
}
</script>
