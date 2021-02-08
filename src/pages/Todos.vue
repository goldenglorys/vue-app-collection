<template>
  <div id="todo-body">
    <div id="todo-container">
      <AddTodo />
      <h3 class="text-2xl"><b>Todos</b></h3>
      <div class="todos">
        <div class="todo" v-for="todo in getAllTodos" :key="todo.id">
          {{ todo.title }}
          <i class="fas fa-trash-alt" @click="deleteTodo(todo.id)"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import AddTodo from "../components/AddTodo";

export default {
  components: {
    AddTodo,
  },
  computed: mapGetters(["getAllTodos"]),
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo"]),
  },
  created() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
#todo-body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
  width: 100%;
  height: 100pc;
}
#todo-container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
</style>
