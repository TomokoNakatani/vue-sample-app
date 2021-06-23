export const mutations = {
  updateHistory(state, squares) {
    state.history = state.history.concat([{ squares: squares }]);
  },
  toggleXIsNext(state) {
    state.xIsNext = !state.xIsNext;
  },
  updateStepNumber(state) {
    state.stepNumber = state.history.length - 1;
  },
  updateStepNumberWithStep(state, step) {
    state.stepNumber = step;
  },
  toggleXIsNextWithStep(state, step) {
    state.xIsNext = step % 2 ? false : true;
  },
};
