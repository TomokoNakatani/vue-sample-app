<template>
  <div class="game">
    <div className="game-board">
      <Board />
    </div>
    <div class="game-info">
      <div>{{ /* status */ }}</div>
      <ol>
        {{ /* TODO */ }}
      </ol>
    </div>
  </div>
</template>

<script>
import Board from "./Board";

export default {
  name: "Game",
  components: {
    Board,
  },
};
</script>
