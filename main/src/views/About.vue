<template>
  <div class="about">
    <h1>This is parent about page</h1>
    <el-input v-model="inputValue"></el-input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputValue: ''
    }
  }
}
</script>
<style scoped>
h1{
  color: green;
}
</style>