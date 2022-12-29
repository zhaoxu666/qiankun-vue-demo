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
      return this.globalStore.state.num
    },
    microNum () {
      return this.$store.state.microNum
    },
    inputList () {
      console.log('input list change', this.globalStore.state.list)
      return this.globalStore.state.list
    },
    obj () {
      console.log('input list obj', this.globalStore.state.obj)
      return this.globalStore.state.obj
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
      this.globalStore.dispatch('setNum', this.count)
     
    },
    handleChangeMicroNum () {
      this.count++
      this.$store.dispatch('setMicroNum', this.count)
    },
    handleChangeMessage () {
      this.globalStore.dispatch('setMessage', `hello qiankun ${this.count}`)
    },
    async handleAddItem () {
      const item = {
        id: this.id
      }
      await this.globalStore.dispatch('addList', item)
      this.id++
    },
    async handleDeleteItem () {
      this.globalStore.dispatch('deleteItem')
    },
    async handleSetObj () {
      const item = {
        [this.id]: {
          name: `zhaoxu${this.id}`
        }
      }
      await this.globalStore.dispatch('addObj', item)
      this.id++
    },
    async handleDeleteKey () {
      this.id--
      await this.globalStore.dispatch('deleteObj', this.id)
    }
  },
  created () {
    console.log(this.$store)
  }
}
</script>
