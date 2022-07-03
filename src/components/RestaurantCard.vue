<template>
  <div class="restaurant--card">
    <div class="restaurant--image"></div>      
    <div class="restaurant--information">
        <div class="top">
            <p class="name">{{info_restaurant.name}}</p>
            <p class="note"><span>{{info_restaurant.note}}</span></p>
        </div>
        <div class="time">{{info_restaurant.drive_time}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestaurantCard',
  props: {
    info_restaurant: Object
  }
}
</script>

<style lang="scss" >
.restaurant--card {
  width: 32%;
  height: 30vh;

  p{
    margin: 0px;
  }

  .restaurant--image{
    background-image: url("https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/dd109bb1f7572eed.png");
    height: 70%;
    background-size: cover;
    background-position: center;
  }

  .restaurant--information{
    .top{
      margin: 10px 0px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .note{
        background-color: #eee;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
      }
    }
    .time{
        font-size: 0.9rem;
    }

  }
}
</style>