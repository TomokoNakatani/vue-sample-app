<template>
  <div>
    <div class="status">{{ status }}</div>
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
import { calculateWinner } from "./calculate_winner";

export default {
  name: "Board",
  data() {
    return { squares: Array(9).fill(null), xIsNext: true };
  },
  components: {
    Square,
  },
  methods: {
    onClick(i) {
      const squares = this.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.xIsNext ? "X" : "O";
      this.squares = squares;
      this.xIsNext = !this.xIsNext;
    },
    winner() {
      return calculateWinner(this.squares);
    },
  },
  computed: {
    status() {
      return this.winner()
        ? "Winner: " + this.winner()
        : "Next player: " + (this.xIsNext ? "X" : "O");
    },
  },
};
</script>
