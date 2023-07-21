<template>
  <div id="unshiped">
    <el-table border :data="tableData" style="width: 100%">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="title" label="标题" width="180"> </el-table-column>
      <el-table-column prop="price" label="价格" width="180"> </el-table-column>
      <el-table-column prop="count" label="数量" width="180"> </el-table-column>
      <el-table-column prop="sku" label="Sku"> </el-table-column>
      <el-table-column prop="orderno" label="订单号"> </el-table-column>
      <el-table-column prop="orderCreateTime" label="订单创建时间"> </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">发货</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="1000" @current-change="handleCurrentChange">
    </el-pagination>
  </div>

</template>

<script>
export default {
  data() {
    return {
      tableData: null
    }
  },
  methods: {
    handleEdit(index, row) {
      this.$prompt('请输入物流号', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(({ value }) => {
          this.$message({
            type: 'success',
            message: '商品[' + row.title + ']发货成功。'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消发货'
          })
        })
    },
    handleCurrentChange() {
      this.$request.get('/brand/order/cancelled').then(res => {
        this.tableData = res.data.data
      })
    }
  },
  mounted() {
    this.$request.get('/brand/order/cancelled').then(res => {
      this.tableData = res.data.data
    })
  }
}
</script>

<style>
.el-pagination {
  margin: 15px;
  float: right;
}
</style>
