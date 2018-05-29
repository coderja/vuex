import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count:0,
    age:12,
    num:100
}

const mutations = {
    jia(state){
        return state.age++
    },
    jian(state){
        return state.age--
    }
}

const getters = {
   num(){
       return state.num++
   }
}

const actions = {
    jiaplus(context){
        context.commit('jia')
    },
    jianplus({commit}){
        commit('jian')
    }
}
export default new Vuex.Store({
    state,
   mutations,
   getters,
   actions
})
