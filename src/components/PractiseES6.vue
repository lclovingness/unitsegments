<template>
  <div>
  <h3>{{titleES6}}</h3>
  <br>
    <h5>a=[]</h5>
    <h5>a[0]=[["14000",0.50],["15000",0.75],["14000",0.65],["13000",0.95]]</h5>
    <h5>a[1]=[["14000",1.50],["12340",0.75],["13250",0.55],["11235",0.88]]</h5>
    <br>
    <br/>
    <Button size="large" type="primary" @click="startHacking('xx')" id="iViewBtn">iView按钮</Button>
    <br/>
    <br/>
    <el-button type="warning" @click="dependent_01=true" id="eleBtn">ElementUI按钮</el-button>
    <br/>
    <br>
    <button type="button" @click="dd" class="u-normalBtn" id="normalBtn">普通HTML按钮</button>
    <br>
    <br>
    <div v-show="dependent_01">{{result_01}}</div>
  </div>
</template>

<style>
.u-normalBtn{
  font-size:14px;

  padding:5px;
}

</style>

<script>


  export default {
    name: 'Practise_ES6_01',
    data:function() {
      return {
        show_01:false,
        dependent_01:false,
        result_01:'好的，吃饭了',
        titleES6: '开始练习es6'
      }
    }
    ,
    watch: {

    },
    methods:{
      startHacking(type){
        let evt = window.event || e;
        let obj = evt.target;

        for(var i in obj)
        {
          console.log("pp")
        }

        alert(obj+"~~~~~"+type);

      },

      dd(){

        let evt = window.event || e;
        let obj = evt.target;

        alert(obj.id+"~~"+"dd");

      },
      compactTheSpecifalArr(a) {
        //去除重复元素，按时间升序排列
        let unique = function (arr) {

          var result = [],
            hash = {};
          for (var i = 0, elem;
               (elem = arr[i]) != null; i++) {
            if (!hash[elem]) {
              result.push(elem);
              hash[elem] = true;
            }
          }
          return result;

        }

        let ascend_index_2 = function (x, y) {
          return x[2] - y[2]; //按照数组的第3个值升序排列
        }

        for (var i = 0; i < a.length; i++) {
          a[i].sort(ascend_index_2)
          a[i] = unique(a[i]);
        }

      },
    }
  }

</script>
/* eslint-disable */

