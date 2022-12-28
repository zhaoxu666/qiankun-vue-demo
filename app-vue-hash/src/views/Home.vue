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
    <p>{{num}}</p>
    <p>{{microNum}}</p>
    <button @click="handleChangeNum">更改主应用Store-Number</button>
    <button @click="handleChangeMicroNum">更改子应用Store-Number</button>
    <button @click="handleChangeMessage">更改主应用Store-Message</button>
    <button @click="handleAddItem">更改主应用Store-List</button>
    <button @click="handleDeleteItem">更改主应用Store-List-Delete</button>
    <button @click="handleSetObj">更改主应用Store-Obj</button>
    <button @click="handleDeleteKey">更改主应用Store-Obj-Delete</button>
    <hr>
    <h3>数组</h3>
    <div v-for="item in inputList" :key="item.id">
      <Input />
    </div>
    <hr>
    <h3>对象</h3>
    <div v-for="item in obj" :key="item.name">
      <Input />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Input from '@/components/Input.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Input
  },
  data () {
    return {
      inputValue: '',
      count: 1,
      id: 0,
    }
  },
  computed: {
    num () {
      return this.$store.state.global.num
    },
    microNum () {
      return this.microStore.state.microNum
    },
    inputList () {
      console.log('input list change', this.$store.state.global.list)
      return this.$store.state.global.list
    },
    obj () {
      console.log('input list obj', this.$store.state.global.obj)
      return this.$store.state.global.obj
    }
  },
  watch: {
    num: {
      handler (newValue) {
        console.log('num is change', newValue)
      }
    }
  },
  methods: {
    handleChangeNum () {
      // this.$shared.setNum(this.count)
      // console.log(this.$shared.getNum())
      this.count++
      this.$store.dispatch('global/setNum', this.count)
     
    },
    handleChangeMicroNum () {
      this.count++
      this.microStore.dispatch('setMicroNum', this.count)
    },
    handleChangeMessage () {
      this.$store.dispatch('global/setMessage', `hello qiankun ${this.count}`)
    },
    async handleAddItem () {
      const item = {
        id: this.id
      }
      await this.$store.dispatch('global/addList', item)
      this.id++
    },
    async handleDeleteItem () {
      this.$store.dispatch('global/deleteItem')
    },
    async handleSetObj () {
      const item = {
        [this.id]: {
          name: `zhaoxu${this.id}`
        }
      }
      await this.$store.dispatch('global/addObj', item)
      this.id++
    },
    async handleDeleteKey () {
      this.id--
      await this.$store.dispatch('global/deleteObj', this.id)
    }
  },
  created () {
    console.log(this.$store)
  }
}
</script>
