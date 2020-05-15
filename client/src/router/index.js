import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Leaderboard from '../views/Leaderboard.vue'
import Lobby from '../views/Lobby.vue'
import GameRoom from '../views/GameRoom.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    component: Leaderboard
  },
  {
    path: '/lobby',
    name: 'Lobby',
    component: Lobby
  },
  {

    path: '/gameroom/:id',
    name: 'GameRoom',
    component: GameRoom
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Lobby' && !localStorage.username) {
    next({ name: 'Home' })
  } else if (to.name === 'GameRoom' && !localStorage.username) {
    next({ name: 'Home' })
  } else if (to.name === 'Home' && localStorage.username) {
    next({ name: 'Lobby' })
  } else {
    next()
  }
})

export default router
