<template>
    <div id="Lobby">
        <h1>Welcome {{username}}!</h1>
<<<<<<< HEAD
        <button
        @click="addGames()"
        class="btn btn-primary"
        >CREATE ROOM</button>
        <div id="room-wrapper">
            <roomCard v-for="room in this.$store.state.rooms"
            :key="room.id"
            :room="room"
            />
=======
        <gameplay />
        <button class="button" @click="createGame">Create New Room</button>
        <div id="room-wrapper">
            <roomCard v-for="(room, i) in rooms" :key="i" :id="room.id" :status="room.is_started" :player="room.player_count" />
>>>>>>> d14ff642230417a1ed9853c9b70fd7b5071cf212
        </div>
    </div>
</template>

<script>
<<<<<<< HEAD
import roomCard from '../components/room-cards'

export default {
  created () {
    this.$store.dispatch('fetchGames')
=======
import axios from 'axios'
import roomCard from '../components/room-cards'
import gameplay from '../components/gameplay'

export default {
  created () {
    this.getGames()
>>>>>>> d14ff642230417a1ed9853c9b70fd7b5071cf212
  },
  name: 'Lobby',
  data () {
    return {
<<<<<<< HEAD
      username: this.$store.state.username
    }
  },
  components: {
    roomCard
  },
  methods: {
    addGames () {
      this.$store.dispatch('addGames')
      this.$router.push({ name: 'GameRoom', params: { id: this.$store.state.id + 1 } })
=======
      username: this.$store.state.username,
      rooms: null
    }
  },
  components: {
    roomCard,
    gameplay
  },
  methods: {
    getGames () {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/game/getGames'
      })
        .then(response => {
          console.log(response)
          this.rooms = response.data
        })
        .catch(response => {
          console.log(response)
        })
    },

    createGame () {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/game/createGame',
        data: {
          is_started: false,
          player_count: 1
        }
      })
        .then(response => {
          console.log(response)
          this.getGames()
        })
        .catch(response => {
          console.log(response)
        })
>>>>>>> d14ff642230417a1ed9853c9b70fd7b5071cf212
    }
  }
}

</script>

<style scoped>
    .button{
        text-align: center;
        background-color: #42b983;
        border: none;
        padding: 20px;
        color: white;
        font-size: larger;
    }
</style>
