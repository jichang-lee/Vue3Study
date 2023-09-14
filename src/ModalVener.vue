<template>
    <div class="black-bg" v-if="modal == true">
      <div class="white-bg">
        <img :src="data[productDetail].image" style='width: 60%' >
        <h4>{{data[productDetail].title}}</h4>
        <p>{{data[productDetail].content}}</p>
        <!-- <input @input="month=$event.target.value"> -->
        <input v-model.number="month">
        <p> {{month}}개월 선택함 {{data[productDetail].price * month}} 원</p>
        <button @click="cancle">닫기</button>
        
      </div>
    </div>
</template>

<script>
export default {
    name:'modalInfo',
    data(){
      return{
        month : 1,
      }
    },
    props : {
      data : Array,
      productDetail : Number,
      modal : Boolean
    },
    methods : {
      cancle(){
        this.$emit('cancleBtn')
      }

    }
}
</script>

<style>

</style>