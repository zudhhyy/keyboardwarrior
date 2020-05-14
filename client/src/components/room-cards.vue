<template>
    <div id="Room-card">
        <div id="Inner">
            <h2>Room #{{id}}</h2>
            <h3>Status: {{status == true ? 'Already Started' : 'Waiting..'}}</h3>
            <h3>Players: {{player}}</h3>
        </div>
        <button v-if="player < 4">Join</button>
    </div>
</template>

<script>
export default {
  props: ['id', 'status', 'player'],
  methods: {
    join () {

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
