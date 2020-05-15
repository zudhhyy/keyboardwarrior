<template>
    <div id="Lobby">
        <h1>Welcome {{username}}!</h1>
        <button
        @click="addGames()"
        class="btn btn-primary"
        >CREATE ROOM</button>

        <div id="room-wrapper">
            <roomCard v-for="room in this.$store.state.rooms"
            :key="room.id"
            :room="room"
            />
        </div>
    </div>
</template>

<script>

import roomCard from '../components/room-cards'
import gameplay from '../components/gameplay'

export default {
  created () {
    this.$store.dispatch('fetchGames')
  },
  name: 'Lobby',
  data () {
    return {
      username: this.$store.state.username
    }
  },
  components: {
    roomCard,
    gameplay
  },
  methods: {
    addGames () {
      this.$store.dispatch('addGames')
      this.$router.push({ name: 'GameRoom', params: { id: this.$store.state.id + 1 } })
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
