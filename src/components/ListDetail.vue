<template>
  <div>
    <h1>상세페이지</h1>
    <h4>
      {{ blogData[$route.params.id].title }}
    </h4>
    <p>{{ blogData[$route.params.id].content }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "ListDetail",
  props: { blogData: Object },
};
</script>

<style></style>
