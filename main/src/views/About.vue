<template>
  <div class="about">
    <h1>This is parent about page</h1>
    <el-input v-model="inputValue"></el-input>
    <button @click="hanldeChangeNum">更改num</button>
    <p>globalStore Num: {{num}}</p>
    <button @click="hanldeChangeGlobalNum">更改GlobalNum</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputValue: '',
    }
  },
  computed: {
    num () {
      return this.globalStore.state.num
    }
  },
  methods: {
    hanldeChangeNum () {
      this.$store.dispatch('global/setNum', 2)
    },
    hanldeChangeGlobalNum () {
      console.log(this.globalStore)
      this.globalStore.dispatch('setNum', 100)
    }
  },
}
</script>
<style scoped>
h1{
  color: green;
}
</style>