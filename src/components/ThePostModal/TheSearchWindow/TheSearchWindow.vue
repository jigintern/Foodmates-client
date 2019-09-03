<template>
  <div>
    <v-text-field v-model="keyword" outlined rounded single-line hide-details flat append-icon="search"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keyword: '',
      suggests: []
    }
  }
}
</script>
