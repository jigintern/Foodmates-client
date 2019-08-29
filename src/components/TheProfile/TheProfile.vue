<template>
<div class="d-flex flex-wrap justify-center px-4 py-8 white">
  <div style="background-color:#F5DD64;width:128px;height:128px;border-radius:64px"></div>
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
