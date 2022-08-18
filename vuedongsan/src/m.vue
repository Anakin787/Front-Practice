<template>
  <div class="black-bg" v-if="모달창상태 == true">
    <div class="white-bg">
      <img :src="원룸들[클릭번호].image" /><br />
      <h4>{{ 원룸들[클릭번호].title }}</h4>
      <p>{{ 원룸들[클릭번호].content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "m",
  props: {
    원룸들: Array,
    클릭번호: Number,
    모달창상태: Boolean,
  },
};
</script>

<style>
</style>