<template>
  <div class="content-wrapper" style="overflow:hidden">
    <div class="content-heading">
      <div id="title">R.M.R Check List<small data-localize="dashboard.WELCOME"></small>
      </div>
      <!-- <div class="button_area">
        <b-button id="save" class="btn btn-primary" variant="danger" v-on:click="save">저장</b-button>
      </div> -->
      <div class="row">
        <div class="table-responsive">
          <b-table-simple hover bordered responsive>
            <b-tr>
              <b-td colspan="13">공 사 명 : XX-XX간 도로공사 일시 : 2021년 2월 2일</b-td>
            </b-tr>
            <b-tr>
              <b-td colspan="2">터널구간</b-td>
              <b-td colspan="2">방향</b-td>
              <b-td colspan="2">특징</b-td>
              <b-td colspan="4">STA.13 +</b-td>
              <b-td colspan="3">시정부</b-td>
            </b-tr>
            <b-tr>
              <b-td colspan="13">1. 항목별 평가</b-td>
            </b-tr>
            <b-tr>
              <b-td rowspan="2">①</b-td>
              <b-td>해머타격상태</b-td>
              <b-td colspan="2">해머타격시 튀어오르고 불꽃이 튀는 정도(극경암)</b-td>
              <b-td colspan="2">강한 해머타격에 갈라지며 불연속면을 따라 비교적 크게 갈라짐(경암)</b-td>
              <b-td colspan="2">해머타격에 갈라지며 불연속면을 따라 비교적 소면으로 갈라짐(연암)</b-td>
              <b-td colspan="2">해머를 치면 XXX을 내고 부서지며 균열이 되면서 갈라짐 (연암-풍화암)</b-td>
              <b-td colspan="3">약한 해머타격에 부서지고 일부 손으로도 부서질 정도로 긁힌다 (풍화암-풍화토)</b-td>
            </b-tr>
            <b-tr>
              <b-td>일축압축강도 (㎏/㎠)</b-td>
              <b-td colspan="2" class="ss"><input type="radio" name="cellcolorchange1" id="strength" value="15"
                class="num" v-model="strength"/>&gt; 2500
              </b-td>
              <b-td colspan="2" class="ss"><input type="radio" name="cellcolorchange1" id="strength" value="12"
                class="num" v-model="strength"/>2500 - 1000
              </b-td>
              <b-td colspan="2" class="ss"><input type="radio" name="cellcolorchange1" id="strength" value="7"
                class="num" v-model="strength"/>1000 - 500
              </b-td>
              <b-td colspan="2" class="ss"><input type="radio" name="cellcolorchange1" id="strength" value="4"
                class="num" v-model="strength"/>500 - 250
              </b-td>
              <b-td colspan="3" class="ss"><input type="radio" name="cellcolorchange1" id="strength" value="2"
                class="num" v-model="strength"/>&lt; 250
              </b-td>
            </b-tr>
            <b-tr>
              <b-td colspan="2">평점</b-td>
              <b-td colspan="2">15</b-td>
              <b-td colspan="2">12</b-td>
              <b-td colspan="2">7</b-td>
              <b-td colspan="2">4</b-td>
              <b-td colspan="3">2</b-td>
            </b-tr>
            <b-tr>
              <b-td colspan="2">
                ②<br/>
                암질계수(%)
              </b-td>
              <b-td colspan="2" class="co"><input type="radio" name="cellcolorchange2" id="coefficient" value="20"
                class="num" v-model="coefficient"/>90-100
              </b-td>
              <b-td colspan="2" class="co"><input type="radio" name="cellcolorchange2" id="coefficient" value="17"
                class="num" v-model="coefficient"/>75 - 90
              </b-td>
              <b-td colspan="2" class="co"><input type="radio" name="cellcolorchange2" id="coefficient" value="13"
               class="num" v-model="coefficient"/>50 - 75
             </b-td>
             <b-td colspan="2" class="co"><input type="radio" name="cellcolorchange2" id="coefficient" value="8"
               class="num" v-model="coefficient"/>25
               - 50
             </b-td>
             <b-td colspan="3" class="co"><input type="radio" name="cellcolorchange2" id="coefficient" value="3"
               class="num" v-model="coefficient"/>&lt; 25
             </b-td>
           </b-tr>
           <b-tr>
            <b-td colspan="2">평점</b-td>
            <b-td colspan="2">20</b-td>
            <b-td colspan="2">17</b-td>
            <b-td colspan="2">13</b-td>
            <b-td colspan="2">8</b-td>
            <b-td colspan="3">3</b-td>
          </b-tr>
          <b-tr>
            <b-td colspan="2">
              ③<br/>
              절리면 간격
            </b-td>
            <b-td colspan="2" class="sp"><input type="radio" name="cellcolorchange3" id="joint_spacing" value="20"
             class="num" v-model="joint_spacing"/>&gt; 2m
           </b-td>
           <b-td colspan="2" class="sp"><input type="radio" name="cellcolorchange3" id="joint_spacing" value="15"
             class="num" v-model="joint_spacing"/>0.6 ~ 2m
           </b-td>
           <b-td colspan="2" class="sp"><input type="radio" name="cellcolorchange3" id="joint_spacing" value="10"
             class="num" v-model="joint_spacing"/>600~200mm
           </b-td>
           <b-td colspan="2" class="sp"><input type="radio" name="cellcolorchange3" id="joint_spacing" value="8"
             class="num" v-model="joint_spacing"/>60~200mm
           </b-td>
           <b-td colspan="3" class="sp"><input type="radio" name="cellcolorchange3" id="joint_spacing" value="5"
             class="num" v-model="joint_spacing"/>&lt; 60mm
           </b-td>
         </b-tr>
         <b-tr>
          <b-td colspan="2">평점</b-td>
          <b-td colspan="2">20</b-td>
          <b-td colspan="2">15</b-td>
          <b-td colspan="2">10</b-td>
          <b-td colspan="2">8</b-td>
          <b-td colspan="3">5</b-td>
        </b-tr>
        <b-tr>
          <b-td rowspan="10">
            ④<br/>
            불연속면의 상태
          </b-td>
          <b-td>절리길이</b-td>
          <b-td colspan="2" class="le"><input type="radio" name="cellcolorchange4" id="joint_length" value="6"
           class="num" v-model="joint_length"/>1m 미만
         </b-td>
         <b-td colspan="2" class="le"><input type="radio" name="cellcolorchange4" id="joint_length" value="4"
           class="num" v-model="joint_length"/>1~3m
         </b-td>
         <b-td colspan="2" class="le"><input type="radio" name="cellcolorchange4" id="joint_length" value="2"
           class="num" v-model="joint_length"/>3~10m
         </b-td>
         <b-td colspan="2" class="le"><input type="radio" name="cellcolorchange4" id="joint_length" value="1"
           class="num" v-model="joint_length"/>10~20m
         </b-td>
         <b-td colspan="3" class="le"><input type="radio" name="cellcolorchange4" id="joint_length" value="0"
           class="num" v-model="joint_length"/>20m이상
         </b-td>
       </b-tr>
       <b-tr>
        <b-td>평점</b-td>
        <b-td colspan="2">6</b-td>
        <b-td colspan="2">4</b-td>
        <b-td colspan="2">2</b-td>
        <b-td colspan="2">1</b-td>
        <b-td colspan="3">0</b-td>
      </b-tr>
      <b-tr>
        <b-td>절리틈새</b-td>
        <b-td colspan="2" class="ga"><input type="radio" name="cellcolorchange5" id="joint_gap" value="6"
         class="num" v-model="joint_gap"/>없음
       </b-td>
       <b-td colspan="2" class="ga"><input type="radio" name="cellcolorchange5" id="joint_gap" value="5"
         class="num" v-model="joint_gap"/>0.1mm이하
       </b-td>
       <b-td colspan="2" class="ga"><input type="radio" name="cellcolorchange5" id="joint_gap" value="4"
         class="num" v-model="joint_gap"/>0.1~1.0mm
       </b-td>
       <b-td colspan="2" class="ga"><input type="radio" name="cellcolorchange5" id="joint_gap" value="1"
         class="num" v-model="joint_gap"/>1~5mm
       </b-td>
       <b-td colspan="3" class="ga"><input type="radio" name="cellcolorchange5" id="joint_gap" value="0"
         class="num" v-model="joint_gap"/>5mm
         이상
       </b-td>
     </b-tr>
     <b-tr>
      <b-td>평점</b-td>
      <b-td colspan="2">6</b-td>
      <b-td colspan="2">5</b-td>
      <b-td colspan="2">4</b-td>
      <b-td colspan="2">1</b-td>
      <b-td colspan="3">0</b-td>
    </b-tr>
    <b-tr>
      <b-td>거칠기</b-td>
      <b-td colspan="2" class="as"><input type="radio" name="cellcolorchange6" id="asperity" value="6"
       class="num" v-model="asperity"/>아주
       거침
     </b-td>
     <b-td colspan="2" class="as"><input type="radio" name="cellcolorchange6" id="asperity" value="4"
       class="num" v-model="asperity"/>거침
     </b-td>
     <b-td colspan="2" class="as"><input type="radio" name="cellcolorchange6" id="asperity" value="2"
       class="num" v-model="asperity"/>약간
       거침
     </b-td>
     <b-td colspan="2" class="as"><input type="radio" name="cellcolorchange6" id="asperity" value="1"
       class="num" v-model="asperity"/>평탄
     </b-td>
     <b-td colspan="3" class="as"><input type="radio" name="cellcolorchange6" id="asperity" value="0"
       class="num" v-model="asperity"/>평면
     </b-td>
   </b-tr>
   <b-tr>
    <b-td>평점</b-td>
    <b-td colspan="2">6</b-td>
    <b-td colspan="2">4</b-td>
    <b-td colspan="2">2</b-td>
    <b-td colspan="2">2</b-td>
    <b-td colspan="3">0</b-td>
  </b-tr>
  <b-tr>
    <b-td>충전물</b-td>
    <b-td colspan="2" class="fi"><input type="radio" name="cellcolorchange7" id="filling" value="6" class="num" v-model="filling"/>없음
    </b-td>
    <b-td colspan="2" class="fi"><input type="radio" name="cellcolorchange7" id="filling" value="5" class="num" v-model="filling"/>경질
      &lt; 5
    </b-td>
    <b-td colspan="2" class="fi"><input type="radio" name="cellcolorchange7" id="filling" value="3" class="num" v-model="filling"/>경질
      &gt; 5
    </b-td>
    <b-td colspan="2" class="fi"><input type="radio" name="cellcolorchange7" id="filling" value="1" class="num" v-model="filling"/>연질
      &lt; 5
    </b-td>
    <b-td colspan="3" class="fi"><input type="radio" name="cellcolorchange7" id="filling" value="0" class="num" v-model="filling"/>연질
      &gt; 5
    </b-td>
  </b-tr>
  <b-tr>
    <b-td>평점</b-td>
    <b-td colspan="2">6</b-td>
    <b-td colspan="2">5</b-td>
    <b-td colspan="2">3</b-td>
    <b-td colspan="2">1</b-td>
    <b-td colspan="3">0</b-td>
  </b-tr>
  <b-tr>
    <b-td>풍화도</b-td>
    <b-td colspan="2" class="we"><input type="radio" name="cellcolorchange8" id="weathering_degree" value="6"
     class="num" v-model="weathering_degree"/>신선
   </b-td>
   <b-td colspan="2" class="we"><input type="radio" name="cellcolorchange8" id="weathering_degree" value="5"
     class="num" v-model="weathering_degree"/>약간 풍화
   </b-td>
   <b-td colspan="2" class="we"><input type="radio" name="cellcolorchange8" id="weathering_degree" value="3"
     class="num" v-model="weathering_degree"/>보통
   </b-td>
   <b-td colspan="2" class="we"><input type="radio" name="cellcolorchange8" id="weathering_degree" value="1"
     class="num" v-model="weathering_degree"/>심한 풍화
   </b-td>
   <b-td colspan="3" class="we"><input type="radio" name="cellcolorchange8" id="weathering_degree" value="0"
     class="num" v-model="weathering_degree"/>완전 분해
   </b-td>
 </b-tr>
 <b-tr>
  <b-td>평점</b-td>
  <b-td colspan="2">6</b-td>
  <b-td colspan="2">5</b-td>
  <b-td colspan="2">3</b-td>
  <b-td colspan="2">1</b-td>
  <b-td colspan="3">0</b-td>
