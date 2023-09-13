<template>
   <div v-for='(product,index) in data' :key='index'>
    <img :src='product.image' class="room-img">
    <h4 >
      {{product.title }}</h4>
    <p> {{product.price}}원</p>
  </div>
</template>

<script>
export default {
    name:'cardInfo',
    props : {
        data : Array
    }

}
</script>

<style>

</style>

@click="modal = true ; productDetail = index"   
