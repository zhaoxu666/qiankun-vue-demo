<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input v-model="inputValue" />
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      inputValue: ''
    }
  },
  activated() {
    console.log('hash about activated');
  },
  deactivated() {
    console.log('hash about deactivated');
  },
}
</script>