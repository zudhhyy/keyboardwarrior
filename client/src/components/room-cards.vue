<template>
    <div id="Room-card">
        <div id="Inner">
            <h2>Room #{{room.id}}</h2>
            <h3>Status: {{room.is_started == true ? 'Already Started' : 'Waiting..'}}</h3>
            <h3>Players: {{room.player_count}}</h3>
        </div>
        <!-- <router-link :to="{ name: 'GameRoom', params: { id: room.id }}"
        class="btn btn-primary"
        @click="join(id, room.player_count)"
        v-if="room.player_count < 4"
        >JOIN</router-link> -->
        <button
        v-if="room.player_count < 4"
        class="btn btn-primary"
        @click="join(room.id, room.player_count)"
        >JOIN ROOM</button>
    </div>
</template>

<script>
// import axios from 'axios'

// const url = 'http://localhost:3000'
export default {
  props: ['room'],
  components: {
  },
  methods: {
    join (id, player) {
      // console.log(player)
      this.$store.dispatch('editGame', id)
      this.$router.push({ name: 'GameRoom', params: { id: this.$store.state.id + 1 } })
      // axios({
      //   method: 'PUT',
      //   url: `${url}/game/updateGame/${id}`,
      //   data: {
      //     player_count: player + 1
      //   }
      // })
      //   .then((response) => {
      //     this.$store.dispatch('fetchGames')
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })
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
