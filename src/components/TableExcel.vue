<template>
  <div class="container">
    <div style="padding: 0 20px; margin: 15px 0;overflow: hidden;">
      <el-button @click="exportExcel" style="float: left;" size="small" type="primary">导出</el-button>
    </div>
    <div id="table" style="padding: 0 20px">
      <el-table
        id="excelTable"
        :data="tableList"
        border
        style="width: 100%">
        <el-table-column
          type="index"
          align="center"
          width="80"
          label="序号"
          :index="1"/>
        <el-table-column
          v-for="item in tableColumns"
          :prop="item.prop"
          :label="item.label"
          :key="item.id"
        />
      </el-table>
    </div>
  </div>
</template>

<script>
  import FileSaver from 'file-saver'
  import XLSX from 'xlsx'

  export default {
    name: 'TableExcel',
    props: {
      tableColumns: {
        type: Array,
        require: true,
        default: () => ([])
      },
      tableList: {
        type: Array,
        require: true,
        default: () => ([])
      },
      fileName: {
        type: String,
        default: () => ('')
      }
    },
    setup(props) {
      // 导出excel
      const exportExcel = () => {
        /* 从表生成工作簿对象 */
        let wb = XLSX.utils.table_to_book(document.querySelector(' #excelTable'))
        /* 获取二进制字符串作为输出 */
        let wbout = XLSX.write(wb, {
          bookType: 'xlsx',
          bookSST: true,
          type: 'array'
        })
        try {
          // Blob 对象表示一个不可变、原始数据的类文件对象。
          // Blob 表示的不一定是JavaScript原生格式的数据。
          // File 接口基于Blob，继承了 blob 的功能并将其扩展使其支持用户系统上的文件。
          // 返回一个新创建的 Blob 对象，其内容由参数中给定的数组串联组成。
          FileSaver.saveAs(
            new Blob([wbout], {type: 'application/octet-stream'}),
            // 设置导出文件名称
            `${props.fileName || '第一个element table导出excel示例'}.xlsx`)
        } catch (e) {
          if (typeof console !== 'undefined') console.log(e, wbout)
        }
        return wbout
      }

      return {
        exportExcel
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
