<template>
    <div>
      <ul>
        <li><router-link to="/detail/1">detail1</router-link></li>
        <li><router-link to="/detail/2">detail2</router-link></li>
        <li><router-link to="/detail/3">detail3</router-link></li>
      </ul>
    </div>
</template>
<script>
export default {
  name: 'Demo',
  data () {
    return {
      tableData: [
        {
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  methods: {
  },
}
</script>