<template>
  <div class="menu">
     <a v-for="(menus , i) in menuInfo" :key="i">{{ menus }}</a>
  </div>



  <div>
    <h4>{{product[0]}}</h4>
    <p> 60 만원</p>
    <button @click="reportNumber[0]++">허위매물신고</button>
    <span>신고수 : {{reportNumber[0]}}</span>
  </div>
  <div>
    <h4>{{product[1]}}</h4>
    <p> 70 만원</p>
    <button @click="reportNumber[1]++">허위매물신고</button>
    <span>신고수 : {{reportNumber[1]}}</span>
  </div>
  <div>
    <h4>{{product[2]}}</h4>
    <p> 70 만원</p>
    <button @click="reportNumber[2]++">허위매물신고</button>
    <span>신고수 : {{reportNumber[2]}}</span>
  </div>
</template>

<script>


export default {
  name: 'App',
  data (){
    return {
      product : ['역삼동 원룸' , '천호동 원룸' , '마포구 원룸'],
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


// v-if 와 모달창 만들기 (Vue에서 동적인 UI 만드는 법)