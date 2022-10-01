<template>
  <div class="black-bg" v-if="modal == true">
    <div class="white-bg">
      <img :src="products[clicked].image" />
      <h4>{{ products[clicked].title }}</h4>
      <p>{{ products[clicked].price }}</p>
      <p>{{ products[clicked].content }}</p>
      <input v-model.number="month" />
      <input type="range" min="1" max="12" />
      <p>{{ month }} 개월 선택함 : {{ products[clicked].price * month }}원</p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalWindow",
  data() {
    return { month: 1 };
  },
  watch: {
    month(a) {
      if ((a != "") & (typeof a === "string")) {
        alert("문자는 안됩니다");
        a.preventDefault();
        a.value = 1;
        return a == 1;
      }
      if (a >= 13) {
        alert("13이상 입력하지 말아요");
        a.preventDefault();
        a.value = 1;
        return a == 1;
      }
    },
  },
  props: {
    products: Array,
    modal: Boolean,
    clicked: Number,
  },
  beforeUpdate() {
    if (this.month == 2) alert("2를 기입했어요!");
  },
};
</script>

<style></style>
