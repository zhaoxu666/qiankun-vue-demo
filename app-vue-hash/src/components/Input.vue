<template>
    <div>
        <input type="text" v-model="text">
    </div>
</template>
<script>
export default {
  name: 'Input',
  data () {
    return {
        text: ''
    }
  }
}
</script>