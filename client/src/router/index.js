import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Leaderboard from '../views/Leaderboard.vue'
import Lobby from '../views/Lobby.vue'
<<<<<<< HEAD
import GameRoom from '../views/GameRoom.vue'
=======
>>>>>>> d14ff642230417a1ed9853c9b70fd7b5071cf212

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
<<<<<<< HEAD
    path: '/gameroom/:id',
    name: 'GameRoom',
    component: GameRoom
=======
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
>>>>>>> d14ff642230417a1ed9853c9b70fd7b5071cf212
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

<<<<<<< HEAD
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

=======
>>>>>>> d14ff642230417a1ed9853c9b70fd7b5071cf212
export default router
