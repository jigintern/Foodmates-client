<template>
<div>
  <v-card class="pa-8" light>

    <v-col>
      <v-row>
        <v-card v-if="selectedDish" class="d-flex align-center px-6 py-1 mb-2" @click="selectedDish=0" style="cursor:pointer;">
          <div class="suggest-info">
            <h2 class="body-1 suggest-info">{{ selectedDish.dish_name }}</h2>
            <h5 class="caption grey--text suggest-info">{{ selectedDish.store_name }} , 茨城県, ひたちなか市</h5>
          </div>
        </v-card>
      </v-row>

      <v-row justify="center">
        <v-col cols=12>
          <search-window @select_dish="selectDish" />
        </v-col>
      </v-row>

      <input type="file" @change="onImageChange" style="display: none;" ref="image">

      <v-row justify="center">
        <img :src="uploadedImageForView" style="max-height:200px; max-width=200px;" class="pa-3" />
      </v-row>

      <v-row justify="center">
        <v-textarea v-model="comment" outlined label="コメント" />
      </v-row>

      <v-row justify="center">
        <v-col v-if="!uploadedImageForView" cols="2">
          <v-btn icon @click="pickImage">
            <v-icon color="orange">mdi-camera-enhance</v-icon>
          </v-btn>
        </v-col>
        <v-col v-else cols="2">
          <v-btn icon @click="clearImage">
            <v-icon color="orange">close</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="4" class="px-1">
          <v-btn outlined class="orange--text" @click="onCancel">キャンセル</v-btn>
        </v-col>
        <v-col cols="4" class="px-1">
          <v-btn color="orange" type="submit" @click="onSubmit" block>投稿</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-card>
</div>
</template>

<script>
import SearchWindow from './TheSearchWindow/TheSearchWindow'

const fileExtensions = ['jpg', 'jpeg', 'png', 'bmp', 'gif']
const fileMaxSize = 1e+7

export default {
  components: {
    SearchWindow,
  },
  data () {
    return {
      uploadedImageForView: null,
      postImage: null,
      comment: '',
      selectedDish: null,
      headers: {
        'Content-Type':'application/x-www-form-urlencoded',
      }
    }
  },

  methods: {
    async addPost () {
      console.log("addpost(): ", this.postImage)
      const params = new FormData()
      params.append('file', this.postImage)
      await this.myServer.post(
        '/upload/',
        params,
        { headers: { 'content-type': 'multipart/form-data' }}
      ).then(res => {
        console.log('画像を投稿しました: ' + res.data)
      }).catch(function (error) {
        console.log(error)
      })
    },

    pickImage () {
      this.$refs.image.click()
    },

    clearImage() {
      this.postImage = null
      this.uploadedImageForView = null
    },

    createImage (file) {
      let reader = new FileReader()
      reader.onload = (e) => {
        var uploadedImage = e.target.result
        this.uploadedImageForView = uploadedImage
      }
      reader.readAsDataURL(file)
    },

    onImageChange (e) {
      console.log("[ThePostModal.vue] onFileChange()")
      let files = e.target.files || e.dataTransfer.files

      // ファイルタイプのチェック
      var fileTypeCheck = false
      var myFileType = files[0].type
      for (var i = 0; i < fileExtensions.length; i++) {
        var fileExtension = fileExtensions[i]
        if (myFileType.indexOf(fileExtension) > -1) {
          fileTypeCheck = true
          break
        }
      }
      if (!fileTypeCheck) {
        console.log('アップロードできるファイルは画像のみです。')
        return
      }

      // ファイルサイズのチェック
      if (files[0].size > fileMaxSize) {
        console.log('ファイルサイズが大きすぎます。')
        return
      }

      this.postImage = files[0]
      this.createImage(files[0])
    },

    async onSubmit() {
      console.log("[ThePostModal.vue] onSubmit()")
      
      if (this.uploadedImageForView && this.postImage) {
        await this.addPost()
      }

      const content = {
        "UserId": 1,
        "DishId": this.selectDish.Id,
        "Comment": this.comment
      }
      console.log('send content: ' + content)
      try {
        await this.myServer.post(
          '/posts/create/',
          content,
          { headers: this.headers }
        )
      } catch (e) {
        console.log('post error')
      }
      this.$emit('on_submit')
      this.postImage = null
      this.uploadedImageForView = null
      this.comment = ''
      this.dishId = 0
    },

    async onCancel() {
      console.log("[ThePostModal.vue] onCancel()")
      this.$emit('on_cancel')
    },

    selectDish(dish) {
      this.selectedDish = dish
    }
  }
}
</script>

<style scoped>
.suggest-info {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.row {
  padding: 0;
}

.col {
  padding: 0;
}
</style>