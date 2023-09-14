<template>

    <ModalInfo :data='data' :productDetail='productDetail' :modal='modal'
      @cancleBtn="modal = false"></ModalInfo>

  <DiscountInfo ></DiscountInfo>

  <div class="menu">
     <a v-for="(menus , i) in menuInfo" :key="i">{{ menus }}</a>
  </div>

  

 <CardInfo @openModal="modal=true ; productDetail=$event "
   :data='data[i]' v-for="(dataTalble,i) in data" :key="i" 
    >
   </CardInfo>

  
</template>

<script>
  import  data  from "./assets/oneRoom.js";
  import CardInfo from './CardInfo.vue';
  import DiscountInfo from "./Discount.vue";
  import ModalInfo from "./ModalVener.vue"

export default {
  name: 'App',
  data (){
    return {
      data : data,
      productDetail : 0,
      modal : false,
      menuInfo : ['Home', 'Shop','about'],
      reportNumber : [0,0,0]
    }
  },
  methods : {
    increase(){
      this.reportNumber ++
      
    }

  }, 
  
  components: {
    DiscountInfo, ModalInfo,
    CardInfo
  }
}
</script>

<style>

  body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 50%; background: white;
  border-radius: 8px;
  padding: 20px;
} 

  
  .room-img{
    width: 50%;
    margin-top: 40px;
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}

 .menu{
    background: darkslateblue;
    padding: 15px;
    border-radius: 5px;
 }

 .menu a{
  color: white;
  padding: 10px;
 }

</style>


 
