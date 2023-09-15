<template>
  <div class="discount">
    <h4>지금 결제하면 {{ minus }}% 할인</h4>
  </div>
</template>

<script>
export default {
    name: 'DiscountInfo',
    data(){
      return{
        minusData : 30

      }
    },

  methods :{
    minus(){
      this.minusData = this.$emit('priceMinus');
    }
  }

}

</script>

<style>

</style>