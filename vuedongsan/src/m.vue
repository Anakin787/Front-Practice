<template>
  <div class="black-bg" v-if="모달창상태 == true">
    <div class="white-bg">
      <img :src="원룸들[클릭번호].image" /><br />
      <h4>{{ 원룸들[클릭번호].title }}</h4>
      <input v-model.number="month">
      <!-- @input="month = $event.target.value
      데이터를 저장하는방법 : v-model을 사용한다.
      여러가지 input(textarea, select등)에 사용가능하다. -->
      <!-- 사용자가 input입력한것은 전부 문자자료형으로 입력. -->
      <p>{{ 원룸들[클릭번호].content }}</p>
      <p> {{month}}개월 선택함 : {{ 원룸들[클릭번호].price * month }}</p>
      <button @click="$emit('close')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "m",
  data(){
    return{
      month:1,//초기값에 따라 자료형이 달라진다.
    }
  },
  watch:{
    month(a){
      // 숫자인지아닌지 판별함수 isNaN()
      if(isNaN(a)==true){
        alert('숫자입력해라');
        this.month=1
      }
    }
  },
  props: {
    원룸들: Array,
    클릭번호: Number,
    모달창상태: Boolean,
  },
};
</script>

<style>
</style>