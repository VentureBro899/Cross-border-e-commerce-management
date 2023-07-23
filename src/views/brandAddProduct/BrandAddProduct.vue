<template>
    <div id='BrandAddProduct'>
    
        <!-- 搜索商品 -->
          <div class="search-bar">
            <el-input v-model="searchKeyword" placeholder="搜索商品"></el-input>
            <el-button icon="el-icon-search" circle @click="searchProduct"></el-button>
        </div>
        <!-- 商品信息 -->
        <!-- @selection-change="handleSelectionChange" -->
        <el-table ref="multipleTable" :data="products" tooltip-effect="dark" style="width: 100%" >
          <el-table-column type="selection" width="55">
          </el-table-column>
          <el-table-column prop="title" label="商品标题" width="120" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="price" label="商品价格" width="150" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="stock" label="库存"></el-table-column>
          <el-table-column prop="sku" label="sku">
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
                    <el-input v-model="products.title"></el-input>
                </el-form-item>
                <el-form-item label="体积重" prop="title">
                    长 Length (cm)<el-input v-model="products.length" ></el-input>
                    宽 Width (cm)<el-input v-model="products.width"></el-input>
                    高 Height (cm)<el-input v-model="products.height"></el-input>
                    重量 Weight (kg)<el-input v-model="products.weight"></el-input>
                </el-form-item>
                
                <el-form-item label="sku编码" prop="sku">
                    <el-input v-model="products.sku"></el-input>
                </el-form-item>
                <el-form-item label="upc编码" prop="upc">
                    <el-input v-model="products.upc"></el-input>
                </el-form-item>
                <el-form-item label="ena编码" prop="ena">
                    <el-input v-model="products.ena"></el-input>
                </el-form-item>
                <el-form-item label="型号" prop="model">
                    <el-input v-model="products.model"></el-input>
                </el-form-item>
                <el-form-item label="借卖价格" prop="price">
                    <el-input v-model="products.price"></el-input>
                </el-form-item>
                <el-form-item label="保修期" prop="end">
                    <el-input v-model="products.end"></el-input>
                </el-form-item>
                 <!-- 富文本编辑器 -->
                 eBay description:<br>
                <div class="editor-container">
                    <quill-editor
                    v-model="productDescription1"
                    :options="editorOptions1"
                    ></quill-editor>
                </div>
                <br>
               Amazon description:<br>
                <div class="editor-container">
                    <quill-editor
                    v-model="productDescription2"
                    :options="editorOptions2"
                    ></quill-editor>
                </div>
                <el-form-item>
                    
                    <el-button @click="dialogFormVisible = false">取消</el-button>
                    <el-button type="primary" @click="onSubmit">保存</el-button>
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
  name:'BrandAddProduct',
  components: {
    quillEditor,
  },
  data() {
    return {
        products: [
            { title: "商品1", length:10 , width:20, height: 30, weight:20, price: 1400, stock: 50, sku: "SKU001" , model:"1", upc:"SKFGU001", ena:"SKUDG001",end:"2023/1/1"},
            { title: "商品2", length:10 , width:20, height: 30, weight:20, price: 2060, stock: 100, sku: "SKU002" ,model:"1", upc:"SKFGU001", ena:"SKUDG001",end:"2023/1/1"},
            { title: "商品3", length:10 , width:20, height: 30, weight:20, price: 3200, stock: 20, sku: "SKU003" , model:"1", upc:"SKFGU001", ena:"SKUDG001",end:"2023/1/1"},
            { title: "商品4", length:10 , width:20, height: 30, weight:20, price: 3010, stock: 20, sku: "SKU004",  model:"1", upc:"SKFGU001", ena:"SKUDG001",end:"2023/1/1" },
            { title: "商品5", length:10 , width:20, height: 30, weight:20, price: 3020, stock: 20, sku: "SKU005",  model:"1", upc:"SKFGU001", ena:"SKUDG001",end:"2023/1/1" },
            { title: "商品6", length:10 , width:20, height: 30, weight:20, price: 3030, stock: 20, sku: "SKU006",  model:"1", upc:"SKFGU001", ena:"SKUDG001",end:"2023/1/1" },
            { title: "商品7", length:10 , width:20, height: 30, weight:20, price: 3040, stock: 20, sku: "SKU007" , model:"1", upc:"SKFGU001", ena:"SKUDG001",end:"2023/1/1"},
            // 添加更多商品数据...
        ],
        dialogFormVisible: false,
        searchKeyword: "",
        selectedProduct: null,
        newProduct: { title: "", price: null, stock: null, sku: "" },
        //   表单验证
        rules: {
            title: [
                { required: true, message: '请输入商品标题', trigger: 'blur' },
            ]
        },
        //   富文本编辑器
        productDescription1: "",
        editorOptions1: {
            modules: {
                toolbar: [
                    [{ header: [1, 2, 3, 4, false] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["blockquote", "code-block"],
                    [{ align: [] }],
                    ["link", "image"],
                ],
            },
            theme: "snow", // 使用snow主题样式
        },
        productDescription2: "",
        editorOptions2: {
            modules: {
                toolbar: [
                    [{ header: [1, 2, 3, 4, false] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["blockquote", "code-block"],
                    [{ align: [] }],
                    ["link", "image"],
                ],
            },
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
    //新增商品
    addProduct(){
        // 清空表单中的数据
        this.products.title = "";
        this.products.price = null;
        this.products.stock = null;
        this.products.sku = "";
        // 清空富文本编辑器内容
        this.productDescription1 = "";
        this.productDescription2 = "";

        // 打开新增商品对话框
        this.dialogFormVisible = true;

    },
    //删除商品
    deleteProduct(index, row) {
        this.$confirm("此操作将永久删除该商品, 是否继续?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
        })
        .then(() => {
            // 从products数组中移除该商品对象
            this.products.splice(index, 1);

            // 关闭新增商品对话框
            this.dialogFormVisible = false;

            this.$message({
            type: "success",
            message: "删除成功!",
            });
        })
        .catch(() => {
            this.$message({
            type: "info",
            message: "已取消删除",
            });
        });
    },
    //编辑商品
    editProduct(index, row) {
    
        this.products.title = row.title;
        this.products.length = row.length;
        this.products.width = row.width;
        this.products.height = row.height;
        this.products.weight = row.weight;
        this.products.price = row.price;
        this.products.stock = row.stock;
        this.products.sku = row.sku;
        this.products.model = row.model;
        this.products.upc = row.upc;
        this.products.ena = row.ena;
        this.products.end = row.end;

        this.productDescription1 = row.eBay_description;
        this.productDescription2 = row.amazon_description;


        this.dialogFormVisible = true;
    },


    //根据title搜索商品
   searchProduct() {

        if (this.searchKeyword.trim() === "") {
        this.filteredProducts = this.products;
        } else {

        this.filteredProducts = this.products.filter((product) =>
            product.title.includes(this.searchKeyword.trim())
        );
        }
    },


    cancelEdit() {

        this.products.title = "";
        this.products.price = null;
        this.products.stock = null;
        this.products.sku = "";
        this.products.length = null;
        this.products.width = null;
        this.products.height = null;
        this.products.weight = null;
        this.products.model = "";
        this.products.upc = "";
        this.products.ena = "";
        this.products.end = "";
        this.productDescription1 = "";
        this.productDescription2 = "";


        this.dialogFormVisible = false;
    },
    onSubmit() {
        // 验证：检查表单是否有效
        this.$refs.products.validate((valid) => {
        if (valid) {
            // 表单有效，处理表单提交逻辑
            if (this.modalType === 1) {
            // 编辑已有商品
            // 在这里可以更新商品信息
            const editedProductIndex = this.products.indexOf(this.selectedProduct);
            if (editedProductIndex !== -1) {
                this.products[editedProductIndex] = { ...this.products[editedProductIndex], ...this.newProduct };
            }
            this.$message({
                type: "success",
                message: "商品信息已更新！",
            });
            } else {
            // 新增商品
            // 在这里可以将新商品添加到this.products数组中
            this.products.push({ ...this.newProduct });
            this.$message({
                type: "success",
                message: "新商品已添加！",
            });
            }

            // 关闭对话框
            this.dialogFormVisible = false;
        }
        });
    },
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