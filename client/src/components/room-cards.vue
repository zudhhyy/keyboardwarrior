<template>
    <div id="Room-card">
        <div id="Inner">
            <h2>Room #{{room.id}}</h2>
            <h3>Status: {{room.is_started == true ? 'Already Started' : 'Waiting..'}}</h3>
            <h3>Players: {{room.player_count}}</h3>
        </div>
        <router-link :to="{ name: 'GameRoom', params: { id: room.id }}"
        class="btn btn-primary"
        @click="join(id, room.player_count)"
        v-if="room.player_count < 4"
        >JOIN</router-link>
    </div>
</template>

<script>
import axios from 'axios'

const url = 'http://localhost:3000'
export default {
  props: ['room'],
  components: {
  },
  methods: {
    join (id, player) {
      axios({
        method: 'PUT',
        url: `${url}/game/updateGame/${id}`,
        data: {
          player_count: 1
        }
      })
        .then((response) => {
          this.$store.dispatch('fetchGames')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
    #Room-card{
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 20px;
        background-color:#42b983;
    }
    #Inner{
        padding-top: 10px;
    }
</style>
