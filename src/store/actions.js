export const actions = {
  updateHistory({ commit }, squares) {
    commit("updateHistory", squares);
  },
  toggleXIsNext({ commit }) {
    commit("toggleXIsNext");
  },
  updateStepNumber({ commit }) {
    commit("updateStepNumber");
  },
};
