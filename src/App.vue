<template>
  <nav class="navbar bg-light sticky top-0">
    <div class="container-fluid">
      <div class="navbar-brand">오늘부터 우리 학교 급식은?</div>
      <form class="d-flex" role="search" @submit="onSchoolSubmit">
        <input
          class="form-control me-2"
          type="search"
          placeholder="학교를 검색해 보세요"
          aria-label="Search"
          v-model="keySchool"
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
  <table class="table text-center">
    <thead>
      <tr>
        <th scope="col">날짜</th>
        <th scope="col">요일</th>
        <th scope="col">메뉴</th>
        <th scope="col">칼로리</th>
        <th scope="col">영양분</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(a, i) in meal.sort((a, b) => {
          if (a.ymd > b.ymd) {
            return 1;
          }
          if (b.ymd > a.ymd) {
            return -1;
          }
          return 0;
        })"
        :key="i"
      >
        <th scope="row" v-if="meal[i].ymd >= getToday()">
          {{ meal[i].ymd }}
        </th>
        <td v-if="meal[i].ymd >= getToday()">
          {{ getDateStr(meal[i].ymd) }}
        </td>
        <td v-if="meal[i].ymd >= getToday()">
          {{ meal[i].dish }}
        </td>
        <td v-if="meal[i].ymd >= getToday()">
          {{ meal[i].cal }}
        </td>
        <td v-if="meal[i].ymd >= getToday()">
          {{ meal[i].ntr }}
        </td>
      </tr>
    </tbody>
  </table>
  <div class="card footer bottom-0">
    <h5 class="card-header text-right">
      <svg
        class="w-6 h-6 inline"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
        ></path>
      </svg>
      2022 By David
    </h5>
  </div>
</template>

<script>
import axios from "axios";
import school from "./data";

export default {
  name: "App",
  components: {},
  data() {
    return {
      todayLunch: "",
      meal: [],
      school,
      newTodayLunch: "",
      keySchool: "",
      newSchool: "",
      fakeMeal: [],
    };
  },
  mounted() {
    this.school;
  },
  methods: {
    getDateStr(dateStr) {
      var yyyyMMdd = String(dateStr);
      var sYear = yyyyMMdd.substring(0, 4);
      var sMonth = yyyyMMdd.substring(4, 6);
      var sDate = yyyyMMdd.substring(6, 8);
      var date = new Date(Number(sYear), Number(sMonth) - 1, Number(sDate));
      var week = ["일", "월", "화", "수", "목", "금", "토"];
      return week[date.getDay()] + "요일";
    },
    getToday() {
      var date = new Date();
      var year = date.getFullYear();
      var month = ("0" + (1 + date.getMonth())).slice(-2);
      var day = ("0" + date.getDate()).slice(-2);
      return year + month + day;
    },
    onLunchSubmit(e) {
      e.preventDefault();
      this.newTodayLunch = this.todayLunch;
      this.todayLunch = "";
    },
    onSchoolSubmit(e) {
      e.preventDefault();
      this.newSchool = this.keySchool;
      this.keySchool = "";
      if (this.newSchool == "") {
        return;
      }
      if (this.newSchool != "") {
        for (var a in this.school) {
          if (this.newSchool == this.school[a].schoolName) {
            this.getData1(a);
            this.getData2(a);
          }
        }
      }
    },
    getData1(a) {
      axios
        .get(
          `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=3963590487aa4591b4def50e92f6b3db&Type=json&pIndex=4&pSize=100&ATPT_OFCDC_SC_CODE=${this.school[a].cityCode}&SD_SCHUL_CODE=${this.school[a].schoolCode}`
        )
        .then((result) => {
          try {
            const dataReturn = result.data;
            for (var i in dataReturn.mealServiceDietInfo[1].row) {
              var mealData = {
                schulm: dataReturn.mealServiceDietInfo[1].row[i].SCHUL_NM,
                ymd: dataReturn.mealServiceDietInfo[1].row[i].MLSV_YMD,
                dish: dataReturn.mealServiceDietInfo[1].row[i].DDISH_NM.replace(
                  /[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F\u3131-\u314E]/gi,
                  " "
                ),
                cal: dataReturn.mealServiceDietInfo[1].row[i].CAL_INFO,
                ntr: dataReturn.mealServiceDietInfo[1].row[i].NTR_INFO.replace(
                  /<[^>]*>?/g,
                  " "
                ),
              };
              this.meal.push(mealData);
            }
          } catch (err) {
            alert(err);
          }
        });
    },
    getData2(a) {
      axios
        .get(
          `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=3963590487aa4591b4def50e92f6b3db&Type=json&pIndex=5&pSize=100&ATPT_OFCDC_SC_CODE=${this.school[a].cityCode}&SD_SCHUL_CODE=${this.school[a].schoolCode}`
        )
        .then((result) => {
          try {
            const dataReturn = result.data;
            for (var i in dataReturn.mealServiceDietInfo[1].row) {
              var mealData = {
                schulm: dataReturn.mealServiceDietInfo[1].row[i].SCHUL_NM,
                ymd: dataReturn.mealServiceDietInfo[1].row[i].MLSV_YMD,
                dish: dataReturn.mealServiceDietInfo[1].row[i].DDISH_NM.replace(
                  /[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F\u3131-\u314E]/gi,
                  " "
                ),
                cal: dataReturn.mealServiceDietInfo[1].row[i].CAL_INFO,
                ntr: dataReturn.mealServiceDietInfo[1].row[i].NTR_INFO.replace(
                  /<[^>]*>?/g,
                  " "
                ),
              };
              this.meal.push(mealData);
            }
          } catch (err) {
            alert(err);
          }
        });
    },
  },
};
</script>

<style>
#app {
  min-height: 100%;
  position: relative;
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 60px;
  width: 100%;
  padding: 0 25px;
  line-height: 60px;
  color: #8a8c8f;
  border-top: 1px solid #dee5e7;
  background-color: #f2f2f2;
}
</style>
