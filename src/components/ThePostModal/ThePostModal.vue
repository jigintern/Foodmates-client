<template>
<div>
  <v-card class="pa-8" light>

    <v-col>
      <v-row>
        <v-col class="justify-center">
          <v-card v-if="selectedDish" class="d-flex align-center px-6 py-1 mb-2" @click="selectedDish=0" style="cursor:pointer;">
            <div class="suggest-info">
              <h2 class="body-1 suggest-info">{{ selectedDish.dish_name }}</h2>
              <h5 class="caption grey--text suggest-info">{{ selectedDish.store_name }}</h5>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols=12>
          <search-window ref="searchWindow" @select_dish="selectDish" />
        </v-col>
      </v-row>

      <v-col align-self="center" justify="end">
        <v-expansion-panels v-model="isAddDishWindowOpened" class="my-2">
          <v-expansion-panel :key="0">
            <v-expansion-panel-header class="px-2 py-0" expand-icon="mdi-plus">
              <h1 class="ml-2 body-1">料理を登録</h1>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-form @submit.prevent="onSubmit" class="d-flex flex-column align-center">
                <v-text-field
                  v-model="newDishRestaurantName"
                  label="店名"
                  @keyup.enter="onSubmitNewDish"
                  style="width:100%;"
                  class="pa-0 my-2"
                  hide-details
                />
                <v-text-field
                  v-model="newDishName"
                  label="料理名"
                  @keyup.enter="onSubmitNewDish"
                  style="width:100%;"
                  class="pa-0 my-2"
                  hide-details
                />
                <v-btn @click="onSubmitNewDish" color="primary">
                  登録
                </v-btn>
              </v-form>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>

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
import { mapGetters } from 'vuex'

const fileExtensions = ['jpg', 'jpeg', 'png', 'bmp', 'gif']
const fileMaxSize = 1e+7

export default {
  components: {
    SearchWindow,
  },

  computed: {
    ...mapGetters({
      authUser: 'authUser'
    })
  },

  data () {
    return {
      uploadedImageForView: null,
      postImage: null,
      comment: '',
      selectedDish: null,
      uploadFileName: '',
      newDishRestaurantName: '',
      newDishName: '',
      isAddDishWindowOpened: [],
      headers: {
        'Content-Type':'application/x-www-form-urlencoded',
      }
    }
  },

  methods: {
    async addPost () {
      if (!this.postImage) return

      console.log("addpost(): ", this.postImage)
      const self = this
      const params = new FormData()
      params.append('file', this.postImage)
      return await this.myServer.post(
        '/upload/picture/',
        params,
        { headers: { 'content-type': 'multipart/form-data' }}
      ).then(res => {
        const resObj = JSON.parse(res.data)
        console.log(resObj)
        self.uploadFileName = resObj.file_name
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
      const self = this
      await this.addPost()
        .then(() => {
          const content = {
            "user_id": this.authUser.id,
            "dish_id": self.selectedDish.id,
            "comment": self.comment,
            "image_address": self.uploadFileName
          }
          console.log('send content: ' + JSON.stringify(content))
          console.log('imageAddr: ' + self.uploadFileName)
          self.myServer.post(
            '/posts/create/',
            content,
            { headers: this.headers }
          )
        })

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
    },

    async onSubmitNewDish() {
      console.log("[ThePostModal.vue] onSubmitNewDish()")
      const self = this
      const content = {
        "store_name": this.newDishRestaurantName,
        "dish_name": this.newDishName
      }
      self.myServer.post(
        '/dishes/create/',
        content,
        { headers: this.headers }
      ).then(res => {
        this.selectedDish = res.data
        this.isAddDishWindowOpened = []
        this.newDishRestaurantName = ''
        this.newDishName = ''
        this.$refs.searchWindow.updateSuggests()
      }).catch((e) => {
        console.log(e)
      })
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