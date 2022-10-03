<template>
  <div class="post" v-for="(insta, i) in instaContent" :key="i">
    <div class="post-header">
      <div
        class="profile"
        :style="{ backgroundImage: `url(${instaContent[i].userImage})` }"
      ></div>
      <span class="profile-name">{{ instaContent[i].name }}</span>
    </div>
    <div
      class="post-body"
      :class="`${instaContent[i].filter}`"
      :style="{ backgroundImage: `url(${instaContent[i].postImage})` }"
    ></div>
    <div class="post-content">
      <p>{{ $store.state.likeNum }} Likes</p>
      <button @click="$store.commit('changeLike')">좋아요</button>
      <p>
        <strong>{{ instaContent[i].name }}</strong> 좋은 날이네요!
      </p>
      <p class="date">{{ instaContent[i].date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostPicture",
  props: { instaContent: Object, filter: String },
  data() {
    return { meg: "hello" };
  },
};
</script>

<style>
.post {
  width: 100%;
}
.profile {
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>
