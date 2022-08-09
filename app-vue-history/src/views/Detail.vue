<template>
    <div>
        详情-{{id}}
    </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      id: ''
    }
  },
  created () {
    console.log('detail created')
    this.id = this.$route.params.id
  }
}
</script>