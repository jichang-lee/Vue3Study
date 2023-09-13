<template>

    <div class="black-bg" v-if="modal == true">
      <div class="white-bg">
        <img :src="data[productDetail].image" style='width: 60%' >
        <h4>{{data[productDetail].title}}</h4>
        <p>{{data[productDetail].content}}</p>
        <button @click="modal = false">닫기</button>
      </div>
    </div>



  <div class="menu">
     <a v-for="(menus , i) in menuInfo" :key="i">{{ menus }}</a>
  </div>



  <div v-for='(product,index) in data' :key='index'>
    <img :src='product.image' class="room-img">
    <h4 @click="modal = true ; productDetail = index"   >
      {{product.title }}</h4>
    <p> {{product.price}}원</p>
    
  </div>

  
</template>

<script>
  import  data  from "./assets/oneRoom.js";


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


//모달창 내에 상세페이지 만들기