<template>
  <div class="about">
    <h1>This is app-vue-history about page</h1>
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
    console.log('history about activated');
  },
  deactivated() {
    console.log('history about deactivated');
  },
  mounted() {
    window.a = 1;
    console.log(window.a,'app-vue-history');
  },
}
</script>
<style>
/* 测试全局css污染 */
h1{
  color: red;
}
</style>