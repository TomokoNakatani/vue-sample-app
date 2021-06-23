export const actions = {
  updateHistory({ commit }, squares) {
    commit("updateHistory", squares);
  },
  toggleXIsNext({ commit }, step) {
    step ? commit("toggleXIsNextWithStep", step) : commit("toggleXIsNext");
  },
  updateStepNumber({ commit }, step) {
    step
      ? commit("updateStepNumberWithStep", step)
      : commit("updateStepNumber");
  },
};
