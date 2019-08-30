<template>
  <div id="app">
      // v-on:change でファイルの選択を検知する
      <input @change="selectedFile" type="file" name="file">
      <button @click="upload" type="submit">アップロード</button>
  </div>
</template>

<script>
export default {
  components: {
  },
        data: {
            uploadFile: null
        },
        methods: {
            selectedFile: function(e) {
                // 選択された File の情報を保存しておく
                e.preventDefault();
                let files = e.target.files;
                this.uploadFile = files[0];
            },
            upload: function() {
                // FormData を利用して File を POST する
                let formData = new FormData();
                formData.append('yourFileKey', this.uploadFile);
                let config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                };
                axios
                    .post('yourUploadUrl', formData, config)
                    .then(function(response) {
                        // response 処理
                    })
                    .catch(function(error) {
                        // error 処理
                    })
            }
        }
      }
</script>
