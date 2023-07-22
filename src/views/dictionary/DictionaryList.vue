<template>
  <div id="dictionary">
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="type" label="字典类型" width="120" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="description" label="用例描述" width="150" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="ecode" label="编码"></el-table-column>
      <el-table-column prop="ecodevalue" label="编码值">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)"></el-button>
          <el-button size="mini" type="danger" icon="el-icon-delete" @click="handleDelete(scope.$index, scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button style="margin: 20px 5px;float: left;" type="success" size="mini" @click="dialogFormVisible = true">新增</el-button>
    <el-dialog title="数据字典信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="字典类型" :label-width="formLabelWidth">
          <el-input v-model="form.type" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用例描述" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.description" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="编码" :label-width="formLabelWidth">
          <el-input v-model="form.ecode" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="编码值" :label-width="formLabelWidth">
          <el-input v-model="form.ecodevalue" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">添加</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { type: '类型1', description: '描述1', ecode: '001', ecodevalue: '值1' },
        { type: '类型2', description: '描述2', ecode: '002', ecodevalue: '值2' },
        { type: '类型3', description: '描述3', ecode: '003', ecodevalue: '值3' },
        { type: '类型4', description: '描述4', ecode: '004', ecodevalue: '值4' },
        { type: '类型5', description: '描述5', ecode: '005', ecodevalue: '值5' }
      ],
      multipleSelection: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: '120px',
      form: { type: '', description: '', ecode: '', ecodevalue: '' }
    }
  },

  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
      console.log(val)
    },
    add() {
      this.tableData.push(this.form)
      console.log(this.form)
      console.log(this.tableData)
      this.dialogFormVisible = false
    }
  }
}
</script>

<style>
</style>