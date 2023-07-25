<template>
  <div>

    <el-button size="mini" class="add" @click="dialogFormVisible = true">增加</el-button>
    <el-dialog title="请输入要增加的值" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="商品名:" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off" class="inp"></el-input>
    </el-form-item>
    <el-form-item label="库存量:" :label-width="formLabelWidth">
      <el-input v-model="form.stock" autocomplete="off" class="inp" type="number"></el-input>
    </el-form-item>
    <el-form-item label="地址:" :label-width="formLabelWidth">
      <el-input v-model="form.adress" autocomplete="off" class="inp"></el-input>
    </el-form-item>
    <el-form-item label="单价:" :label-width="formLabelWidth">
      <el-input v-model="form.price" autocomplete="off" class="inp" type="number"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false,handleadd()">确 定</el-button>
  </div>

</el-dialog>

    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
    <el-table-column prop="BrandName" label="商品名" width="200%">
      <template slot-scope="scope">
          <input type="text" v-model="scope.row.BrandName" v-show="scope.row.iseditor" />
          <span v-show="!scope.row.iseditor">{{scope.row.BrandName}}</span>
        </template>
    </el-table-column>
    <el-table-column prop="BrandStock" label="库存量" width="200%">
      <template slot-scope="scope">
          <input type="number" v-model="scope.row.BrandStock" v-show="scope.row.iseditor" />
          <span v-show="!scope.row.iseditor">{{scope.row.BrandStock}}</span>
        </template>
    </el-table-column>
    <el-table-column prop="BrandAddress" label="生产地址">
      <template slot-scope="scope">
          <input type="text" v-model="scope.row.BrandAddress" v-show="scope.row.iseditor" />
          <span v-show="!scope.row.iseditor">{{scope.row.BrandAddress}}</span>
        </template>
    </el-table-column>
    <el-table-column prop="BrandPrice" label="单价￥" width="130%">
      <template slot-scope="scope">
          <input type="number" v-model="scope.row.BrandPrice" v-show="scope.row.iseditor" />
          <span v-show="!scope.row.iseditor">{{scope.row.BrandPrice}}</span>
        </template>
    </el-table-column>
    <el-table-column label="操作" width="250%">
      <template slot-scope="scope">
        <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
            size="mini"
            @click="handleSave(scope.$index, scope.row)">保存</el-button>
        <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>

</template>
<style scoped>
a{
  color: #000;
  text-decoration: none
}
.add{
  float: right;
}

</style>
<script>
export default {
  name: "BrandInformation",
  data() {
    return {
      tableData: [{
        BrandName:'华为p30pro',
        BrandStock:3589,
        BrandAddress:'青岛市市北区台东三路步行街飞拉力通讯商城负一层A区4号',
        BrandPrice:'5499',
        iseditor: false
      }, {
        BrandName:'王者荣耀',
        BrandStock:6546,
        BrandAddress:'王者峡谷',
        BrandPrice:166,
        iseditor: false
      }, {
        BrandName:'Iphone20',
        BrandStock:8715,
        BrandAddress:'广州省汕尾市海丰县苹果专卖厂',
        BrandPrice:14680,
        iseditor: false
      },{
        BrandName:'缤纷独角兽',
        BrandStock:8723,
        BrandAddress:'广东省深圳市王者荣耀专区',
        BrandPrice:163,
        iseditor: false
      },{
        BrandName:'原神',
        BrandStock:5,
        BrandAddress:'海祇岛清籁岛',
        BrandPrice:6666,
        iseditor: false
      },
    ],
    dialogFormVisible: false,
        form: {
          name: '',
          stock: '',
          adress: '',
          price: '',
          iseditor: false,
        },
    formLabelWidth: '120px'

    }
  },

  methods:{
    handleadd() {
      let BrandName=this.form.name;
      let BrandStock=this.form.stock;
      let BrandAddress=this.form.adress;
      let BrandPrice=this.form.price;
      let iseditor=false;

      let arr={BrandName,BrandStock,BrandAddress,BrandPrice,iseditor}
      // console.log(arr);
      this.tableData.push(arr)
    },
    handleDelete(index, row) {
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          center:true,
        }).then(() => {
          this.tableData.splice(index,1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });

    },
    handleEdit(index,row){
      row.iseditor = true;
    },
    handleSave(index,row){
      row.iseditor = false;
    }
  }
}
</script>