</b-tr>
<b-tr>
  <b-td rowspan="2" class="water">
    ⑤<br/>
    지하수
  </b-td>
  <b-td>일반적인 상태</b-td>
  <b-td colspan="2">건조상태</b-td>
  <b-td colspan="2">습윤</b-td>
  <b-td colspan="2">젖음</b-td>
  <b-td colspan="2">벽면을 타고 물이 흐름</b-td>
  <b-td colspan="3">피압수, 집중출수</b-td>
</b-tr>
<b-tr>
  <b-td>10m당 유입량(ℓ/min)</b-td>
  <b-td colspan="2" class="un"><input type="radio" name="cellcolorchange9" id="underground_water" value="15"
   class="num" v-model="underground_water"/>없음
 </b-td>
 <b-td colspan="2" class="un"><input type="radio" name="cellcolorchange9" id="underground_water" value="10"
   class="num" v-model="underground_water"/>10미만
 </b-td>
 <b-td colspan="2" class="un"><input type="radio" name="cellcolorchange9" id="underground_water" value="7"
   class="num" v-model="underground_water"/>10~25
 </b-td>
 <b-td colspan="2" class="un"><input type="radio" name="cellcolorchange9" id="underground_water" value="4"
   class="num" v-model="underground_water"/>25~125
 </b-td>
 <b-td colspan="3" class="un"><input type="radio" name="cellcolorchange9" id="underground_water" value="0"
   class="num" v-model="underground_water"/>125초과
 </b-td>
