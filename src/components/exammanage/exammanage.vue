<template>
    <div>
        <el-table :data="tableData" stripe style="width: 100%"> 
            <el-table-column prop="examCode" label="考试编号" width="50px" text-align="center"></el-table-column>
            <el-table-column prop="description" label="考试介绍" width="120px" text-align="center"></el-table-column>
            <el-table-column prop="source" label="课程名称" width="120px" text-align="center"></el-table-column>
            <el-table-column prop="paperId" label="试卷编号" width="50px" text-align="center"></el-table-column>
            <el-table-column prop="examDate" label="考试日期" width="120px" text-align="center"></el-table-column>
            <el-table-column prop="totalTime" label="持续时长" width="120px"></el-table-column>
            <el-table-column prop="grade" label="年级" width="120px"></el-table-column>
            <el-table-column prop="term" label="学期" width="120px"></el-table-column>
            <el-table-column prop="major" label="专业" width="120px"></el-table-column>
            <el-table-column prop="institute" label="学院" width="120px"></el-table-column>
            <el-table-column prop="totalScore" label="总分" width="120px"></el-table-column>
            <el-table-column prop="tips" label="考生须知" width="120px"></el-table-column>
            <el-table-column prop="type" label="考试类型" width="120px"></el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row.examCode)" type="text" size="medium">开始考试</el-button>
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
             methods:{
                handleClick:function(examCode){
                         this.$router.push("/exam/"+examCode)
            },

             },
             created(){
                axios.get("/api/getExamManage").then(res=>{
                    this.tableData=res.data
                })
      }
        }

    </script>

    <style>


        </style>