<template>
  <div>
    <el-container style="height: 100%; border: 1px solid #eee">

      <el-container>
        <el-header style="font-size: 20px">
          <el-button type="text" @click="save" >添加填空题试题</el-button>
        </el-header>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="questionId"
      label="ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="subject"
      label="考试科目"
      width="180">
    </el-table-column>
    <el-table-column
      prop="question"
      label="试题内容">
    </el-table-column>
    <el-table-column
      prop="answer"
      label="正确答案">
    </el-table-column>
    <el-table-column
      prop="analysis"
      label="题目解析">
    </el-table-column>
    <el-table-column
      prop="score"
      label="分数">
    </el-table-column>
    <el-table-column
      prop="level"
      label="难度等级">
    </el-table-column>
    <el-table-column
      prop="section"
      label="所属章节">
    </el-table-column>

    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row.questionId)" type="text" size="small">修改</el-button>
        <el-button @click="deleteById(scope.row.questionId)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
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
        save:function () {
          this.$router.push("/saveFill/")
        },
      handleClick:function(questionId){
        this.$router.push("/updateFill/"+questionId)
      },
      deleteById(questionId) { //删除
        this.$confirm("确定删除这道试题吗？删除后无法恢复",{
          confirmButtonText: '确定删除',
          cancelButtonText: '算了,留着吧',
        }).then(()=>{
          axios.get("/api/deleteFill/"+questionId).then(res=>{
            if (res.data=="success"){
              alert("删除成功")
              window.location.reload();
              // this.$router.push("/theme")
            }
          })
        }).catch(()=>{
        })
      }
    },
    created(){
      axios.get("/api/Fill").then(res=>{
        this.tableData=res.data
      })
    }
  };
</script>
<style scoped>

</style>
