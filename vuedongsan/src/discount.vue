<template>
  <div class="discount">
    <h4>지금 결제하면 {{ n }}% 할인</h4>
  </div>
</template>

<script>
export default {
  name: "discount",
  data() {
    return {
      n: 20,
    };
  },
  mounted() {
      setInterval(() => {
        if(this.n>0){
            this.n--
        }
      }, 1000);
  },
};
</script>

<style>
</style>