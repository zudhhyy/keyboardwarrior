<template>
<div>
    <div>
      {{ data[this.index] }}
    </div>
    <p>Time: {{ time }} </p>
    <input type="text" id="typing"><br><br>
    <p id="word">
      <button class="btn btn-primary" @click.prevent="start">Start</button>
    </p>
</div>
</template>

<script>
export default {
  name: 'Game',
  props: ['wordData', 'data'],
  data () {
    return {
      randomData: '',
      index: 0,
      time: 0,
      score: 0
    }
  },
  methods: {
    start () {
      this.time = 5
      this.index = Math.floor(Math.random() * 5)
      this.countdown()
    },
    countdown () {
      if (this.time > 0) {
        setTimeout(() => {
          this.time--
          this.countdown()
        }, 1000)
      }
    }
  }
}
</script>