</b-tr>
<b-tr>
  <b-td colspan="2">평점</b-td>
  <b-td colspan="2">15</b-td>
  <b-td colspan="2">10</b-td>
  <b-td colspan="2">7</b-td>
  <b-td colspan="2">4</b-td>
  <b-td colspan="3">0</b-td>
</b-tr>
<b-tr>
  <b-td rowspan="4">
    ⑤<br/>
    절리방향에 따른 보정
  </b-td>
  <b-td>주향</b-td>
  <b-td colspan="8">주향이 터널방향과 수직</b-td>
  <b-td colspan="2" rowspan="2">주향과 터널축이 평행</b-td>
  <b-td rowspan="2">주향에 상관없음</b-td>
</b-tr>
<b-tr>
  <b-td>경사방향</b-td>
  <b-td colspan="4">경사방향굴착</b-td>
  <b-td colspan="4">경사방향과 반대로 굴착</b-td>
</b-tr>
<b-tr>
  <b-td>경사각</b-td>
  <b-td colspan="2">45˚ ~ 90˚</b-td>
  <b-td colspan="2">20˚ ~ 45˚</b-td>
  <b-td colspan="2">45˚ ~ 90˚</b-td>
  <b-td colspan="2">20˚ ~ 45˚</b-td>
  <b-td>45˚ ~ 90˚</b-td>
  <b-td>20˚ ~ 45˚</b-td>
  <b-td>0˚ ~ 20˚</b-td>
