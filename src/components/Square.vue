<template>
  <button class="square" @click="click">{{ value }}</button>
</template>

<script>
export default {
  name: "Square",
  props: { value: Number },
  methods: {
    click() {
      alert("click");
    },
  },
};
</script>
