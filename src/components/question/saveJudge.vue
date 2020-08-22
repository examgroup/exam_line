<template>
  <div>
    <el-form label-position="right" label-width="80px" :model="formLabelAlign">
      <el-form-item label="考试科目">
        <el-input v-model="formLabelAlign.subject" ></el-input>
      </el-form-item>
      <el-form-item label="试题内容">
        <el-input v-model="formLabelAlign.question"></el-input>
      </el-form-item>
      <el-form-item label="正确答案">
        <el-input v-model="formLabelAlign.answer"></el-input>
      </el-form-item>
      <el-form-item label="题目解析">
        <el-input v-model="formLabelAlign.analysis"></el-input>
      </el-form-item>
      <el-form-item label="分数" >
        <el-input  v-model="formLabelAlign.score" ></el-input>
      </el-form-item>
      <el-form-item label="难度等级">
        <el-input v-model="formLabelAlign.level"></el-input>
      </el-form-item>
      <el-form-item label="所属章节">
        <el-input v-model="formLabelAlign.section"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"  @click="submitForm('formLabelAlign')">提交</el-button>
        <el-button @click="resetForm('formLabelAlign')">重置</el-button>
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
        formLabelAlign: {
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
        axios.post("/api/saveJudge",this.formLabelAlign).then(res=>{
          if (res.data=="success"){
            alert("成功添加")
            this.$router.push("/getAllJudge")
          }

          if(res.data=="fail"){
            alert("添加失败")
            this.$router.push("/getAllJudge")
          }
        })
      }

    }

  }
</script>

<style scoped>

</style>
