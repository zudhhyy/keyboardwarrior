<template>

        <div class="container text-center my-auto">
        <h1 class="mb-1">Keyboard Warrior</h1>
        <h3 class="mb-5">
            <em>A Simple Game For The Fastest</em>
        </h3>
        <div class="form-group" id="submit">
            <label for="username">UserName</label>
            <input type="text" class="form-control" id="username" placeholder="Add Username" v-model="username">
        </div>
        <button class="btn btn-primary" @click.prevent="submit">Submit</button>
        </div>

</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    submit () {
      const data = this.username
      console.log(data)
      localStorage.setItem('username', data)
    }
  }
}
</script>

<style scoped>
    .container {
    background-image: url("../assets/warrior.jpg");
    width: 500px;
    height: 500px;
    }
</style>
