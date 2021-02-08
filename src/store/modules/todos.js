// import axios from "axios";

const state = {
  todos: [
    {
      id: 1,
      titile: "Todo One",
    },
    {
      id: 1,
      titile: "Todo Two",
    },
  ],
};

const getters = {
  getAllTodos: (state) => state.todos,
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
