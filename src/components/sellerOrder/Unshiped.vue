<template>
  <el-table border :data="tableData" style="width: 100%">
    <el-table-column type="selection" width="55">
    </el-table-column>
    <el-table-column prop="title" label="标题" width="180"> </el-table-column>
    <el-table-column prop="price" label="价格" width="180"> </el-table-column>
    <el-table-column prop="qty" label="QTY"> </el-table-column>
    <el-table-column prop="sku" label="Sku"> </el-table-column>
    <el-table-column prop="orderno" label="订单号"> </el-table-column>
    <el-table-column prop="total" label="总价"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: null
    }
  },
  mounted() {
    this.$request.get('/seller/order/unpayment').then(res => {
      this.tableData = res.data.data
    })
  }
}
</script>

<style></style>
