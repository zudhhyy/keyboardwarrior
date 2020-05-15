<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
<<<<<<< HEAD
      <router-link to="/lobby">Lobby</router-link> |
      <router-link to="/leaderboard">Leaderboard</router-link>
      <button v-show="check()" @click="logout()">Exit game</button>
    </div>
    <router-view/>
=======
      <router-link to="/about">About</router-link> |
      <router-link to="/lobby">Lobby</router-link> |
      <router-link to="/leaderboard">Leaderboard</router-link>
    </div>
    <router-view/>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
>>>>>>> d14ff642230417a1ed9853c9b70fd7b5071cf212
  </div>
</template>

<script>
<<<<<<< HEAD

export default {
  name: 'App',
  methods: {
    check () {
      if (localStorage.username) {
        return true
      } else {
        return false
      }
    },
    logout () {
      localStorage.removeItem('username')
      this.$router.push({ name: 'Home' })
    }
  },
  created () {
    this.check()
=======
// import Home from './views/Home'

export default {
  name: 'App',
  components: {
    // Home
>>>>>>> d14ff642230417a1ed9853c9b70fd7b5071cf212
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
