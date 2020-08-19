<template>
  <div>
    <el-form label-position="right" label-width="80px" :model="Fill">
      <el-form-item label="考试科目">
        <el-input v-model="Fill.subject" ></el-input>
      </el-form-item>
      <el-form-item label="试题内容">
        <el-input v-model="Fill.question"></el-input>
      </el-form-item>
      <el-form-item label="正确答案">
        <el-input v-model="Fill.answer"></el-input>
      </el-form-item>
      <el-form-item label="题目解析">
        <el-input v-model="Fill.analysis"></el-input>
      </el-form-item>
      <el-form-item label="分数" >
        <el-input  v-model="Fill.score" ></el-input>
      </el-form-item>
      <el-form-item label="难度等级">
        <el-input v-model="Fill.level"></el-input>
      </el-form-item>
      <el-form-item label="所属章节">
        <el-input v-model="Fill.section"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"  @click="submitForm('Fill')">提交</el-button>
        <el-button @click="resetForm('Fill')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: "",
    data(){
      return{
        Fill: {
          subject: '',
          question: '',
          answer: '',
          analysis:'',
          score:'',
          level:'',
          section:''
        }
      }
    },
    methods: {
      submitForm(formName){
        axios.post("/api/saveFill",this.Fill).then(res=>{
          if (res.data=="success"){
            alert("成功添加")
            this.$router.push("/getAllFill")
          }

          if(res.data=="fail"){
            alert("添加失败")
            this.$router.push("/getAllFill")
          }
        })
      }

    }

  }
</script>

<style scoped>

</style>
