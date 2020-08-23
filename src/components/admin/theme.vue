<template>
  <div class="div-main">
      <el-table :data="tableData" stripe style="width: 100%"> 
        <el-table-column prop="imgurl" label="头像" width="120">
            <template slot-scope="scope">
            <el-image style="width: 100px; height: 100px"  :src="scope.row.imgurl" fit="fill"></el-image>
            </template>
        </el-table-column>
        <el-table-column prop="adminId" label="adminId" width="180"></el-table-column>
        <el-table-column prop="adminName" label="管理员姓名" width="180" ></el-table-column>
        <el-table-column prop="sex" label="性别"> </el-table-column>
        <el-table-column prop="tel" label="手机号"></el-table-column>
        <el-table-column prop="email" label="邮箱"> </el-table-column>
        <el-table-column prop="cardID" label="身份证号"></el-table-column>
        <el-table-column prop="role" label="权限"></el-table-column>
        
        <el-table-column fixed="right" label="操作" width="100">
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
      data() {
        return {
          tableData: []
        }
      },
      methods:{
        handleAvatarSuccess(res, file) {
          this.imageUrl = URL.createObjectURL(file.raw);
          this.formLabelAlign.imageurl=res;
          alert(this.imageUrl)
        },
        beforeAvatarUpload(file) {
          const isJPG = file.type === 'image/jpeg';
          const isLt2M = file.size / 1024 / 1024 < 2;

          if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
          }
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
          }
          return isJPG && isLt2M;
        },
      
      handleSelect(key, keyPath){
        switch(key){
          case '1':
            this.$router.push('/');
            this.breadcrumbItems  = ['填空题']
            break;
          case '2':
            this.$router.push('/getAllJudge')
            this.breadcrumbItems  = ['判断题']
            break;
          case '3':
            this.$router.push('/getAllMulti')
            this.breadcrumbItems  = ['选择题']
            break;
          case '4':
            this.$router.push('/teachertable')
            this.breadcrumbItems  = ['老师']
            break;
          case '5':
            this.$router.push('/studentTable')
            this.breadcrumbItems  = ['学生']
            break;
            }
          },
        // s
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
<style>

.el-header, .el-footer {
    background-color: #a89090;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .button-add {
    position: fixed;
    right: 20px;
    top: 10px;
  }
  .footer {
  margin-top: 50px;
  text-align: center;
  position: fixed;
  bottom: 100px;
}

</style>