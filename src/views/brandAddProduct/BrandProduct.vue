<template>
    <div id='BrandAddProduct'>
    
        <!-- 搜索商品 -->
        <el-input
          v-model="searchKeyword"
          placeholder="搜索商品"
          @keyup.enter="searchProduct"
        ></el-input>
        <!-- 商品信息 -->
        <!-- @selection-change="handleSelectionChange" -->
        <el-table ref="multipleTable" :data="products" tooltip-effect="dark" style="width: 100%" >
          <el-table-column type="selection" width="55">
          </el-table-column>
          <el-table-column prop="title" label="商品标题" width="120" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="fenlei" label="分类" width="150" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="picture" label="主图">
          </el-table-column>
          <el-table-column prop="status" label="状态">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button size="mini" type="primary" icon="el-icon-edit" @click="editProduct(scope.$index, scope.row)"></el-button>
                <el-button size="mini" type="danger" icon="el-icon-delete" @click="deleteProduct(scope.$index, scope.row)"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 新增商品按钮 -->
        <el-button style="margin: 20px 5px;float: left;" type="success" size="mini" @click="addProduct()">新增</el-button>

        <!-- 新增商品表单 -->
        <el-dialog title="新增商品信息" :visible.sync="dialogFormVisible">
            <el-form ref="products" :rules="rules" :model="products" label-width="80px" class="demo-ruleForm">
                <el-form-item label="商品标题" prop="title">
                    <el-input v-model="products.title" placeholder="商品标题准确、简洁、完整"></el-input>
                </el-form-item>
               <el-form-item label="商品分类" prop="fenlei" >
                    <el-select v-model="products.fenlei" placeholder="请选择商品分类">
                        <el-option label="Alabama" value="Alabama"></el-option>
                        <el-option label="Alaska" value="Alaska"></el-option>
                        <el-option label="Arizona" value="Arizona"></el-option>
                    </el-select>
                </el-form-item>
                <!-- 上传图片 -->
                <el-upload
                    class="upload-demo"
                    ref="upload"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :file-list="fileList"
                    :auto-upload="false">
                    <el-button slot="trigger" size="small" type="primary">选择图片</el-button>
                    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">开始上传</el-button>
                    <div slot="tip" class="el-upload__tip">商品主图第1张图片,将出现在商品列表页、商品详情页第一章图</div>
                </el-upload>

                <el-form-item>
                    <el-button @click="dialogFormVisible = false">取消</el-button>
                    <el-button type="primary" @click="onSubmit()">保存</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
export default {
  name:'BrandProduct',
  components: {
    quillEditor,
  },
  data() {
    return {
        // 选择要上传的图片
        fileList: [
            {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, 
            {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
        ],
        products: [
            { title: "Mp3", fenlei: "电子产品", picture: 50, status: "待入仓" },
            { title: "电饭煲", fenlei: "电器", picture: 50, status: "待入仓" },
            { title: "电冰箱", fenlei: "电器", picture: 50, status: "待入仓" },
            { title: "耳机", fenlei: "电子产品", picture: 50, status: "待入仓" },
            { title: "电饭煲", fenlei: "电器", picture: 50, status: "待入仓" },

            // 添加更多商品数据...
        ],
        dialogFormVisible: false,
        searchKeyword: "",
        selectedProduct: null,
        newProduct: { title: "", price: null, stock: null, sku: "" },
        //   表单验证
        rules: {
            title: [
                { required: true, message: '请输入商品', trigger: 'blur' },
            ],
            fenlei: [
                { required: true, message: '请选择商品分类', trigger: 'blur' },
            ]

        },
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) =>
        product.title.includes(this.searchKeyword)
      );
    },
  },
  methods: {
    onSubmit() {
      this.$refs.products.validate((valid) => {
        if (valid) {
          // 在这里执行保存商品的逻辑
          // 将新增/编辑后的商品数据添加到 this.products 中
          if (this.modalType === 1) {
            // 编辑商品
            const editedIndex = this.products.findIndex((product) => product.title === this.newProduct.title);
            if (editedIndex !== -1) {
              this.products.splice(editedIndex, 1, this.newProduct);
            }
          } else {
            // 新增商品
            this.products.push(this.newProduct);
          }

          this.dialogFormVisible = false;
          this.$message({
            type: 'success',
            message: '保存成功！'
          });
        } else {
          this.$message.error('表单验证不通过，请检查输入！');
        }
      });
    },

    //新增商品
    addProduct() {
      // 在新增商品时，将表单数据初始化为空白
      this.newProduct = { title: "", fenlei: "", picture: null, status: "" };
      this.dialogFormVisible = true;
    },
    //删除商品
    deleteProduct(index, row) {
      this.$confirm('此操作将永久删除该商品信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      .then(() => {
        // 在这里执行删除商品的逻辑
        this.products.splice(index, 1);
        this.$message({
          type: 'success',
          message: '删除成功！'
        });
      })
      .catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },

    //编辑商品
    editProduct(index, row) {
      // 在编辑商品时，将表单数据初始化为当前选中的商品数据
      this.newProduct = { ...row };
      this.dialogFormVisible = true;
    },

    //搜索商品
    searchProduct() {
      // 判断搜索关键字是否为空
      if (this.searchKeyword.trim() === '') {
        // 若搜索关键字为空，则显示全部商品
        this.filteredProducts = [...this.products];
      } else {
        // 使用搜索关键字过滤商品标题，并更新 filteredProducts
        this.filteredProducts = this.products.filter((product) =>
          product.title.includes(this.searchKeyword.trim())
        );
      }
    },

    cancelEdit() {
      // 取消编辑时，将表单数据重置为空白，并关闭对话框
      this.newProduct = { title: "", fenlei: "", picture: null, status: "" };
      this.dialogFormVisible = false;
    },
    submitUpload() {
        this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
        console.log(file, fileList);
    },
    handlePreview(file) {
        console.log(file);
    }
  },
};
</script>


<style>
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.editor-container {
  margin-top: 20px;
}
</style>