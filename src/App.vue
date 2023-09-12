<template>

    <div class="black-bg" v-if="modal == true">
      <div class="white-bg">
        <h4>상세페이지 제목</h4>
        <p>상세페이지 내용</p>
        <button @click="modal = false">닫기</button>
      </div>
    </div>



  <div class="menu">
     <a v-for="(menus , i) in menuInfo" :key="i">{{ menus }}</a>
  </div>



  <div v-for='(product,index) in data' :key='index'>
    <img :src='data[index].image' class="room-img">
    <h4>{{data[index].title }}</h4>
    <p> {{data[index].price}}원</p>
    
  </div>

  
</template>

<script>
  import  data  from "./assets/oneRoom.js";


export default {
  name: 'App',
  data (){
    return {
      data : data,
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


