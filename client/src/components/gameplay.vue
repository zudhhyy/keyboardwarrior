<template>
    <div id="Gameplay-wrapper">
        <div id="Text" v-if="is_started">
            <h2 v-if="wrong">Duh, you type it wrong</h2>
            <h2>Time:{{time}}</h2>
            <h2>"{{showText}}"</h2>
            <form @click.prevent="submitted">
                <input type="text" v-model="userType">
                <input type="submit" value="Submit">
            </form>
        </div>
        <button v-else @click="decrement">start</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  created () {
    this.fetchWords()
  },
  data () {
    return {
      showText: '',
      fastest_time: [],
      is_started: false,
      time: 30,
      countdown: '',
      text: null,
      userType: '',
      wrong: false,
      num: 2 // sesuaiin sama banyak text, ini index nya
    }
  },
  methods: {
    decrement () {
      this.showText = this.text[2].kalimat
      console.log('masuk decrement', this.time)
      this.is_started = true
      this.countdown = setInterval(() => {
        console.log('intervals', this.time)
        if (this.time > 0) {
          this.time--
        } else {
          clearInterval(this.countdown)
        }
      }, 1000)
    },

    fetchWords () {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/word'
      })
        .then(response => {
          const random = Math.floor((Math.random() * response.data.length))
          for (let a = 0; a < 2; a++) { // ganti angka 2 nya buat ngurangin hasil fetch
            console.log('times')
            response.data.splice(random, 1)
          }
          this.text = response.data
          console.log(this.text, 'this is text after spliced')
        })
        .catch(response => {
          console.log(response)
        })
    },

    submitted () {
      if (this.showText === this.userType) {
        console.log('bener')
        this.num-- // sesuaiin sama banyak nya text
        this.showText = this.text[this.num].kalimat
        this.fastest_time.push(this.time)
      } else {
        console.log('salah')
      }
    }
  }
}
</script>

<style scoped>
    #Gameplay-wrapper{
        margin-bottom: 30px;
    }
    #Text{
        margin: 30px;
    }
</style>
