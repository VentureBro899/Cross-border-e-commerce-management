<template>
  <div>
    <div class="top_text">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item class="first_text">品牌商</el-breadcrumb-item>
        <el-breadcrumb-item class="last_text">公司信息</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
    </div>
    <el-form class="add-form" label-position="right" label-width="160px" :model="formLabelAlign">
      <el-form-item label="公司名称（中文）">
        <el-input v-model="formLabelAlign.c_name"></el-input>
      </el-form-item>
      <el-form-item label="公司名称（英文）">
        <el-input v-model="formLabelAlign.e_name"></el-input>
      </el-form-item>
      <el-form-item label="公司简介">
        <el-input
          type="textarea"
          v-model="formLabelAlign.introduction"
        ></el-input>
      </el-form-item>
      <el-form-item label="品牌商认证类型">
        <el-input v-model="formLabelAlign.GMC_report_type"></el-input>
      </el-form-item>
      <el-form-item label="证书地址">
        <el-input v-model="formLabelAlign.GMC_report_url"></el-input>
      </el-form-item>
      <el-divider></el-divider>
      <div class="btn">
        <el-button @click="cancel()">取消</el-button>
        <el-button type="primary" @click="save()">保存</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLabelAlign: {
        c_name: "",
        e_name: "",
        introduction: "",
        GMC_report_type: "",
        GMC_report_url: "",
      },
    };
  },
  methods: {
    cancel() {
      this.$router.push({path: '/brandmyinfo', query: {}});
    },
    getParam() {
      this.formLabelAlign = this.$route.query;
    },
    save() {
      this.$router.push({path: '/brandmyinfo', query: this.formLabelAlign})
    }
  },
  created() {
    this.getParam();
  },
};
</script>

<style>
.btn {
  float: right;
}
.top_text {
  line-height: 20px;
  margin-bottom: 20px;
  margin-top: 10px;
}
.add-form {
  width: 900px;
}
</style>