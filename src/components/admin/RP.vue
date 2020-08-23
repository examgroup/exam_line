<template>
    <div>
<el-table :data="tableData" stripe style="width: 100%"> 
      <el-table-column prop="adminId" label="adminId" width="180">
      </el-table-column>
      <el-table-column
        prop="adminName"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="pwd"
        label="密码">
      </el-table-column>
      <el-table-column
        prop="rid"
        label="角色id">
      </el-table-column>
      <el-table-column
        prop="rname"
        label="角色">
      </el-table-column>
      <el-table-column
        prop="pid"
        label="权限id">
      </el-table-column>
      <el-table-column
        prop="pname"
        label="权限">
      </el-table-column>
      <el-table-column
        prop="purl"
        label="url">
      </el-table-column>
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row.adminId)" type="text" size="medium">修改</el-button>
        <el-button @click="delectRow(scope.row.adminId)" type="text" size="medium">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
</div>
</template>
<script>
    import axios from 'axios'
    export default {
        name:'',
        data() {
            return {
             tableData: []
                    }
             },
             created(){
                axios.get("/api/getAllRP").then(res=>{
                    this.tableData=res.data
                })
      }
        }
        

</script>
    <style>

        </style>