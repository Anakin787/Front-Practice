<template>
  <div >
    <img class="room-img" :src="원룸.image" />
    <h4 @click="$emit('openModal',원룸.id)">{{ 원룸.title }}</h4>
    <p>{{ 원룸.price }}</p> 
    <!-- 재정의한 변수이름으로 써야한다~! -->
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    원룸: Array, //'원룸들'이란 이름을 '원룸'이라고 재정의
  },
};
</script>

<style>
</style>