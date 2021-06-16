<template>
  <TableExcel
    :file-name="fileName"
    :table-list="tableList"
    :table-columns="tableColumns"/>
</template>

<script>
  import TableExcel from './components/TableExcel.vue'
  import {ref} from 'vue'

  export default {
    name: 'App',
    components: {
      TableExcel
    },
    setup() {
      const tableList = ref([
        {
          id: 1,
          name: '小陈',
          sex: '男',
          address: '上海市普陀区金沙江路 1515 号',
          birthday: '1999-12-18',
          hobby: '打游戏'
        },
        {
          id: 2,
          name: '小屁孩',
          sex: '男',
          birthday: '1998-05-04',
          address: '上海市普陀区金沙江路 1516 号',
          hobby: '游泳'
        },
        {
          id: 3,
          name: '紫哥',
          sex: '女',
          birthday: '1998-03-15',
          address: '上海市普陀区金沙江路 1517 号',
          hobby: '打人'
        },
        {
          id: 4,
          name: '谢哥',
          sex: '女',
          birthday: '1999-03-15',
          address: '上海市普陀区金沙江路 1518 号',
          hobby: '聊天'
        },
        {
          id: 5,
          name: '金爷',
          sex: '女',
          birthday: '1999-04-20',
          address: '上海市普陀区金沙江路 1519 号',
          hobby: '睡觉'
        }
      ])

      const fileName = ref('导出excel示例')

      const tableColumns = ref([
        {
          id: 1,
          prop: 'name',
          label: '姓名'
        },
        {
          id: 2,
          prop: 'sex',
          label: '性别'
        },
        {
          id: 3,
          prop: 'birthday',
          label: '生日'
        },
        {
          id: 4,
          prop: 'address',
          label: '住址'
        },
        {
          id: 5,
          prop: 'hobby',
          label: '爱好'
        }
      ])

      return {
        tableList,
        tableColumns,
        fileName
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
