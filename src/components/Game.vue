<template>
  <div class="game">
    <div className="game-board">
      <board :squares="squares" @on-click="onClick" />
    </div>
    <div class="game-info">
      <div>{{ status }}</div>
      <ol>
        <li v-for="(step, move) in history" :key="move">
          <a href="#">
            {{ move ? "Move #" + move : "Game start" }}
          </a>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import Board from "./Board";
import { calculateWinner } from "./calculate_winner";

export default {
  name: "Game",
  components: {
    Board,
  },
  data() {
    return { history: [{ squares: Array(9).fill(null) }], xIsNext: true };
  },
  methods: {
    winner() {
      return calculateWinner(this.squares);
    },
    onClick(i) {
      const history = this.history;
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.xIsNext ? "X" : "O";
      this.history = history.concat([{ squares: squares }]);
      this.xIsNext = !this.xIsNext;
    },
    currentHistory() {
      const history = this.history;
      const current = history[history.length - 1];
      return current;
    },
  },
  computed: {
    status() {
      return this.winner()
        ? "Winner: " + this.winner()
        : "Next player: " + (this.xIsNext ? "X" : "O");
    },
    squares() {
      const history = this.history;
      const current = history[history.length - 1];
      return current.squares;
    },
  },
};
</script>
