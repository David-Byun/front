<template>
  <div class="menu">
    <span>Home</span>
    <span>Shop</span>
  </div>
  <DiscountBanner />
  <ModalWindow
    @closeModal="modal = false"
    :products="products"
    :modal="modal"
    :clicked="clicked"
  />

  <RoomCard
    @openModal="
      modal = true;
      clicked = $event;
    "
    :product="products[i]"
    v-for="(product, i) in products"
    :key="i"
  />
</template>

<script>
import rooms from "./assets/oneroom";
import DiscountBanner from "./DiscountBanner";
import ModalWindow from "./ModalWindow.vue";
import RoomCard from "./RoomCard.vue";

export default {
  name: "App",
  data() {
    return {
      object: { name: "kim", age: 20 },
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
  components: { DiscountBanner, ModalWindow, RoomCard },
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
</style>