</b-tr>
<b-tr>
  <b-td>보정치</b-td>
  <b-td colspan="2">0</b-td>
  <b-td colspan="2">-2</b-td>
  <b-td colspan="2">-5</b-td>
  <b-td colspan="2">-10</b-td>
  <b-td>-12</b-td>
  <b-td>-5</b-td>
  <b-td>-5</b-td>
</b-tr>
<b-tr>
  <b-td rowspan="2">지보분류</b-td>
  <b-td>총평점</b-td>
  <b-td>91~100</b-td>
  <b-td>81~90</b-td>
  <b-td>61~80</b-td>
  <b-td>41~60</b-td>
  <b-td>21~40</b-td>
  <b-td>20이하</b-td>
  <b-td>20이하</b-td>
  <b-td>-</b-td>
  <b-td>-</b-td>
  <b-td colspan="2">비 고</b-td>
</b-tr>
<b-tr>
  <b-td>Type</b-td>
  <b-td>type-1A</b-td>
  <b-td>type-1B</b-td>
  <b-td>type-2</b-td>
  <b-td>type-3</b-td>
  <b-td>type-4</b-td>
  <b-td>type-5A</b-td>
  <b-td>type-5B</b-td>
  <b-td>type-6A</b-td>
  <b-td>type-6B</b-td>
  <b-td colspan="2"></b-td>
