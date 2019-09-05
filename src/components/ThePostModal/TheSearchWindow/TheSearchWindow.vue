<template>
  <div>
    <v-text-field label="Dish name" v-model="keyword" single-line hide-details />
    <div
      v-for="(suggest, index) in suggests()"
      @click="selectDish(suggest)"
      :key="`suggest-${index}`"
      style="cursor: pointer;"
      class="d-flex flex-column mx-2 my-2"
    >
      <span class="suggest-info" style="font-size:14.4px;">{{ suggest.dish_name }}</span>
      <span class="suggest-info" style="font-size:8px;">{{ suggest.store_name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  async created() {
    await this.updateSuggests()
  },

  data() {
    return {
      dishes: [],
      keyword: '',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }
  },

  methods: {
    async updateSuggests () {
      const self = this
      this.myServer.get('/dishes/readall/', this.headers)
        .then(res => {self.dishes = res.data})
    },

    suggests () {
      let keys = this.keyword.split(' ');
      if(keys[0]=='') return []
      let suggests = this.dishes.filter(dish => {
        let f = true
        for(let k of keys){
          if(!(dish.dish_name.indexOf(k)>=0) && !(dish.store_name.indexOf(k)>=0)) f = false
        }
        return f
      })
      return suggests
    },

    selectDish (dish) {
      console.log("TSW: select_dish: ", dish)
      this.$emit('select_dish', dish)
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
</style>