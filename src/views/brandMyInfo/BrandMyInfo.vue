<template>
  <div class="myinfo">
    <div class="top_text">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item class="first_text">品牌商</el-breadcrumb-item>
        <el-breadcrumb-item class="last_text">公司信息</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
    </div>
    <div class="company_info">
      <div class="table_pre_text">公司信息</div>
      <div class="company_info_table">
        <el-table :data="companyInfo" style="width: 100%">
          <el-table-column
            prop="c_name"
            label="公司名称（中文）"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="e_name"
            label="公司名称（英文）"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="GMC_report_type"
            label="品牌商认证类型"
          ></el-table-column>
          <el-table-column
            prop="GMC_report_url"
            label="证书地址"
          ></el-table-column>
          <el-table-column prop="" label="操作">
            <template slot-scope="scope">
              <el-button
                type="primary"
                icon="el-icon-edit"
                @click="editCompany(scope.row)"
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="add_btn">
        <el-button type="primary" @click="addCompanyInfo()">新增</el-button>
      </div>
    </div>
    <div class="brand_info">
      <div class="table_pre_text">品牌信息</div>
      <div class="brand_info_table">
        <el-table
          ref="multipleTable"
          :data="brandData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="brand_Name" label="品牌名称" width="300px">
          </el-table-column>
          <el-table-column label="品牌图片" width="300px">
            <template slot-scope="scope">
              <el-image
                :src="scope.row.brand_logo"
                style="width: 100px; height: 100px"
                fit="contain"
              ></el-image>
            </template>
          </el-table-column>
          <el-table-column label="操作" show-overflow-tooltip>
            <template slot-scope="scope">
              <el-button
                type="primary"
                @click="eidt(scope.row)"
                icon="el-icon-edit"
              ></el-button>
              <el-button
                type="danger"
                @click="delbrand(scope.row)"
                icon="el-icon-delete"
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="add_btn">
        <el-button type="primary" @click="dialogFormVisible = true"
          >新增</el-button
        >
      </div>
    </div>
    <div>
      <el-dialog title="品牌信息" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="品牌名称" :label-width="formLabelWidth">
            <el-input v-model="form.brand_Name"></el-input>
          </el-form-item>
          <el-form-item label="品牌图片" :label-width="formLabelWidth">
            <el-upload
              action="#"
              list-type="picture-card"
              :file-list="fileList"
              :auto-upload="true"
              :on-progress="handleProgress"
            >
              <i slot="default" class="el-icon-plus"></i>
              <div slot="file" slot-scope="{ file }">
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url"
                  alt=""
                />
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                  >
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
              <div class="el-upload__tip" slot="tip">
                只能上传jpg/png文件，且不超过500kb
              </div>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="" />
            </el-dialog>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companyInfo: [
        {
          c_name: "华为",
          e_name: "Huawei",
          introduction:
            "华为创立于1987年，是全球领先的ICT（信息与通信）基础设施和智能终端提供商。我们的20.7万员工遍及170多个国家和地区，为全球30多亿人口提供服务。我们致力于把数字世界带入每个人、每个家庭、每个组织，构建万物互联的智能世界。",
          GMC_report_type: "asd",
          GMC_report_url: "www.huawei.com",
        },
      ],
      brandData: [
        {
          brand_Name: "华为荣耀",
          brand_logo: require("/src/assets/img/HONOR.png"),
        },
        {
          brand_Name: "华为",
          brand_logo: require("/src/assets/img/HUAWEI.png"),
        },
      ],
      tempData: {},
      form: {
        brand_Name: "",
        brand_logo: "",
      },
      dialogFormVisible: false,
      formLabelWidth: "120px",
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      fileList: [],
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    addCompanyInfo() {
      this.$router.push("/addorupdatemyinfo");
    },
    editCompany(row) {
      this.$router.push({ path: "/addorupdatemyinfo", query: row });
    },
    getParam() {
      let tempCompanyInfo = [];
      this.tempData = this.$route.query;
      if (JSON.stringify(this.tempData) === "{}") return;
      let flag = true;
      console.log(this.companyInfo);
      this.companyInfo.forEach((element) => {
        debugger;
        // console.log(element.c_name === this.tempData.c_name);
        if (element.c_name === this.tempData.c_name) {
          tempCompanyInfo = [...tempCompanyInfo, this.tempData]
          flag = false
        }
        if (element.c_name !== this.tempData.c_name) {
          tempCompanyInfo = [...tempCompanyInfo, element]
        }
      });
      if (flag) {
        tempCompanyInfo = [...tempCompanyInfo, this.tempData]
      }
      this.companyInfo = tempCompanyInfo;
    },
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
    handleProgress(event, file, fileList) {
      this.form.brand_logo = file.url;
    },
    submit() {
      this.dialogFormVisible = false;
      if (this.form.brand_Name === "") return;
      console.log(this.brandData);
      console.log(this.form);
      try {
        this.brandData.forEach((element) => {
          //   debugger;
          if (element.brand_Name == this.form.brand_Name) {
            element = this.form;
            throw "跳出循环";
          }
        });
      } catch (error) {
        this.form = { brand_Name: "", brand_logo: "" };
        this.fileList = [];
      }
      if (this.form.brand_Name) {
        this.brandData = [...this.brandData, this.form];
      }
    },
    eidt(row) {
      this.dialogFormVisible = true;
      this.form = row;
      let obj = {
        name: row.c_name,
        url: row.brand_logo,
      };
      this.fileList = [obj];
    },
    delbrand(row) {
      this.$confirm("此操作将永久删除该品牌, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          let obj = [];
          this.brandData.forEach((element) => {
            if (row.brand_Name !== element.brand_Name) {
              obj = [...obj, element];
            }
          });
          this.brandData = obj;
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
  },
  created() {
    this.getParam();
  },
};
</script>

<style>
.myinfo {
  display: flex;
  flex-direction: column;
}
.table_pre_text {
  float: left;
}
.brand_info {
  margin-top: 20px;
}
.add_btn {
  float: left;
  margin-top: 20px;
}
.top_text {
  line-height: 20px;
  margin-bottom: 20px;
  margin-top: 10px;
}
.first_text {
  font-size: 20px;
}
.last_text {
  line-height: 22.4px;
}
</style>