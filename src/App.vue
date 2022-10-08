<template>
  <nav class="navbar bg-light sticky top-0">
    <div class="container-fluid">
      <div class="navbar-brand">학교 검색</div>
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
        <th scope="col">점심</th>
        <th scope="col">칼로리</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(a, i) in meal" :key="i">
        <th scope="row">{{ meal[i].ymd }}</th>
        <td>{{ meal[i].dish }}</td>
        <td>{{ meal[i].cal }}</td>
      </tr>
    </tbody>
  </table>
  <div class="card footer bottom-0">
    <h5 class="card-header text-right">2022 David</h5>
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
                      dish: dataReturn.mealServiceDietInfo[1].row[
                        i
                      ].DDISH_NM.replace(
                        /[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/gi,
                        " "
                      ),
                      cal: dataReturn.mealServiceDietInfo[1].row[i].CAL_INFO,
                    };
                    this.meal.push(mealData);
                  }
                } catch (err) {
                  alert(err);
                }
              });
          }
        }
      }
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
  position: absolute;
  height: 60px;
  width: 100%;
  padding: 0 25px;
  line-height: 60px;
  color: #8a8c8f;
  border-top: 1px solid #dee5e7;
  background-color: #f2f2f2;
}
</style>
