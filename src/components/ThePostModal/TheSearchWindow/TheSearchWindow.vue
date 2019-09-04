<template>
  <div>
    <v-text-field label="Dish name" v-model="keyword" single-line filled hide-details />
    <div
      v-for="(suggest, index) in suggests()"
      @click="selectDish(suggest)"
      :key="`suggest-${index}`"
      style="cursor: pointer;"
      class="my-2"
    >
      <h2 class="body-1 suggest-info">{{ suggest.dish_name }}</h2>
      <h5 class="caption grey--text suggest-info">{{ suggest.store_name }}</h5>
      <v-divider class="mt-2" color="grey" />
    </div>
  </div>
</template>

<script>
export default {
  created() {
    const self = this
    this.myServer.get('/dishes/readall/', this.headers)
      .then(res => {self.dishes = res.data})
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