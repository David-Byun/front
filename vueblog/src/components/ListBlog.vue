<template>
  <div v-for="(blog, i) in blogData" :key="i">
    <h4>
      <router-link :to="`/detail/${blog.number}`">{{ blog.title }}</router-link>
    </h4>
    <div>{{ blog.date }}</div>
  </div>
</template>

<script>
export default {
  name: "ListBlog",
  props: { blogData: Object },
};
</script>

<style></style>
