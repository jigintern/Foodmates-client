<template>
  <div>
    <v-card v-if="select_dish!=0" class="d-flex align-center px-6 py-1 mb-2" @click="select_dish=0" style="cursor:pointer;">
      <span class="" style="width:160px;font-size:14.4px;">{{ select_dish.dish_name }}</span>
      <div class="d-flex flex-column ml-auto">
        <span class="" style="width:80px;font-size:12px;">{{ select_dish.store_name }}</span>
        <span class="" style="width:80px;font-size:8px;">茨城県 ひたちなか市</span>
      </div>
    </v-card>
    <v-text-field v-model="keyword" outlined rounded single-line hide-details flat append-icon="search"/>
    <div v-if="select_dish==0" class="mt-2 mb-4">
      <div
        v-for="(suggest, index) in suggests()"
        class="d-flex align-center px-6 py-1"
        @click="select_dish=suggest"
        style="cursor:pointer;"
        :key="`suggest-${index}`"
      >
        <span class="" style="width:160px;font-size:14.4px;">{{ suggest.dish_name }}</span>
        <div class="d-flex flex-column ml-auto">
          <span class="" style="width:80px;font-size:12px;">{{ suggest.store_name }}</span>
          <span class="" style="width:80px;font-size:8px;">茨城県 ひたちなか市</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const dishURL = 'http://6ed9c264.ngrok.io/api/v1/dishes/readall/'
export default {
  data: {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    }
  },

  created() {
    this.$axios.get(dishURL,this.headers)
      .then(res => {
        this.dishes = res.data
      })
  },

  data() {
    return {
      select_dish: 0,
      dishes: [],
      keyword: ''
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
