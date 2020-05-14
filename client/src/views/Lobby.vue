<template>
    <div id="Lobby">
        <h1>Welcome {{username}}!</h1>
        <button class="button" @click="createGame">Create New Room</button>
        <div id="room-wrapper">
            <roomCard v-for="(room, i) in rooms" :key="i" :id="room.id" :status="room.is_started" :player="room.player_count" />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import roomCard from '../components/room-cards'

export default {
  created () {
    this.getGames()
  },
  name: 'Lobby',
  data () {
    return {
      username: this.$store.state.username,
      rooms: null
    }
  },
  components: {
    roomCard
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
