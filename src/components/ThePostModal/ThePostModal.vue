<template>
  <v-card class="pa-4">
    <header class="d-flex mx-n4 mt-n4 py-2 px-4 primary white--text" color="primary" style="cursor:pointer;">
      <div v-if="selectedDish" class="d-flex flex-column" >
        <span class="suggest-info" style="font-size:16px">{{ selectedDish.dish_name }}</span>
        <span class="suggest-info" style="font-size:8px">{{ selectedDish.store_name }}</span>
      </div>
      <v-icon v-if="selectedDish" class="ml-auto" color="white" @click="selectedDish=0">mdi-close</v-icon>
    </header>

    <search-window v-if="!addDishWindowOpenedFlag&&!selectedDish" @select_dish="selectDish" />
    <input type="file" @change="onImageChange" style="display: none;" ref="image">

      <div align-self="center" justify="end">
      <small v-if="!addDishWindowOpenedFlag&&!selectedDish" class="primary--text" style="cursor:pointer;" @click="addDishWindowOpenedFlag=true">または料理を新規登録</small>

        <v-card v-if="addDishWindowOpenedFlag" v-model="isAddDishWindowOpened" class="my-2 pa-4">
            <header class="d-flex px-2 py-2 primary mt-n4 mx-n4 white--text">
              <span style="font-size:8px">料理登録</span>
              <v-icon small color="white" class="ml-auto" @click="addDishWindowOpenedFlag=false">mdi-close</v-icon>
            </header>
          <div :key="0">
            <div>
              <v-form @submit.prevent="onSubmit" class="d-flex flex-column align-center">
                <v-text-field
                  v-model="newDishRestaurantName"
                  placeholder="店名"
                  @keyup.enter="onSubmitNewDish"
                  style="width:100%;"
                  class="pa-0 my-2"
                  hide-details
                />
                <v-text-field
                  v-model="newDishName"
                  placeholder="料理名"
                  @keyup.enter="onSubmitNewDish"
                  style="width:100%;"
                  class="pa-0 my-2"
                  hide-details
                />
                <v-btn @click="onSubmitNewDish" color="primary">
                  登録
                </v-btn>
              </v-form>
            </div>
          </div>
        </v-card>
      </div>

    <v-textarea v-model="comment" label="Comment" auto-grow />
    <img :src="uploadedImageForView" style="max-height:160px; width: 100%; object-fit: cover;"  @click="clearImage" class="pa-3" />
    <div class="d-flex">
      <v-btn v-if="!uploadedImageForView" icon @click="pickImage">
        <v-icon color="primary">mdi-image-plus</v-icon>
      </v-btn>
      <v-btn class="ml-auto primary" depressed type="submit" @click="onSubmit">投稿</v-btn>
      <v-btn outlined class="ml-2 primary--text" @click="onCancel">キャンセル</v-btn>
    </div>
  </v-card>
</template>

<style scoped>
.suggest-info {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>

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
      addDishWindowOpenedFlag: false,
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
      this.addDishWindowOpenedFlag = false
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
        this.addDishWindowOpenedFlag = false
      }).catch((e) => {
        console.log(e)
      })
    }
  }
}
</script>
