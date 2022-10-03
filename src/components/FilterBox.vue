<template>
  <div
    :class="`${instaFilter} filter-item`"
    :style="`background-image: url(${image})`"
  >
    <slot name="a"></slot>
    <button @click="fire">버튼</button>
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  methods: {
    fire() {
      this.emitter.emit("filterChange", this.instaFilter);
    },
  },
  props: { image: String, instaFilter: String },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
