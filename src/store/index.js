import axios from "axios";
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
      todos: [],
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
    setTodos: (state, todosPayload) => {
      state.todos = todosPayload;
    },
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) =>
      (state.todos = state.todos.filter((todo) => todo.id !== id)),
    updateTodo: (state, updatedTodo) => {
      const index = state.todos.findIndex((todo) => todo.id === updatedTodo.id);
      if (index !== -1) {
        state.todos.splice(index, 1, updatedTodo);
      }
    },
  },
  actions: {
    addPet: ({ commit }, payload) => {
      commit("appendPet", payload);
    },
    async fetchTodos({ commit }) {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      commit("setTodos", response.data);
    },
    async addTodo({ commit }, title) {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        { title, completed: false }
      );
      commit("newTodo", response.data);
    },
    async deleteTodo({ commit }, id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      commit("removeTodo", id);
    },
    async filterTodos({ commit }, e) {
      const limit = parseInt(e.target.value);
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
      );
      commit("setTodos", response.data);
    },
    async updateTodo({ commit }, updatedTodo) {
      await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`
      );
      commit("updateTodo", updatedTodo);
    },
  },
  getters: {
    getAllTodos: (state) => {
      return state.todos;
    },
  },
});

export default store;
