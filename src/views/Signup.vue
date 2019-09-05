<template>
  <div class="d-flex justify-center">
    <v-card class="mt-4 px-12 py-8" style="flex:0 1 640px;">
      <v-form @submit.prevent="onSubmit" class="d-flex flex-column align-center">

        <v-text-field
          v-model="loginName"
          label="ログイン名(ID)"
          @keyup.enter="onSubmit"
          style="width:100%;"
        />

        <v-text-field
          v-model="name"
          label="表示名"
          @keyup.enter="onSubmit"
          style="width:100%;"
        />

        <v-text-field
          v-model="country"
          label="国"
          @keyup.enter="onSubmit"
          style="width:100%;"
        />

        <v-text-field
          v-model="prefecture"
          label="県"
          @keyup.enter="onSubmit"
          style="width:100%;"
        />

        <v-textarea
          v-model="biography"
          label="自己紹介"
          style="width:100%;"
        />

        <date-picker
          style="width:100%;"
          @change_date="changeBirthday"
        />

      <input type="file" @change="onImageChange" style="display: none;" ref="image">
      <v-row justify="center">
        <img :src="uploadedImageForView" style="max-height:200px; max-width=200px;" class="pa-3" />
      </v-row>
      <v-row>
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
      </v-row>

        <v-text-field
          v-model="password"
          label="パスワード"
          :append-icon="password_show ? 'visibility' : 'visibility_off'"
          :type="password_show ? 'text' : 'password'"
          @click:append="password_show = !password_show"
          @keyup.enter="onSubmit"
          style="width:100%;"
        />

        <v-btn @click="onSubmit" color="primary" class="mt-8 mb-4">
          sign up
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import DatePicker from '../components/DatePicker/DatePicker'

const fileExtensions = ['jpg', 'jpeg', 'png', 'bmp', 'gif']
const fileMaxSize = 1e+7

export default {
  components: {
    DatePicker
  },

  data() {
    return {
      loginName: '',
      name: '',
      password: '',
      password_show: false,
      birth: null,
      country: '',
      prefecture: '',
      biography: '',

      uploadedImageForView: null,
      postImage: null,
      uploadFileName: ''
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
        '/upload/icon/',
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

    changeBirthday (date) {
      this.birth = date
    },

    async onSubmit() {
      console.log("[Signup.vue] onSubmit()")
      const self = this
      await this.addPost()
        .then(() => {
          const info = {
            'login_name': self.loginName,
            'name': self.name,
            'birth': new Date(self.birth),
            'country': self.country,
            'prefecture': self.prefecture,
            'biography': self.biography,
            'icon_address': self.uploadFileName
          }
          self.$store.dispatch('signup', info)
          this.$router.push('/')
        })
    }
  }
}
</script>

<style></style>
