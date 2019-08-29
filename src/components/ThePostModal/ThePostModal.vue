<template>
<v-overlay>
  <v-card class="pa-4" light width=360>
    <SearchWindow />
    <div class="">
      <img class="px-2 pb-4" :src="photo_url" height=80>
    </div>
    <div class="d-flex align-center">
      <input id="photo" type="file" v-on:change="upload" style="display: none;"/>
      <v-btn icon class="mx-2 orange--text"><v-icon>mdi-message-text</v-icon></v-btn>
      <v-btn icon class="orange--text"><label for="photo"><v-icon>mdi-message-image</v-icon></label></v-btn>
      <v-btn class="ml-auto orange">投稿</v-btn>
      <v-btn outlined class="mx-2 orange--text">キャンセル</v-btn>
    </div>
  </v-card>
</v-overlay>
</template>

<script>
import SearchWindow from './TheSearchWindow/TheSearchWindow'
export default {
  components: {
    SearchWindow
  },
  data () {
    return {
      photo_url: ''
    }
  },
  methods: {
    upload(event){
      let files = event.target.files || event.dataTransfer.files;
      let file = files[0]
      let reader = new FileReader()
      reader.onload = (e) => {
        this.photo_url = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }
}
</script>