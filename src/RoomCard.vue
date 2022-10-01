<template>
  <div>
    <img :src="product.image" class="room-img" />
    <h4 @click="click">{{ product.title }}</h4>
    <p>{{ product.price }}원</p>
  </div>
</template>

<script>
export default {
  name: "RoomCard",
  props: {
    product: Object,
  },
  methods: {
    click() {
      this.$emit("openModal", this.product.id);
    },
  },
};
</script>

<style>
.room-img {
  width: 100%;
  margin-top: 40px;
}
</style>
