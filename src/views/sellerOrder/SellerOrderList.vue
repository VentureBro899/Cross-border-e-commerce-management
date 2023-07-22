<template>
  <div id="sellerorder">
    <div class="control">
      <el-input placeholder="请输入内容" v-model="key" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-select>
      </el-input>
      <el-button type="success" style="margin:10px 0px">刷新订单</el-button>
    </div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="未支付" name="first">
        <Unpayment></Unpayment>
      </el-tab-pane>
      <el-tab-pane label="已支付" name="second">
        <Unshiped></Unshiped>
      </el-tab-pane>
      <el-tab-pane label="已发货" name="third">
        <Shiped></Shiped>
      </el-tab-pane>
      <el-tab-pane label="已完成" name="fourth">
        <Completed></Completed>
      </el-tab-pane>
      <el-tab-pane label="已取消" name="firth">
        <Cancelled></Cancelled>
      </el-tab-pane>
    </el-tabs>
  </div>

</template>

<script>
import Unpayment from '@/components/sellerOrder/Unpayment'
import Unshiped from '@/components/sellerOrder/Unshiped'
import Shiped from '@/components/sellerOrder/Shiped'
import Completed from '@/components/sellerOrder/Completed'
import Cancelled from '@/components/sellerOrder/Cancelled'

export default {
  data() {
    return {
      activeName: 'first',
      key: '',
      select: ''
    }
  },
  components: {
    Unpayment,
    Unshiped,
    Shiped,
    Completed,
    Cancelled
  },
  methods: {
    handleClick(tab, event) {}
  }
}
</script>

<style>
.control {
  width: 30%;
  margin-bottom: 15px;
  text-align: left;
}

.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
