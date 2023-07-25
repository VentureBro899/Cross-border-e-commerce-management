<template>
  <el-main>


<div v-for="(item,key) in arr2" :key=key>
  <el-card class="box-card">
<div slot="header" class="clearfix">
  <h2>{{item.name}}</h2>


<el-button style="float: right; padding: 3px 0" type="text"
@click="dialogFormVisible = true">编辑</el-button>

<el-dialog title="编辑借卖方信息" :visible.sync="dialogFormVisible">
<el-form :model="form">
<el-form-item label="借卖方名称" :label-width="formLabelWidth">
  <el-input v-model="form.name" autocomplete="off"></el-input>
</el-form-item>
<el-form-item label="公司地址" :label-width="formLabelWidth">
  <el-input v-model="form.address" autocomplete="off"></el-input>
</el-form-item>
<el-form-item label="电话" :label-width="formLabelWidth">
  <el-input v-model="form.tel" autocomplete="off" type="number"></el-input>
</el-form-item>
</el-form>
<div slot="footer" class="dialog-footer">
<el-button @click="dialogFormVisible = false">取 消</el-button>
<el-button type="primary" @click="Edit(),dialogFormVisible = false">确 定</el-button>
</div>
</el-dialog>
<div class="place"> </div>
<div class="text item">公司地址：{{item.address}}</div>
<div class="text item">热线电话：{{item.tel}}</div>
</div>
</el-card>
</div>

  </el-main>
</template>

<script>
export default{
  data(){
    return{
      arr2:[
        {name:"腾讯计算机系统有限公司",address:"深圳",tel:"4006700700"},
        {name:"腾讯计算机系统有限公司",address:"深圳",tel:"4006700700"},
        {name:"腾讯计算机系统有限公司",address:"深圳",tel:"4006700700"},
        {name:"腾讯计算机系统有限公司",address:"深圳",tel:"4006700700"},

    ],
    dialogFormVisible: false,
    form: {
      name: '',
      address:'',
      tel:'',
    },
    formLabelWidth: '120px'
  }
  },
  methods:{
    Edit(){
      let name=this.form.name;
      let address=this.form.address;
      let tel=this.form.tel;
      let arr={name,address,tel}
      console.log(arr);
      this.arr2.pop();
      this.arr2.push(arr);
      console.log(this.arr2)
    }
  }
}
</script>
    
<style scoped>
.el-card{
  float: left;
  margin-right:30px;
  margin-bottom: 20px;
}
.place{
height: 10px;
}
.text {
font-size: 14px;
}

.item {

margin-top: 30px;
}

.clearfix:before,
.clearfix:after {
display: table;
content: "";
}
.clearfix:after {
clear: both
}

.box-card {
width: 480px;
}
</style>
