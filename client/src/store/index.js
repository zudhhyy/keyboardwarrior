import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const url = 'http://localhost:3000'
export default new Vuex.Store({
  state: {
    datas: [],
<<<<<<< HEAD
    rooms: [],
    id: null,
=======
>>>>>>> d14ff642230417a1ed9853c9b70fd7b5071cf212
    username: localStorage.username
  },
  mutations: {
    fetchLeaderboards (state, payload) {
      state.datas = payload
<<<<<<< HEAD
    },
    fetchGames (state, payload) {
      state.rooms = payload
      state.id = payload[state.rooms.length - 1].id
    },
    addGames (state, payload) {
      state.rooms.push(payload)
      state.id = payload.id
      // localStorage.setItem('roomId', payload.id)
    },
    editGames (state, payload) {
      this.dispatch('fetchGames')
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
    },
    editGame (context, id) {
      // console.log(id)// <--- id
      axios({
        method: 'PUT',
        url: `${url}/game/updateGame/${id}`,
        data: {
          player_count: +1
        }
      })
        .then((response) => {
          context.commit('editGames', response.data)
=======
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
>>>>>>> d14ff642230417a1ed9853c9b70fd7b5071cf212
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
