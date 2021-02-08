import { createStore } from "vuex";

import cats from "../data/cats";
import dogs from "../data/dogs";

// import todos from "./modules/todos";

const store = createStore({
  state() {
    return {
      isLoggedIn: false,
      authUser: {},
      isOpen: false,
      cats,
      dogs,
      todos: [
        {
          id: 1,
          title: "Todo One",
        },
        {
          id: 1,
          title: "Todo Two",
        },
      ],
    };
  },
  mutations: {
    setIsLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    },
    setAuthUser(state, userPayload) {
      state.authUser = userPayload;
    },
    appendPet: (state, { species, pet }) => {
      state[species].push(pet);
    },
  },
  actions: {
    addPet: ({ commit }, payload) => {
      commit("appendPet", payload);
    },
  },
  getters: {
    getAllTodos: (state) => {
      return state.todos;
    },
  },
});

export default store;
