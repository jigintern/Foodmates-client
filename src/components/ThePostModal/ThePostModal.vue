<template>
<div>
  <v-card class="pa-4" light width=360>
    <search-window />
    <div v-if="photoUrl!=''">
      <div class="px-2 mb-4" v-bind:style="{ backgroundImage: 'url(' + photoUrl + ')' }" style="width:100%;height:80px;background-repeat:no-repeat;background-size:cover;background-position:center;" />
    </div>
    <div class="d-flex align-center">
      <input id="photo" type="file" v-on:change="uploadPhoto" style="display: none;"/>
      <v-btn icon class="mx-2 orange--text"><v-icon>mdi-message-text</v-icon></v-btn>
      <v-btn icon class="orange--text"><label for="photo"><v-icon>mdi-message-image</v-icon></label></v-btn>
      <v-btn class="ml-auto orange" @click="onSubmit" type="submit">投稿</v-btn>
      <v-btn outlined class="mx-2 orange--text" @click="overlay=false">キャンセル</v-btn>
    </div>
  </v-card>
</div>
</template>

<script>
import SearchWindow from './TheSearchWindow/TheSearchWindow'

export default {
  components: {
    SearchWindow,
  },
  data () {
    return {
      photoUrl: '',
      comment: '',
      dishId: 0
    }
  },
  methods: {
    uploadPhoto (event) {
      console.log("[ThePostModal.vue] updatePhoto()")
      console.log("this.photoUrl" + this.photoUrl)
      let files = event.target.files || event.dataTransfer.files
      let file = files[0]
      let reader = new FileReader()
      reader.onload = (e) => {
        this.photoUrl = e.target.result
      }
      reader.readAsDataURL(file)
    },

    onSubmit() {
      console.log("[ThePostModal.vue] onSubmit()")
      const content = {
        photoUrl: this.photoUrl,
        comment: this.comment,
        dishId: this.dishId
      }
      console.log("this.content: " + content)
      this.$emit('on_submit', content)
      this.photoUrl = '',
      this.comment = '',
      this.dishId = 0
    }
  }
}
</script>
