<template>
  <nav class="navbar bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">오늘 점심은?</a>
      <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="찾아보세요"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <a class="navbar-brand">학교 검색</a>
      <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="찾아보세요"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>

  <ComponentCalendar />
  <button @click="mealget">클릭</button>
  <div v-for="(a, i) in meal" :key="i">
    {{ meal[i].schulm }}
    {{ meal[i].ymd }}
    {{ meal[i].dish }}
    {{ meal[i].cal }}
  </div>
</template>

<script>
/* import ComponentCalendar from "./components/ComponentCalendar.vue"; */
import axios from "axios";
export default {
  name: "App",
  components: {
    /*  ComponentCalendar, */
  },
  data() {
    return {
      meal: [],
    };
  },
  methods: {
    mealget() {
      axios
        .get(
          `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=3963590487aa4591b4def50e92f6b3db&Type=json&pIndex=6&pSize=100&ATPT_OFCDC_SC_CODE=T10&SD_SCHUL_CODE=9290083`
        )
        .then((result) => {
          const dataReturn = result.data;
          for (var i in dataReturn.mealServiceDietInfo[1].row) {
            var mealData = {
              schulm: dataReturn.mealServiceDietInfo[1].row[i].SCHUL_NM,
              ymd: dataReturn.mealServiceDietInfo[1].row[i].MLSV_YMD,
              dish: dataReturn.mealServiceDietInfo[1].row[i].DDISH_NM,
              cal: dataReturn.mealServiceDietInfo[1].row[i].CAL_INFO,
            };
            this.meal.push(mealData);
            console.log(this.meal[0].schulm);
          }
        });
    },
  },
};
</script>

<style></style>
