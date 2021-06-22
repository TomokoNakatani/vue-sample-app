import Vue from "vue";
import Vuex from "vuex";
import { mutations } from "./mutations";
import { getters } from "./getters";
import { actions } from "./actions";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    history: [{ squares: Array(9).fill(null) }],
    xIsNext: true,
    stepNumber: 0,
  },
  mutations,
  getters,
  actions,
});

export default store;
