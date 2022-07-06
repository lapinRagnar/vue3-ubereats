<template>
  <div class="home">
    <div class="header">
        <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg" alt="">
        <div class="wrapper--input">
            <input v-model="user_search_restaurant" type="text" placeholder="de quoi avez-vous envie?">
            <div class="search">
                <div v-for="(restaurant, i) in search_restaurant" :key="i" class="container--restaurant--search">
                    <div class="wrapper--img">
                        <img :src="restaurant.image" alt="">
                    </div>
                    <p>{{restaurant.name}}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="banier"></div>
    <RestaurantRow v-for="(data, index) in dataRestaurant" :key="index" :three_restaurant="data" />
  </div>
</template>

<script>
// bdd
import bdd from '../bdd'
import { onMounted, ref, watch } from 'vue';
// components
import RestaurantRow from '@/components/RestaurantRow.vue';

export default {
    name: "HomePage",
    components: { RestaurantRow },
    setup() {
        class Restaurant {
            constructor(name, note, image, drive_time) { 
                this.name = name;
                this.note = note;
                this.image = image;
                this.drive_time = drive_time;
            }

        }

        let dataRestaurant = ref([])
        let all_restaurant = []
        
        const makeDataReastaurant = () => {
            
            let three_restaurant = []

            for (const restaurant of bdd) {

                const new_restaurant = new Restaurant(restaurant.name, restaurant.note, restaurant.image, restaurant.drive_time)
                all_restaurant.push(new_restaurant)
                
                if (three_restaurant.length === 2){
                    three_restaurant.push(new_restaurant)
                    dataRestaurant.value.push(three_restaurant)
                    three_restaurant = []
                } else{
                    three_restaurant.push(new_restaurant)
                }
            }
        }

        // user search restaurants

        let user_search_restaurant = ref('')
        let search_restaurant = ref([])

        watch(user_search_restaurant, (new_value) => {
            let regex =RegExp(new_value.toLowerCase())
            let new_search_restaurant = all_restaurant.filter(restaurant => regex.test(restaurant.name.toLowerCase()))
            new_value == 0 ? search_restaurant.value = [] : search_restaurant.value = new_search_restaurant
       })

        // makeDataReastaurant();
        onMounted(makeDataReastaurant)

        return {
            dataRestaurant, user_search_restaurant, search_restaurant
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

        .wrapper--input{
          position: relative;

          input{
          background: #f6f6f6;
          border: none;
          width: 400px;
          height: 60px;
          border-radius: 5px;
          outline: none;
          padding-left: 20px;
          }

          .search{
            position: absolute;
            top: 100%;
            width: 100%;
            background-color: #fff;
            border-radius: 5px;
            border: 1px solid rgba(172, 255, 47, 0.775);

            .container--restaurant--search{
              display: flex;
              align-items: center;
              padding: 10px;

              &:hover{
                background-color: #f6f6f6;
              }

              .wrapper--img{
                height: 40px;
                width: 40px;
                margin-right: 30px;
                border-radius: 50%;
                overflow: hidden;

                img{
                  height: 100%;
                  width: auto;
                }
              }
              
            }
          }
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