<template>
  <div id="app">
    <div class="button_area">
      <button type="btn btn-primary" v-on:click="save">저장</button>
    </div>
    <div>R.M.R Check List<small data-localize="dashboard.WELCOME"></small></div>
    <table border="1" cellpadding="3" class="table table-striped table-bordered table-hover" style="text-align: center;">
      <tr>
        <td colspan="13">공 사 명 : XX-XX간 도로공사 일시 : 2021년 2월 2일</td>
      </tr>
      <tr>
        <td colspan="2">터널구간</td>
        <td colspan="2">방향</td>
        <td colspan="2">특징</td>
        <td colspan="4">STA.13 +</td>
        <td colspan="3">시정부</td>
      </tr>
      <tr>
        <td colspan="13">1. 항목별 평가</td>
      </tr>
      <tr>
        <td rowspan="2">①</td>
        <td>해머타격상태</td>
        <td colspan="2">해머타격시 튀어오르고 불꽃이 튀는 정도(극경암)</td>
        <td colspan="2">강한 해머타격에 갈라지며 불연속면을 따라 비교적 크게 갈라짐(경암)</td>
        <td colspan="2">해머타격에 갈라지며 불연속면을 따라 비교적 소면으로 갈라짐(연암)</td>
        <td colspan="2">해머를 치면 XXX을 내고 부서지며 균열이 되면서 갈라짐 (연암-풍화암)</td>
        <td colspan="3">약한 해머타격에 부서지고 일부 손으로도 부서질 정도로 긁힌다 (풍화암-풍화토)</td>
      </tr>
      <tr>
        <td>일축압축강도 (㎏/㎠)</td>
        <td colspan="2" class="ss"><input type="radio" name="cellcolorchange1" id="strength" value="15"
                                          class="num" v-model="strength"/>&gt; 2500
        </td>
        <td colspan="2" class="ss"><input type="radio" name="cellcolorchange1" id="strength" value="12"
                                          class="num" v-model="strength"/>2500 - 1000
        </td>
        <td colspan="2" class="ss"><input type="radio" name="cellcolorchange1" id="strength" value="7"
                                          class="num" v-model="strength"/>1000 - 500
        </td>
        <td colspan="2" class="ss"><input type="radio" name="cellcolorchange1" id="strength" value="4"
                                          class="num" v-model="strength"/>500 - 250
        </td>
        <td colspan="3" class="ss"><input type="radio" name="cellcolorchange1" id="strength" value="2"
                                          class="num" v-model="strength" />&lt; 250
        </td>
      </tr>
      <tr>
        <td colspan="2">평점</td>
        <td colspan="2">15</td>
        <td colspan="2">12</td>
        <td colspan="2">7</td>
        <td colspan="2">4</td>
        <td colspan="3">2</td>
      </tr>
      <tr>
        <td colspan="2">
          ②<br/>
          암질계수(%)
        </td>
        <td colspan="2"><input type="radio" name="cellcolorchange2" id="coefficient" value="20"
                               class="num" v-model="coefficient"/>90-100
        </td>
        <td colspan="2 "><input type="radio" name="cellcolorchange2" id="coefficient" value="17"
                                class="num" v-model="coefficient"/>75 - 90
        </td>
        <td colspan="2"><input type="radio" name="cellcolorchange2" id="coefficient" value="13"
                               class="num" v-model="coefficient"/>50 - 75
        </td>
        <td colspan="2"><input type="radio" name="cellcolorchange2" id="coefficient" value="8"
                               class="num" v-model="coefficient"/>25
          - 50
        </td>
        <td colspan="3"><input type="radio" name="cellcolorchange2" id="coefficient" value="3"
                               class="num" v-model="coefficient"/>&lt; 25
        </td>
      </tr>
      <tr>
        <td colspan="2">평점</td>
        <td colspan="2">20</td>
        <td colspan="2">17</td>
        <td colspan="2">13</td>
        <td colspan="2">8</td>
        <td colspan="3">3</td>
      </tr>
      <tr>
        <td colspan="2">
          ③<br/>
          절리면 간격
        </td>
        <td colspan="2"><input type="radio" name="cellcolorchange3" id="joint_spacing" value="20"
                               class="num" v-model="joint_spacing"/>&gt; 2m
        </td>
        <td colspan="2"><input type="radio" name="cellcolorchange3" id="joint_spacing" value="15"
                               class="num" v-model="joint_spacing"/>0.6 ~ 2m
        </td>
        <td colspan="2"><input type="radio" name="cellcolorchange3" id="joint_spacing" value="10"
                               class="num" v-model="joint_spacing"/>600~200mm
        </td>
        <td colspan="2"><input type="radio" name="cellcolorchange3" id="joint_spacing" value="8"
                               class="num" v-model="joint_spacing"/>60~200mm
        </td>
        <td colspan="3"><input type="radio" name="cellcolorchange3" id="joint_spacing" value="5"
                               class="num" v-model="joint_spacing"/>&lt; 60mm
        </td>
      </tr>
      <tr>
        <td colspan="2">평점</td>
        <td colspan="2">20</td>
        <td colspan="2">15</td>
        <td colspan="2">10</td>
        <td colspan="2">8</td>
        <td colspan="3">5</td>
      </tr>
      <tr>
        <td rowspan="10">
          ④<br/>
          불연속면의 상태
        </td>
        <td>절리길이</td>
        <td colspan="2"><input type="radio" name="cellcolorchange4" id="joint_length" value="6"
                               class="num" v-model="joint_length"/>1m 미만
        </td>
        <td colspan="2"><input type="radio" name="cellcolorchange4" id="joint_length" value="4"
                               class="num" v-model="joint_length"/>1~3m
        </td>
        <td colspan="2"><input type="radio" name="cellcolorchange4" id="joint_length" value="2"
                               class="num" v-model="joint_length"/>3~10m
        </td>
        <td colspan="2"><input type="radio" name="cellcolorchange4" id="joint_length" value="1"
                               class="num" v-model="joint_length"/>10~20m
        </td>
        <td colspan="3"><input type="radio" name="cellcolorchange4" id="joint_length" value="0"
                               class="num" v-model="joint_length"/>20m이상
        </td>
      </tr>
      <tr>
        <td>평점</td>
        <td colspan="2">6</td>
        <td colspan="2">4</td>
        <td colspan="2">2</td>
        <td colspan="2">1</td>
        <td colspan="3">0</td>
      </tr>
      <tr>
        <td>절리틈새</td>
        <td colspan="2"><input type="radio" name="cellcolorchange5" id="joint_gap" value="6"
                               class="num" v-model="joint_gap"/>없음
        </td>
        <td colspan="2"><input type="radio" name="cellcolorchange5" id="joint_gap" value="5"
                               class="num" v-model="joint_gap"/>0.1mm이하
        </td>
        <td colspan="2"><input type="radio" name="cellcolorchange5" id="joint_gap" value="4"
                               class="num" v-model="joint_gap"/>0.1~1.0mm
        </td>
        <td colspan="2"><input type="radio" name="cellcolorchange5" id="joint_gap" value="1"
                               class="num" v-model="joint_gap"/>1~5mm
        </td>
        <td colspan="3"><input type="radio" name="cellcolorchange5" id="joint_gap" value="0"
                               class="num" v-model="joint_gap"/>5mm
          이상
        </td>
      </tr>
      <tr>
        <td>평점</td>
        <td colspan="2">6</td>
        <td colspan="2">5</td>
        <td colspan="2">4</td>
        <td colspan="2">1</td>
        <td colspan="3">0</td>
      </tr>
      <tr>
        <td>거칠기</td>
        <td colspan="2"><input type="radio" name="cellcolorchange6" id="asperity" value="6"
                               class="num" v-model="asperity"/>아주
          거침
        </td>
        <td colspan="2"><input type="radio" name="cellcolorchange6" id="asperity" value="4"
                               class="num" v-model="asperity"/>거침
        </td>
        <td colspan="2"><input type="radio" name="cellcolorchange6" id="asperity" value="2"
                               class="num" v-model="asperity"/>약간
          거침
        </td>
        <td colspan="2"><input type="radio" name="cellcolorchange6" id="asperity" value="2"
                               class="num" v-model="asperity"/>평탄
        </td>
        <td colspan="3"><input type="radio" name="cellcolorchange6" id="asperity" value="0"
                               class="num" v-model="asperity"/>평면
        </td>
      </tr>
      <tr>
        <td>평점</td>
        <td colspan="2">6</td>
        <td colspan="2">4</td>
        <td colspan="2">2</td>
        <td colspan="2">2</td>
        <td colspan="3">0</td>
      </tr>
      <tr>
        <td>충전물</td>
        <td colspan="2"><input type="radio" name="cellcolorchange7" id="filling" value="6" class="num" v-model="filling"/>없음
        </td>
        <td colspan="2"><input type="radio" name="cellcolorchange7" id="filling" value="5" class="num" v-model="filling"/>경질
          &lt; 5
        </td>
        <td colspan="2"><input type="radio" name="cellcolorchange7" id="filling" value="3" class="num" v-model="filling"/>경질
          &gt; 5
        </td>
        <td colspan="2"><input type="radio" name="cellcolorchange7" id="filling" value="1" class="num" v-model="filling"/>연질
          &lt; 5
        </td>
        <td colspan="3"><input type="radio" name="cellcolorchange7" id="filling" value="0" class="num" v-model="filling"/>연질
          &gt; 5
        </td>
      </tr>
      <tr>
        <td>평점</td>
        <td colspan="2">6</td>
        <td colspan="2">5</td>
        <td colspan="2">3</td>
        <td colspan="2">1</td>
        <td colspan="3">0</td>
      </tr>
      <tr>
        <td>풍화도</td>
        <td colspan="2"><input type="radio" name="cellcolorchange8" id="weathering_degree" value="6"
                               class="num" v-model="weathering_degree"/>신선
        </td>
        <td colspan="2"><input type="radio" name="cellcolorchange8" id="weathering_degree" value="5"
                               class="num" v-model="weathering_degree"/>약간 풍화
        </td>
        <td colspan="2"><input type="radio" name="cellcolorchange8" id="weathering_degree" value="3"
                               class="num" v-model="weathering_degree"/>보통
        </td>
        <td colspan="2"><input type="radio" name="cellcolorchange8" id="weathering_degree" value="1"
                               class="num" v-model="weathering_degree"/>심한 풍화
        </td>
        <td colspan="3"><input type="radio" name="cellcolorchange8" id="weathering_degree" value="0"
                               class="num" v-model="weathering_degree"/>완전 분해
        </td>
      </tr>
      <tr>
        <td>평점</td>
        <td colspan="2">6</td>
        <td colspan="2">5</td>
        <td colspan="2">3</td>
        <td colspan="2">1</td>
        <td colspan="3">0</td>
      </tr>
      <tr>
        <td rowspan="2" class="water">
          ⑤<br/>
          지하수
        </td>
        <td>일반적인 상태</td>
        <td colspan="2">건조상태</td>
        <td colspan="2">습윤</td>
        <td colspan="2">젖음</td>
        <td colspan="2">벽면을 타고 물이 흐름</td>
        <td colspan="3">피압수, 집중출수</td>
      </tr>
      <tr>
        <td>10m당 유입량(ℓ/min)</td>
        <td colspan="2"><input type="radio" name="cellcolorchange9" id="underground_water" value="15"
                               class="num" v-model="underground_water"/>없음
        </td>
        <td colspan="2"><input type="radio" name="cellcolorchange9" id="underground_water" value="10"
                               class="num" v-model="underground_water"/>10미만
        </td>
        <td colspan="2"><input type="radio" name="cellcolorchange9" id="underground_water" value="7"
                               class="num" v-model="underground_water"/>10~25
        </td>
        <td colspan="2"><input type="radio" name="cellcolorchange9" id="underground_water" value="4"
                               class="num" v-model="underground_water"/>25~125
        </td>
        <td colspan="3"><input type="radio" name="cellcolorchange9" id="underground_water" value="0"
                               class="num" v-model="underground_water"/>125초과
        </td>
      </tr>
      <tr>
        <td colspan="2">평점</td>
        <td colspan="2">15</td>
        <td colspan="2">10</td>
        <td colspan="2">7</td>
        <td colspan="2">4</td>
        <td colspan="3">0</td>
      </tr>
      <tr>
        <td rowspan="4">
          ⑤<br/>
          절리방향에 따른 보정
        </td>
        <td>주향</td>
        <td colspan="8">주향이 터널방향과 수직</td>
        <td colspan="2" rowspan="2">주향과 터널축이 평행</td>
        <td rowspan="2">주향에 상관없음</td>
      </tr>
      <tr>
        <td>경사방향</td>
        <td colspan="4">경사방향굴착</td>
        <td colspan="4">경사방향과 반대로 굴착</td>
      </tr>
      <tr>
        <td>경사각</td>
        <td colspan="2">45˚ ~ 90˚</td>
        <td colspan="2">20˚ ~ 45˚</td>
        <td colspan="2">45˚ ~ 90˚</td>
        <td colspan="2">20˚ ~ 45˚</td>
        <td>45˚ ~ 90˚</td>
        <td>20˚ ~ 45˚</td>
        <td>0˚ ~ 20˚</td>
      </tr>
      <tr>
        <td>보정치</td>
        <td colspan="2">0</td>
        <td colspan="2">-2</td>
        <td colspan="2">-5</td>
        <td colspan="2">-10</td>
        <td>-12</td>
        <td>-5</td>
        <td>-5</td>
      </tr>
      <tr>
        <td rowspan="2">지보분류</td>
        <td>총평점</td>
        <td>91~100</td>
        <td>81~90</td>
        <td>61~80</td>
        <td>41~60</td>
        <td>21~40</td>
        <td>20이하</td>
        <td>20이하</td>
        <td>-</td>
        <td>-</td>
        <td colspan="2">비 고</td>
      </tr>
      <tr>
        <td>Type</td>
        <td>type-1A</td>
        <td>type-1B</td>
        <td>type-2</td>
        <td>type-3</td>
        <td>type-4</td>
        <td>type-5A</td>
        <td>type-5B</td>
        <td>type-6A</td>
        <td>type-6B</td>
        <td colspan="2"></td>
      </tr>
      <tr>
        <td colspan="2">2. 총 점(①+②+③+④+⑤)-⑥</td>
        <td colspan="6" id="sum" style="font-size: 1.5875rem; background-color: #dff0d8;">{{sum}}</td>
        <td colspan="2">특기사항</td>
        <td colspan="3"></td>
      </tr>
    </table>
  </div>
</template>
<script>
import json from '../assets/RmrList.json'
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
      sum: 0,
      RmrList : json
    }
  },
  methods:{
    save: function(){
       this.sum = Number(this.strength)+Number(this.coefficient)+Number(this.joint_spacing)+Number(this.joint_length)+Number(this.joint_gap)+Number(this.asperity)+Number(this.filling)+Number(this.weathering_degree)+Number(this.underground_water)
    },
    select:function(){
      var select_one = this.RmrList.rmr[0]

      this.strength = select_one.strength
      this.coefficient = select_one.coefficient
      this.joint_spacing = select_one.joint_spacing
      this.joint_length = select_one.joint_length
      this.joint_gap = select_one.joint_gap
      this.asperity = select_one.asperity
      this.filling = select_one.filling
      this.weathering_degree = select_one.weathering_degree
      this.underground_water = select_one.underground_water

      this.sum = Number(this.strength)+Number(this.coefficient)+Number(this.joint_spacing)+Number(this.joint_length)+Number(this.joint_gap)+Number(this.asperity)+Number(this.filling)+Number(this.weathering_degree)+Number(this.underground_water)
      
    }
  },
  created(){
    this.select()
  }
}
</script>

<style>

</style>
