<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="goBack()">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step <= 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <ContainerInsta
    :instaContent="instaContent"
    :step="step"
    :image="image"
    :filter="filter"
    @tap="if (step <= 1) ++step;"
    @write="write = $event"
  />

  <div class="footer">
    <ul class="footer-button-plus">
      <input
        @change="upload"
        multiple
        accept="iamge/*"
        type="file"
        id="file"
        class="inputfile"
      />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import ContainerInsta from "./components/ContainerInsta";
import instaContent from "./assets/data";
import axios from "axios";
import { mapMutations, mapState } from "vuex";

export default {
  name: "App",
  data() {
    return {
      instaContent,
      clicked: 0,
      step: 0,
      image: "",
      write: "",
      filter: "",
      counter: 0,
    };
  },
  components: { ContainerInsta },
  mounted() {
    this.emitter.on("filterChange", (data) => {
      this.filter = data;
    });
  },
  computed: {
    ...mapState(["name", "age", "likes"]),
    ...mapState({ myName: "name" }),
  },
  methods: {
    now() {
      return new Date();
    },
    goBack() {
      return this.$router.go(-1);
    },
    ...mapMutations(["setMore", "changeLike", "changeAge"]),
    publish() {
      var newContent = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.image,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.write,
        filter: this.filter,
      };
      this.instaContent.unshift(newContent);
      this.step = 0;
    },
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.clicked}.json`)
        .then((result) => {
          this.instaContent.push(result.data);
        });
    },
    upload(e) {
      let file = e.target.files;
      let url = URL.createObjectURL(file[0]);
      this.image = url;
      this.step++;
    },
  },
};
</script>

<style>
@import "style.css";
</style>
