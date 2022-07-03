<template>
  <div class="restaurant--row">
    <h2 class="title">Nos Restaurants</h2>
    {{maVariable}}
    <div class="wrapper--card">
      <RestaurantCard v-for="(card, index) in 3" :key="index" />

    </div>

  </div>
</template>

<script>

import RestaurantCard from './RestaurantCard.vue'

export default {
  name: 'RestaurantRow',
  components: { RestaurantCard },
  props:{
    maVariable: String
  }
}
</script>

<style lang="scss">
  .restaurant--row {
    .title{
        font-size: 2rem;
        font-weight: bold;
    }
    .wrapper--card{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

</style>