<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="?" @input="search($event.target.value)" />
    <div class="post-header" v-for="(a, i) in follower" :key="i">
      <div class="profile" :style="`background-image:url(${a.image})`"></div>
      <span class="profile-name">{{ a.name }}</span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  name: "MyPage",
  props: {},
  setup() {
    let follower = ref([]);
    let followerOriginal = ref([]);

    onMounted(() => {
      axios.get("/follower.json").then((a) => {
        follower.value = a.data;
        followerOriginal.value = [...a.data];
      });
    });

    function search(검색어) {
      let newFollower = followerOriginal.value.filter((a) => {
        return a.name.indexOf(검색어) != -1;
      });
      follower.value = [...newFollower];
    }
    return { follower, search };
  },

  /* setup() {
    let followers = ref([]);
    let originFollowers = ref([]);
    let filterFollowers = ref([]);
    onMounted(() => {
      axios
        .get("/follower.json")
        .then((result) => (followers.value = result.data));
    });

    /* function doThis(a) {
      const search = a.target.value;
      if (search == "") return followers.value;
      if (search != "") {
        for (var i in followers.value) {
          if (followers.value[i].name.startsWith(search) == true) {
            filterFollowers.value[i] = followers.value[i];
            followers.value = [];
            followers.value.push(filterFollowers.value[i]);
          }
        }
        if (search == "") {
          followers.value = originFollowers.value;
        }
      }
    } */
};
</script>

<style></style>
