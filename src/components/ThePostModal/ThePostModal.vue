<template>
<v-overlay>
  <v-card class="postform" light>
    <div>
      <v-autocomplete
        :items="components"
        filled
        rounded
    ></v-autocomplete>
    </div>
    <div class="case">
      <div class="option-buttoncase">
        <v-icon class="button orange--text">mdi-menu</v-icon>
        <v-icon class="button orange--text">mdi-menu</v-icon>
      </div>
      <div class="buttoncase">
        <v-btn class="button orange">投稿</v-btn>
        <v-btn outlined class="button orange--text">キャンセル</v-btn>
      </div>
    </div>
  </v-card>
</v-overlay>
</template>

<script>
import SearchWindow from '../TheHeader/TheHeaderSearchWindow/TheHeaderSearchWindow'
export default {
  name: 'thepostview',
  components: {
    SearchWindow
  },
  data () {
    return {
      components: ['Autocompletes', 'Comboboxes', 'Forms', 'Inputs', 'Overflow Buttons', 'Selects', 'Selection Controls', 'Sliders', 'Textareas', 'Text Fields']
    }
  }
}
</script>

<style lang="stylus" scoped>
.postform
  padding 8pt 12pt
  width 240pt
  background-color #fff
  color #707070

  .case
    display flex
    align-items center

    .option-buttoncase
      flex-grow 1

      .button
        margin 0 4pt

    .buttoncase
      .button
        margin 0 4pt
</style>
