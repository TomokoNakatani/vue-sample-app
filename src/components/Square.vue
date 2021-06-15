<template>
  <button class="square" @click="click">{{ value }}</button>
</template>

<script>
export default {
  name: "Square",
  data() {
    return { value: null };
  },
  methods: {
    click() {
      this.value = "X";
    },
  },
};
</script>
