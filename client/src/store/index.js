import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const url = 'http://localhost:3000'
export default new Vuex.Store({
  state: {
    datas: []
  },
  mutations: {
    fetchLeaderboards (state, payload) {
      state.datas = payload
    }
  },
  actions: {
    fetchLeaderboards (context) {
      axios({
        method: 'GET',
        url: `${url}/leaderboard`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then((response) => {
          context.commit('fetchLeaderboards', response.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
