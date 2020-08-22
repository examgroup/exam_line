<template>
    <div>
      <el-container style="height: 100%; border: 1px solid #eee">
  <el-container>
    <el-header style="font-size: 20px">
      <el-button type="text" @click="addmin" >添加学生信息</el-button>
    </el-header>
    <el-main>
     <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="studentId" label="studentId" width="180">
      </el-table-column>
      <el-table-column
        prop="studentName"
        label="学生姓名"
        width="180">
      </el-table-column>
        <el-table-column
        prop="sex"
        label="性别"
        width="180">
      </el-table-column>
       <el-table-column
        prop="cardId"
        label="身份证"
        width="180">
      </el-table-column>
       <el-table-column
        prop="tel"
        label="电话号码">
      </el-table-column>
    <el-table-column
        prop="email"
        label="电子邮件"
        width="180">
      </el-table-column>
      <el-table-column
        prop="grade"
        label="年级">
      </el-table-column>
      <el-table-column
        prop="major"
        label="专业">
      </el-table-column>
      <el-table-column
        prop="clazz"
        label="班级">
      </el-table-column>
      <el-table-column
        prop="institute"
        label="学院">
      </el-table-column>

    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row.studentId)" type="text" size="medium">修改</el-button>
        <el-button @click="delectRow(scope.row.studentId)" type="text" size="medium">删除</el-button>
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
          this.$router.push("/studentadd/")
        },
        handleClick:function(studentId){
            this.$router.push("/studentupdate/"+studentId)
        },
        delectRow:function(studentId){
          this.$confirm("确定删除吗？","Warning",{
            confirmButtonText: '确定删除',
            cancleButtonText: '算了，留着吧',
            type: 'danger'
          }).then(()=>{
            axios.get("/api/StudentDelete/"+studentId).then(res=>{
              if (res.data==1){
            alert("删除成功")
            window.location.reload();
            // this.$router.push("/theme")
            }
            if (res.data==0){
                  alert("删除失败")
                }

           })
          }).catch(()=>{

          })

        }
      },
      created(){
          axios.get("/api/StudentAll").then(res=>{
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
