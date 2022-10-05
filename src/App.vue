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
  <div>{{ mealdata }}</div>
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
      mealdata: [],
    };
  },
  methods: {
    mealget() {
      axios
        .get(
          `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=3963590487aa4591b4def50e92f6b3db&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=T10&SD_SCHUL_CODE=9290083`
        )
        .then((result) => {
          const dataReturn = result.data;
          this.mealdata.push(result.data);
          console.log(dataReturn.mealServiceDietInfo[1].row[0].DDISH_NM);
        });
    },
  },
};
</script>

<style></style>
