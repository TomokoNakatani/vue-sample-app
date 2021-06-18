<template>
  <div class="game">
    <div className="game-board">
      <board :squares="squares" @on-click="onClick" />
      <!-- boardをレンダリングする -->
    </div>
    <div class="game-info">
      <div>{{ status }}</div>
      <!-- ステータスを表示する -->
      <ol>
        <li v-for="(step, index) in history" :key="index">
          <!-- historyをループさせる -->
          <a href="#" @click="() => jumpTo(index)">
            <!-- クリックしたindexの状態に戻る -->
            {{ index ? "Move #" + index : "Game start" }}
            <!-- indexが1以上であればMoveを表示し、0であればGame startを表示する -->
          </a>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import Board from "./Board"; // Boardをimportする
import { calculateWinner } from "./calculate_winner"; // calculateWinnerをimportする

export default {
  name: "Game", // Gameをexportする
  components: {
    Board, // importしたBoardコンポーネントを定義する
  },
  data() {
    return {
      history: [{ squares: Array(9).fill(null) }], // 9マスの初期値にnullを入れたsquaresを、historyに配列として渡す
      xIsNext: true, // xIsNextの初期値をtrueにする
      stepNumber: 0, // stepNumberの初期値を0にする
    };
  },
  methods: {
    // 勝敗を判断するためのwinnerメソッド
    winner() {
      return calculateWinner(this.squares); // calculateWinnerの引数にsquaresを渡した結果(OかX)を返す
    },
    // マスをクリックした時に呼ばれるonClickメソッド
    onClick(i) {
      const squares = this.squares.slice(); // squaresの中身の変更を検知するため、squaresに複製したsquaresを代入
      if (calculateWinner(squares) || squares[i]) {
        // 勝敗が既に決まっている、あるいは、クリックされた項目に値が入っている場合は、処理を実行しない。
        return;
      }
      squares[i] = this.xIsNext ? "X" : "O"; // xIsNextがtrueであればX、falseであればOをsquares[i]に代入する
      this.history = this.history.concat([{ squares: squares }]); // historyとsquaresのハッシュの配列を結合した配列をhistoryに代入する
      this.xIsNext = !this.xIsNext; // 次のターンのOXを反転させるために、xIsNextのboolean値を反対にする
      this.stepNumber = this.history.length - 1; // 現在のターンのマスを判定するために、stepNumberにhistoryの長さ-1した値を代入する
    },
    // クリックした履歴の状態まで戻るjumpToメソッド
    jumpTo(step) {
      this.stepNumber = step; // stepNumberに引数のstepを代入する
      this.xIsNext = step % 2 ? false : true; // 引数のstepが2で割り切れる場合はtrue、割り切れない場合はfalseをxIsNextに代入する
    },
  },
  computed: {
    // 勝敗、あるいはNext playerの文字列を返すstatusメソッド
    status() {
      return this.winner() // winnerの値が存在すれば勝敗の文字列を返し、存在しなければNext playerの文字列を返す
        ? "Winner: " + this.winner()
        : "Next player: " + (this.xIsNext ? "X" : "O");
    },
    // 選択されているマスを判断するsquaresメソッド
    squares() {
      return this.history[this.stepNumber].squares; // 要素数がstepNumberのhistoryのsquaresを返す
    },
  },
};
</script>
