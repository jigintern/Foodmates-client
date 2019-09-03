<template>
  <div>
    <v-card v-if="select_dish!=0" class="d-flex align-center px-6 py-1 mb-2" @click="select_dish=0" style="cursor:pointer;">
      <div class="suggest-info">
        <h2 class="body-1 suggest-info">{{ select_dish.dish_name }}</h2>
        <h5 class="caption grey--text suggest-info">{{ select_dish.store_name }} , 茨城県, ひたちなか市</h5>
      </div>
    </v-card>
    <v-text-field v-model="keyword" outlined rounded single-line hide-details flat append-icon="search"/>
    <div v-if="select_dish==0" class="mt-2 mb-4">
      <div
        v-for="(suggest, index) in suggests()"
        @click="select_dish=suggest"
        :key="`suggest-${index}`"
        style="cursor: pointer;"
        class="my-2"
      >
        <h2 class="body-1 suggest-info">{{ suggest.dish_name }}</h2>
        <h5 class="caption grey--text suggest-info">{{ suggest.store_name }} , 茨城県, ひたちなか市</h5>
        <v-divider class="mt-2" color="grey" />
      </div>
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
      select_dish: 0,
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