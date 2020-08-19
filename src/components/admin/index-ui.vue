<template>
  
   
    
  
    <el-table :data="tableData" stripe style="width: 100%">
     
      
      <el-table-column prop="adminId" label="adminId" width="180">
      </el-table-column>
      <el-table-column
        prop="adminName"
        label="管理员姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="tel"
        label="手机号">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱">
      </el-table-column>
      <el-table-column
        prop="cardID"
        label="身份证号">
      </el-table-column>
      <el-table-column
        prop="role"
        label="权限">
      </el-table-column>
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row.adminId)" type="text" size="small">修改</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
    
  </template>
  
  <script>
   import axios from 'axios'
    export default {
      data() {
        return {
          tableData: []
        }
      },
      methods:{
        handleClick:function(adminId){
            this.$router.push("/updateadmin/"+adminId)
        }
      },
      created(){
          axios.get("/api/AllAdmins").then(res=>{
              this.tableData=res.data
          })
      }
    };
  </script>
  <style scoped>

    </style>
  