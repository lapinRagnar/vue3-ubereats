<template>
  <div class="home">
    <RestaurantRow maVariable="la valeur de ma variables" />
  </div>
</template>

<script>
// bdd
import bdd from '../bdd'
import { onMounted } from 'vue';
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

        let dataRestaurant = []
        
        const makeDataReastaurant = () => {
            
            let three_restaurant = []

            for (const restaurant of bdd) {
                const new_restaurant = new Restaurant(restaurant.name, restaurant.note, restaurant.image, restaurant.drive_time)
                if (three_restaurant.length === 2){
                    three_restaurant.push(new_restaurant)
                    dataRestaurant.push(three_restaurant)
                    three_restaurant = []
                } else{
                    three_restaurant.push(new_restaurant)
                }
            }
            console.log(dataRestaurant);
        }

        // makeDataReastaurant();
        onMounted(makeDataReastaurant)
    }
}
</script>

<style>

</style>