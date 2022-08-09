<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" >
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <input v-model="inputValue" />
    <ul>
      <li><router-link to="/detail/1">detail1</router-link></li>
      <li><router-link to="/detail/2">detail2</router-link></li>
      <li><router-link to="/detail/3">detail3</router-link></li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      inputValue: ''
    }
  }
}
</script>
