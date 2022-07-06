<template>
  <div class="home">
    <div class="header">
        <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg" alt="">
        <input type="text" placeholder="de quoi avez-vous envie?">
    </div>
    <div class="banier"></div>
    <RestaurantRow v-for="(data, index) in dataRestaurant" :key="index" :three_restaurant="data" />
  </div>
</template>

<script>
// bdd
import bdd from '../bdd'
import { onMounted, ref } from 'vue';
// components
import RestaurantRow from '@/components/RestaurantRow.vue';
export default {
    name: "HomePage",
    components: { RestaurantRow },
    setup() {
        console.log(bdd);
        class Restaurant {
            constructor(name, note, image, drive_time) { 
                this.name = name;
                this.note = note;
                this.image = image;
                this.drive_time = drive_time;
            }

        }

        let dataRestaurant = ref([])
        
        const makeDataReastaurant = () => {
            
            let three_restaurant = []

            for (const restaurant of bdd) {
                const new_restaurant = new Restaurant(restaurant.name, restaurant.note, restaurant.image, restaurant.drive_time)
                if (three_restaurant.length === 2){
                    three_restaurant.push(new_restaurant)
                    dataRestaurant.value.push(three_restaurant)
                    three_restaurant = []
                } else{
                    three_restaurant.push(new_restaurant)
                }
            }
            console.log(dataRestaurant);
        }

        // makeDataReastaurant();
        onMounted(makeDataReastaurant)

        return {
            dataRestaurant,
        }
    }
}
</script>

<style lang="scss">
  .home{
    .header{
      height: 120px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
        img{
          width: 200px;
        }
        input{
          background: #f6f6f6;
          border: none;
          width: 400px;
          height: 60px;
          border-radius: 5px;
          outline: none;
          padding-left: 20px;
        }
    }
    .banier{
      height: 200px;
      width: 100%;
      background-image: url("https://www.ubereats.com/restaurant/_static/7b308f7cbbf8e335ceda0447a8bd7c63.png");
      background-size: cover;
      background-position: center center;
    }
  }
</style>