<template>
    
    <div>
        
        <div>
        <el-table  :data="multi" stripe style="width: 100%"  > 
            <el-table-column prop="question" label="选择题" width="400px" text-align="center"></el-table-column>
            <el-table-column prop="answerA" label="A" width="90px" text-align="center"></el-table-column>
            <el-table-column prop="answerB" label="B" width="90px" text-align="center"></el-table-column>
            <el-table-column prop="answerC" label="C" width="90px" text-align="center"></el-table-column>
            <el-table-column prop="answerD" label="D" width="90px" text-align="center"></el-table-column>
         <el-table-column fixed="right" label="选项" width="500px">
            <el-radio-group v-model="radio1">
                <el-radio-button label="A"></el-radio-button>
                <el-radio-button label="B"></el-radio-button>
                <el-radio-button label="C"></el-radio-button>
                <el-radio-button label="D"></el-radio-button>
            </el-radio-group>  
         

          </el-table-column>
        </el-table>
         </div>
         <div>
        <el-table  :data="fill" stripe style="width: 100%"  > 
            <el-table-column prop="question" label="填空题" width="500px" text-align="center"></el-table-column>
         <el-table-column fixed="right" label="填空" width="500px">
            <el-input placeholder="请输入内容" v-model="input.text" type="text" @input="change($event)" clearable></el-input>
          </el-table-column>
        </el-table>
    </div>
    <div>
        <el-table  :data="judge" stripe style="width: 100%"  > 
            <el-table-column prop="question" label="判断题" width="500px" text-align="center"></el-table-column>
            
         <el-table-column fixed="right" label="请判断" width="500px">
            
            <el-radio-group v-model="radio2">
                <el-radio-button  label="√"></el-radio-button>
                <el-radio-button  label="×"></el-radio-button>
              </el-radio-group>  
              
          </el-table-column>
        </el-table>
    </div>
    

        
    </div>
</template>
<script>
import axios from 'axios'
    export default {
        name:'',
        
        data() {

            return {
                multi: [],
                fill:[],
                judge:[],
                radio1:'',
                radio2:'',
                radio0:'',
                input:''
                   
                
                
            };
        },
        methods:{
            
            handleClick:function(examCode){
                         this.$router.push("/#/"+examCode)
                },

             },
             change(e){
                this.$forceUpdate
             },
             created(){
                //alert(123)
                var a =  this.$route.params.examCode
            //通过id 去后台进行查询数据
                        
                axios.get("/api/getExamBank/"+a).then(res=>{
                    console.log(res.data.three[0])
                    this.fill=res.data.first;
                    
                    this.judge=res.data.second;
                    this.multi=res.data.three;
             })


                this.multi = []
                this.fill = []
                this.judge = []
        },
        }

    </script>

    <style>


        </style>