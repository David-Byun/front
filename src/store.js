import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "hello",
      age: 20,
      likeNum: 10,
      like: false,
      more: {},
    };
  },
  mutations: {
    setMore(state, data) {
      state.more = data;
    },
    changeLike(state) {
      state.like = !state.like;
      if (state.like == true) {
        return state.likeNum++;
      } else {
        return state.likeNum--;
      }
    },
    changeAge(state) {
      state.age++;
    },
  },
  actions: {
    getData(context) {
      axios
        .get("https://codingapple1.github.io/vue/more0.json")
        .then((result) => {
          context.commit("setMore", result.data);
        });
    },
  },
});

export default store;
