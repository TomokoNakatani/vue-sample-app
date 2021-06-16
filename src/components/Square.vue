<template>
  <button class="square" @click="click">{{ value }}</button>
</template>

<script>
export default {
  name: "Square",
  props: { value: String },
  methods: {
    click() {
      this.$emit("on-click");
    },
  },
};
</script>
