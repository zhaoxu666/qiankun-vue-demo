<template>
  <div class="about">
    <h1>This is parent about page</h1>
    <el-input v-model="inputValue"></el-input>
    <button @click="hanldeChangeNum">更改num</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    hanldeChangeNum () {
      this.$store.dispatch('global/setNum', 2)
    }
  },
}
</script>
<style scoped>
h1{
  color: green;
}
</style>