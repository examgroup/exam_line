<template>
    <div>
      <el-container style="height: 100%; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>权限管理</template>
        <el-menu-item-group>
          <template slot="title">管理员列表</template>
          <el-menu-item index="1-1">管理员列表</el-menu-item>
        </el-menu-item-group> 
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="font-size: 20px">
      <span style="text-align: center; ">管理员列表</span>
      
      <el-button type="text" @click="addmin" >添加管理员信息</el-button>
    </el-header>
    
    <el-main>
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
        <el-button @click="handleClick(scope.row.adminId)" type="text" size="medium">修改</el-button>
        <el-button @click="delectRow(scope.row.adminId)" type="text" size="medium">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
    
    </el-main>
  </el-container>
</el-container>

    </div>
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
        addmin:function(){
          this.$router.push("/addadmin/")
        },
        handleClick:function(adminId){
            this.$router.push("/updateadmin/"+adminId)
        },
        delectRow:function(adminId){
          this.$confirm("确定删除吗？","Warning",{
            confirmButtonText: '确定删除',
            cancleButtonText: '算了，留着吧',
            type: 'danger'
          }).then(()=>{
            axios.get("/api/deleteAdminById/"+adminId).then(res=>{
              if (res.data==1){
            alert("删除成功")
            window.location.reload();
            // this.$router.push("/theme")
            }
            if (res.data==0){
                  alert("注册失败")
                }  
          
           })
          }).catch(()=>{

          })
      
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
 .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }

</style>
