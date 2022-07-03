<template>
  <div class="home">
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

<style>

</style>