</b-tr>
<b-tr>
  <b-td colspan="2">2. 총 점(①+②+③+④+⑤)-⑥</b-td>
  <b-td colspan="6" id="sum" style="font-size: 1.5875rem; background-color: #dff0d8;">{{ sum }}</b-td>
  <b-td colspan="2">특기사항</b-td>
  <b-td colspan="3"></b-td>
</b-tr>
</b-table-simple>
</div>
</div>
</div>
</div>
</template>
<script>
// json 가져오기
// import json from '../assets/RmrList.json'
export default {
  name: 'RmrTable.vue',
  components: {
  },
  data(){
    return{
      strength: 0,
      coefficient: 0,
      joint_spacing: 0,
      joint_length: "",
      joint_gap: "",
      asperity: "",
      filling: "",
      weathering_degree: "",
      underground_water: "",
      list :[0,0,0,0,0,0,0,0,0],
      sum: 0
      // RmrList : json
    }
    console.log(sum)
  },
  // 라디오 버튼의 값을 sum에 넣어 총점에 바로 더해지고 배경색 변경 
  watch:{
    strength: function(){

      // 배경색 변경
      var list = this.$el.querySelectorAll('.ss > input');
      for(var i=0; i< list.length; i++){
        if(list[i].value == this.strength){
          var list2 = this.$el.querySelectorAll('.ss');
          list2[i].style.background= "#dff0d8";
        } 

      // 배경색 초기화
      if(list[i].value != this.strength){
        var list2 = this.$el.querySelectorAll('.ss');
        list2[i].style.background = "white";
      }
    }

    // list[] 0번에 strength 값 담기
    this.list[0] = Number(this.strength);

    var sum = 0;
    for(var i=0; i< this.list.length; i++){
     sum += this.list[i]
   }

   this.sum = sum;
  },
 coefficient: function(){

      // 배경색 변경
      var list = this.$el.querySelectorAll('.co > input');
      for(var i=0; i< list.length; i++){
        if(list[i].value == this.coefficient){
          var list2 = this.$el.querySelectorAll('.co');
          list2[i].style.background= "#dff0d8";
        }

      // 배경색 초기화
      if(list[i].value != this.coefficient){
        var list2 = this.$el.querySelectorAll('.co');
        list2[i].style.background = "white";
      }
    }

    // list[] 1번에 coefficient 값 담기
    this.list[1] = Number(this.coefficient);

    var sum = 0;
    for(var i=0; i< this.list.length; i++){
     sum += this.list[i]
   }

   this.sum = sum;
 },
 joint_spacing: function(){

      // 배경색 변경
      var list = this.$el.querySelectorAll('.sp > input');
      for(var i=0; i< list.length; i++){
        if(list[i].value == this.joint_spacing){
          var list2 = this.$el.querySelectorAll('.sp');
          list2[i].style.background= "#dff0d8";
        }
      // 배경색 초기화
      if(list[i].value != this.joint_spacing){
        var list2 = this.$el.querySelectorAll('.sp');
        list2[i].style.background = "white";
      }
    }
    // list[] 3번에 joint_spacing 값 담기
    this.list[2] = Number(this.joint_spacing);
    var sum = 0;
    for(var i=0; i< this.list.length; i++){
     sum += this.list[i]
   }

   this.sum = sum;
 },
 joint_length: function(){

      // 배경색 변경
      var list = this.$el.querySelectorAll('.le > input');
      for(var i=0; i< list.length; i++){
        if(list[i].value == this.joint_length){
          var list2 = this.$el.querySelectorAll('.le');
          list2[i].style.background= "#dff0d8";
        }
      // 배경색 초기화
      if(list[i].value != this.joint_length){
        var list2 = this.$el.querySelectorAll('.le');
        list2[i].style.background = "white";
      }
    }
    // list[] 4번에 joint_length 값 담기
    this.list[3] = Number(this.joint_length);
    var sum = 0;
    for(var i=0; i< this.list.length; i++){
     sum += this.list[i]
   }

   this.sum = sum;
 },
 joint_gap: function(){

      // 배경색 변경
      var list = this.$el.querySelectorAll('.ga > input');
      for(var i=0; i< list.length; i++){
        if(list[i].value == this.joint_gap){
          var list2 = this.$el.querySelectorAll('.ga');
          list2[i].style.background= "#dff0d8";
        }
      // 배경색 초기화
      if(list[i].value != this.joint_gap){
        var list2 = this.$el.querySelectorAll('.ga');
        list2[i].style.background = "white";
      }
    }
    // list[] 5번에 joint_gap 값 담기
    this.list[4] = Number(this.joint_gap);
    var sum = 0;
    for(var i=0; i< this.list.length; i++){
     sum += this.list[i]
   }

   this.sum = sum;
 },
 asperity: function(){

      // 배경색 변경
      var list = this.$el.querySelectorAll('.as > input');
      for(var i=0; i< list.length; i++){
        if(list[i].value == this.asperity){
          var list2 = this.$el.querySelectorAll('.as');
          list2[i].style.background= "#dff0d8";
        }
      // 배경색 초기화
      if(list[i].value != this.asperity){
        var list2 = this.$el.querySelectorAll('.as');
        list2[i].style.background = "white";
      }
    }

     // value값이 동일하여 두개의 버튼이 헷갈려 하는 걸 변경함
     // list[] 6번에 asperity 값 담기
     if(this.asperity == 1){
      this.list[5] = Number(this.asperity) +1;
      var sum = 0;
      for(var i=0; i< this.list.length; i++){
       sum += this.list[i]
     }

     this.sum = sum;
   }else {
    this.list[5] = Number(this.asperity);
    var sum = 0;
    for(var i=0; i< this.list.length; i++){
     sum += this.list[i]
   }

   this.sum = sum;
 }
},
filling: function(){

      // 배경색 변경
      var list = this.$el.querySelectorAll('.fi > input');
      for(var i=0; i< list.length; i++){
        if(list[i].value == this.filling){
          var list2 = this.$el.querySelectorAll('.fi');
          list2[i].style.background= "#dff0d8";
        }
      // 배경색 초기화
      if(list[i].value != this.filling){
        var list2 = this.$el.querySelectorAll('.fi');
        list2[i].style.background = "white";
      }
    }
    // list[] 7번에 filling 값 담기
    this.list[6] = Number(this.filling);
    var sum = 0;
    for(var i=0; i< this.list.length; i++){
     sum += this.list[i]
   }

   this.sum = sum;
 },
 weathering_degree: function(){

      // 배경색 변경
      var list = this.$el.querySelectorAll('.we > input');
      for(var i=0; i< list.length; i++){
        if(list[i].value == this.weathering_degree){
          var list2 = this.$el.querySelectorAll('.we');
          list2[i].style.background= "#dff0d8";
        }
      // 배경색 초기화
      if(list[i].value != this.weathering_degree){
        var list2 = this.$el.querySelectorAll('.we');
        list2[i].style.background = "white";
      }
    }
    // list[] 8번에 weathering_degree 값 담기
    this.list[7] = Number(this.weathering_degree);
    var sum = 0;
    for(var i=0; i< this.list.length; i++){
     sum += this.list[i]
   }

   this.sum = sum;
 },
 underground_water: function(){

      // 배경색 변경
      var list = this.$el.querySelectorAll('.un > input');
      for(var i=0; i< list.length; i++){
        if(list[i].value == this.underground_water){
          var list2 = this.$el.querySelectorAll('.un');
          list2[i].style.background= "#dff0d8";
        }
      // 배경색 초기화
      if(list[i].value != this.underground_water){
        var list2 = this.$el.querySelectorAll('.un');
        list2[i].style.background = "white";
      } 
    }
    // list[] 9번에 underground_water 값 담기 
    this.list[8] = Number(this.underground_water);

    var sum = 0;
    for(var i=0; i< this.list.length; i++){
     sum += this.list[i]
   }
   this.sum = sum;
 }
},
  // 실행될 기능
  methods:{
    // axios
    searchTerm: function () {
      // using JSONPlaceholder
      const baseURI = 'https://jsonplaceholder.typicode.com';
      this.$http.get(`${baseURI}/posts`)
      .then((result) => {
        console.log(result)
      })
    }
    
    // // 저장 버튼 클릭 시 총점 계산
    // save: function(){

    //   if(this.strength == 0 && this.strength == "" || this.coefficient == 0 && this.coefficient == "" || this.joint_spacing == 0 && this.joint_spacing == "" || this.joint_length == 0 && this.joint_length == "" || this.joint_gap == 0 && this.joint_gap == "" || this.asperity == 0 && this.asperity == "" || this.filling == 0 && this.filling == "" || this.weathering_degree == 0 && this.weathering_degree == "" || this.underground_water == 0 && this.underground_water == ""){

    //     alert("모든 항목을 체크해주세요");

    //   }
    //   console.log(this.sum)
    // },

    // // 화면이 실행될 때 json으로 받아온 내용을 라디오 버튼으로 뿌려주기
    // select:function(){

    //   var select_one = this.RmrList.rmr[0]

    //   this.strength = select_one.strength
    //   this.coefficient = select_one.coefficient
    //   this.joint_spacing = select_one.joint_spacing
    //   this.joint_length = select_one.joint_length
    //   this.joint_gap = select_one.joint_gap
    //   this.asperity = select_one.asperity     
    //   this.filling = select_one.filling
    //   this.weathering_degree = select_one.weathering_degree

    //   // json으로 받아온 데이터를 계산(총점)
    //   this.sum = Number(this.strength)+Number(this.coefficient)+Number(this.joint_spacing)+Number(this.joint_length)+Number(this.joint_gap)+Number(this.asperity)+Number(this.filling)+Number(this.weathering_degree)+Number(this.underground_water)
    // }
  },
  // 페이지가 로드되면 바로 select메소드를 실행하라 
  created(){
    this.searchTerm()
  }
}
</script>
<style scoped>
.table-bordered > tr > th,
.table-bordered > tr > th,
.table-bordered > tr > th,
.table-bordered > tr > td,
.table-bordered > tr > td,
.table-bordered > tr > td {
  border: 1px solid black;
}
#title{
  text-align: left;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.content-wrapper {
  padding: 10px;
  width: 100%;
  margin-top: -1px;
}
template{
  overflow-x:hidden
}
</style>
