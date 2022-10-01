<template>
  <div class="menu">
    <span>Home</span>
    <span>Shop</span>
  </div>
  <div v-if="1 == 2">안녕하세요</div>
  <div v-else-if="1 == 1">안녕히가세요</div>

  <div class="black-bg" v-if="modal == true">
    <div class="white-bg">
      <h4>{{ products[clicked].title }}</h4>
      <p>{{ products[clicked].price }}</p>
      <p>{{ products[clicked].content }}</p>
      <button @click="modal = !modal">닫기</button>
    </div>
  </div>

  <div @click="modal = !modal" v-for="(product, i) in products" :key="i">
    <img :src="product.image" class="room-img" />
    <h4 @click="누른거 = i">{{ product.title }}</h4>
    <p>{{ product.price }}원</p>
  </div>
</template>

<script>
import rooms from "./assets/oneroom";

export default {
  name: "App",
  data() {
    return {
      clicked: 0,
      modal: false,
      products: rooms,
      신고수: [0, 0, 0],
      메뉴들: ["Home", "Shop", "About"],
    };
  },
  methods: {
    increase(i) {
      this.신고수[i] += 1;
    },
  },
  components: {},
};
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkgoldenrod;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
.room-img {
  width: 100%;
  margin-top: 40px;
}
</style>
