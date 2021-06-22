export const getters = {
  getHistory(state) {
    return state.history;
  },
  getXIsNext(state) {
    return state.xIsNext;
  },
  getCurrentSquares(state) {
    return state.history[state.stepNumber].squares;
  },
};
