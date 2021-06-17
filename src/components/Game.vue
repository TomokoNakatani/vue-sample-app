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
        <li v-for="(step, move) in history" :key="move">
          <!-- historyをループさせる -->
          <a href="#" @click="() => jumpTo(move)">
            <!-- クリックしたmoveの状態に戻る -->
            {{ move ? "Move #" + move : "Game start" }}
            <!-- 履歴があれば履歴を表示し、なければGame startを表示する -->
          </a>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import Board from "./Board"; //Boardをimportする
import { calculateWinner } from "./calculate_winner"; //calculateWinnerをimportする

export default {
  name: "Game", // Gameをexportする
  components: {
    Board, // importしたBoardコンポーネントを定義する
  },
  data() {
    return {
      history: [{ squares: Array(9).fill(null) }], //9マスの初期値にnullを入れたsquaresを、historyに配列として渡す
      xIsNext: true, //xIsNextの初期値をtrueにする
      stepNumber: 0, //stepNumberの初期値を0にする
    };
  },
  methods: {
    winner() {
      // 勝敗を判断するためのwinnerメソッド
      return calculateWinner(this.squares); // calculateWinnerの引数にsquaresを渡した結果(OかX)を返す
    },
    onClick(i) {
      // マスをクリックした時に呼ばれるonClickメソッド
      const history = this.history; // historyにhistoryを代入
      const squares = this.squares.slice(); //squaresの中身の変更を検知するため、squaresに複製したsquaresを代入
      if (calculateWinner(squares) || squares[i]) {
        // 勝敗が既に決まっている、クリックされた項目に値が入っている場合は、処理を実行しない。
        return;
      }
      squares[i] = this.xIsNext ? "X" : "O"; // xIsNextがtrueであればX、falseであればOをsquares[i]に代入する
      this.history = history.concat([{ squares: squares }]); // historyとsquaresの配列を結合した配列をhistoryに代入する
      this.xIsNext = !this.xIsNext; // xIsNextのboolean値を反対にする
      this.stepNumber = history.length; // stepNumberにhistoryの長さを代入する
    },
    jumpTo(step) {
      // クリックした履歴の状態まで戻るjumpToメソッド
      this.stepNumber = step; // stepNumberに引数のstepを代入する
      this.xIsNext = step % 2 ? false : true; // 引数のstepが2で割り切れる場合はfalse、割り切れない場合はtrueをxIsNextに代入する
    },
  },
  computed: {
    status() {
      // 勝敗、あるいはNext playerの文字列を返すstatusメソッド
      return this.winner() // winnerの値が存在すれば勝敗の文字列を返し、存在しなければNext playerの文字列を返す
        ? "Winner: " + this.winner()
        : "Next player: " + (this.xIsNext ? "X" : "O");
    },
    squares() {
      // 選択されているマスを判断するsquaresメソッド
      const history = this.history; // historyにhistoryを代入
      const current = history[this.stepNumber]; // 要素数がstepNumberのhistoryをcurrentに代入
      return current.squares; // currentのsquaresを返す
    },
  },
};
</script>
