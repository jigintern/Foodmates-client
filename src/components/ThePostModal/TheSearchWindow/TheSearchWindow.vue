<template>
  <div>
   <v-form>
     <input v-model="keyword" placeholder="Search" class="grey lighten-4 px-4" style="width:100%;height:32px;font-size:16px;border-radius:16px;outline:0;">
  </v-form>
  <div class="my-2">
    <div v-for="suggest in suggests" class="d-flex align-center px-6 py-1">
      <span class="" style="font-size:14.4px;">{{ suggest.dish }}</span>
      <div class="d-flex flex-column ml-auto">
        <span class="" style="font-size:12px;">{{ suggest.restaurant }}</span>
        <span class="" style="font-size:8px;">{{ suggest.address }}</span>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      suggests: [
        {
          'dish': 'jigカレー',
          'restaurant': 'jig.jp',
          'address': '福井県 鯖江市'
        },
        {
          'dish': 'jigカレー COMP入り',
          'restaurant': 'jig.jp',
          'address': '福井県 鯖江市'
        },
      ]
    }
  }
}
</script>