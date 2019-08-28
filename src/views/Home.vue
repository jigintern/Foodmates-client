<template>
  <div>
    <Header/>
	<PostsView :posts="posts" />
	<!--<PostModal id="post-modal"/>-->
  </div>
</template>

<script>
/* eslint-disable */
import Header from '../components/TheHeader/TheHeader'
import PostsView from '../components/ThePostsView/ThePostsView'
import PostModal from '../components/ThePostModal/ThePostModal'

export default {
  name: 'App',
  components: {
    PostsView,
    PostModal,
    Header
  },
  data: function() {
    return {
     posts: [
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
         "content":               "量が多くて満足取したような気分になったwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww。また行きたい。",
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
         "content":               "一生分の栄養を摂取したような気分になったwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
         "content_image_address": "public/img/posts/111.jpg",
       }
     ]
   }
  }
}
</script>
