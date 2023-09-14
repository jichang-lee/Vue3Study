<template>
    <div class="black-bg" v-if="modal == true">
      <div class="white-bg">
        <img :src="data[productDetail].image" style='width: 60%' >
        <h4>{{data[productDetail].title}}</h4>
        <p>{{data[productDetail].content}}</p>
        <p>{{data[productDetail].price}} 원</p>
        <button @click="cancle">닫기</button>
        <!-- <button @click="modal = false">닫기</button> -->
      </div>
    </div>
</template>

<script>
export default {
    name:'modalInfo',
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