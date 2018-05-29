<template>
  <div id="app">
    
    <img src="./assets/logo.png">
    <h1>{{ msg}}</h1>
    <h3>state:</h3>
    <div>{{$store.state.count}}</div>
    <h3>mapState</h3>
    <div>{{count}}</div>
    <h3>mutations  --  mapMutations</h3>
    <div>{{$store.state.age}}岁</div>
    <button @click='jia'>+</button>
    <button @click='$store.commit("jian")'>-</button>
    <h3>getters  --  mapGetters </h3>
    <div>{{num}} -- {{num}}</div>
    <h3>mapActions</h3>
    <div></div>
    <button @click="jiaplus">+jiaplus</button>
    <button @click="jianplus">-jianplus</button>
  </div>
</template>

<script>

//vuex提供的辅助函数
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
      count(){
        return this.$store.state.count
      },
      // ...mapState([
      //   'count'
      // ]),
      // ...mapState([
      //   'num'
      // ]),
      num(){
        return this.$store.getters.num
      }
  },
  methods:{
    ...mapMutations([
      'jia'
    ]),
    ...mapActions([
      'jiaplus'
    ]),
    ...mapActions({
      jianplus:'jianplus'
    })
  },
  mounted(){
    if(app.hasChildNodes()){
      loading.style.display="none"
    }
  }
  
 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
