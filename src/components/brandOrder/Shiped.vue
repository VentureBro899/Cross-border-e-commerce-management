<template>
  <el-table border :data="tableData" style="width: 100%">
    <el-table-column type="selection" width="55">
    </el-table-column>
    <el-table-column prop="title" label="标题" width="180"> </el-table-column>
    <el-table-column prop="price" label="价格" width="180"> </el-table-column>
    <el-table-column prop="count" label="数量" width="180"> </el-table-column>
    <el-table-column prop="sku" label="Sku"> </el-table-column>
    <el-table-column prop="orderno" label="订单号"> </el-table-column>
    <el-table-column prop="orderCreateTime" label="订单创建时间"> </el-table-column>
    <el-table-column prop="trackingno" label="物流信息"> </el-table-column>
    <el-table-column label="操作" align="center">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">取消</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: null
    }
  },
  methods: {
    handleEdit(index, row) {}
  },
  mounted() {
    this.$request.get('/brand/order/completed').then(res => {
      this.tableData = res.data.data
    })
  }
}
</script>

<style></style>
