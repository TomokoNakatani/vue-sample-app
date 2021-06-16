<template>
  <div>
    <div class="board-row" v-for="i in 3" :key="i">
      <Square
        v-for="j in 3"
        :key="(i - 1) * 3 + j"
        :value="squares[(i - 1) * 3 + j - 1]"
        @on-click="() => onClick((i - 1) * 3 + j - 1)"
      />
    </div>
  </div>
</template>

<script>
import Square from "./Square";

export default {
  name: "Board",
  components: {
    Square,
  },
  methods: {
    onClick(i) {
      this.$emit("on-click", i);
    },
  },
  props: {
    squares: Array,
  },
};
</script>
