<template>

  <div class="leaderboard">
    <h1>This is leaderboard page</h1>

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Rank</th>
          <th scope="col">User Name</th>
          <th scope="col">Score</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in this.$store.state.datas" :key="index">
          <th scope="row">{{index+1}}</th>
          <td>{{data.username}}</td>
          <td>{{data.score}}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  name: 'Leaderboard',
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('fetchLeaderboards')
  }
}
</script>

<style scoped>
h1{
  margin-bottom: 10%;
}
.leaderboard{
  margin: 0 20%;
}
</style>
