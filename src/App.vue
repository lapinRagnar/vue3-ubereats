<template>
  <div id="app">
    <RestaurantRow/>
  </div>
</template>

<script>

  import RestaurantRow from './components/RestaurantRow.vue'

  export default {
    
    name: 'App',
    components: {
      RestaurantRow
    }
  }
</script>

<style>
  @import url('./style/reset.css');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,700;0,900;1,100;1,400;1,900&display=swap');
  #app {
    font-family: Roboto, sans-serif;
    padding: 20px;
  }
</style>
