<template>
  <div>
    <div class="status">{{ "Next player: X" }}</div>
    <div class="board-row">
      <Square :value="0" />
      <Square :value="1" />
      <Square :value="2" />
    </div>
    <div class="board-row">
      <Square :value="3" />
      <Square :value="4" />
      <Square :value="5" />
    </div>
    <div class="board-row">
      <Square :value="6" />
      <Square :value="7" />
      <Square :value="8" />
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
};
</script>
