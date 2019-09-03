<template>
<div>
  <v-card class="pa-4" light width=360>
    <search-window />
    <div class="d-flex align-center">
      <input id="photo" type="file" v-on:change="uploadPhoto" style="display: none;"/>

      <v-btn icon class="mx-2 orange--text"><v-icon>mdi-message-text</v-icon></v-btn>
      <v-btn icon class="orange--text"><label for="photo"><v-icon>mdi-message-image</v-icon></label></v-btn>
      <v-btn color="orange" type="submit" @click="onSubmit">投稿</v-btn>
      <v-btn outlined class="mx-2 orange--text" @click="onCancel">キャンセル</v-btn>
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
      dishId: 0,
      headers: {
        'Content-Type':'application/x-www-form-urlencoded',
      }
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

    async onSubmit() {
      console.log("[ThePostModal.vue] onSubmit()")
      const content = {
        photoUrl: this.photoUrl,
        comment: this.comment,
        dishId: this.dishId
      }
      console.log("this.content" + content)
      try {
        /*
        await this.myServer.post(
          '/posts/create',
          {
            "user_id": 1,
            "dish_id": this.dishID,
            "comment": this.comment,
            "image_address": this.photoUrl
          },
        )
        */
        await this.myServer.post(
          '/posts/create/',
          {
            "user_id": 1,
            "dish_id": this.dishId,
            "comment": this.comment,
            "image_address": this.photoUrl
          },
          { headers: this.headers }
        )
      } catch (e) {
        console.log('post error')
      }
      this.$emit('on_submit')
      this.photoUrl = '',
      this.comment = '',
      this.dishId = 0
    },

    async onCancel() {
      console.log("[ThePostModal.vue] onCancel()")
      this.$emit('on_cancel')
    }
  }
}
</script>
