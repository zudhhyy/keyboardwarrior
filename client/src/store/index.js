import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const url = 'http://localhost:3000'
export default new Vuex.Store({
  state: {
    datas: [],
    rooms: [],
    id: null,
    username: localStorage.username
  },
  mutations: {
    fetchLeaderboards (state, payload) {
      state.datas = payload
    },
    fetchGames (state, payload) {
      state.rooms = payload
      state.id = payload[state.rooms.length - 1].id
    },
    addGames (state, payload) {
      state.rooms.push(payload)
      state.id = payload.id
      // localStorage.setItem('roomId', payload.id)
    }
  },
  actions: {
    // leaderboard API
    fetchLeaderboards (context) {
      axios({
        method: 'GET',
        url: `${url}/leaderboard`
      })
        .then((response) => {
          context.commit('fetchLeaderboards', response.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // Room API
    fetchGames (context) {
      axios({
        method: 'GET',
        url: `${url}/game/getGames`
      })
        .then((response) => {
          context.commit('fetchGames', response.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addGames (context) {
      axios({
        method: 'POST',
        url: `${url}/game/createGame`,
        data: {
          is_started: false,
          player_count: 1
        }
      })
        .then((response) => {
          context.commit('addGames', response.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
