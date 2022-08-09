<template>
  <div class="home">
    <h1>Home</h1>
    <input v-model="inputValue" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
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
  data() {
    return {
      inputValue: ''
    }
  }
}
</script>
