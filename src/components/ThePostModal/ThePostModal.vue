<template>
<v-overlay>
  <v-card class="pa-4" light width=360>
    <SearchWindow />
    <div v-if="photo_url!=''">
      <div class="px-2 mb-4" v-bind:style="{ backgroundImage: 'url(' + photo_url + ')' }" style="width:100%;height:80px;background-repeat:no-repeat;background-size:cover;background-position:center;" />
    </div>
    <div class="d-flex align-center">
      <input id="photo" type="file" v-on:change="upload_photo" style="display: none;"/>
      <v-btn icon class="mx-2 orange--text"><v-icon>mdi-message-text</v-icon></v-btn>
      <v-btn icon class="orange--text"><label for="photo"><v-icon>mdi-message-image</v-icon></label></v-btn>
        <v-btn class="ml-auto orange" @click="upload" type="submit">投稿</v-btn>
      <v-btn outlined class="mx-2 orange--text">キャンセル</v-btn>
    </div>
  </v-card>
</v-overlay>
</template>

<script>
import SearchWindow from './TheSearchWindow/TheSearchWindow'
import axios from 'axios'

const fileUploadUrl = 'http://'

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
    upload_photo: function(event){
      let files = event.target.files || event.dataTransfer.files;
      let file = files[0]
      let reader = new FileReader()
      reader.onload = (e) => {
        this.photo_url = e.target.result
      }
      reader.readAsDataURL(file)
    },
    upload: function(){
      let formData = new FormData();
      formData.append('yourFileKey', this.uploadFile);
      let config = {
        headers: {
        'content-type': 'multipart/form-data'
        }
      };
      axios
      .post('yourUploadUrl')
      .then(function(response) {})
      .catch(function(error) {})
    }
  }
}
</script>
