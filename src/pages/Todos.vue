<template>
  <div id="todo-body">
    <div id="todo-container">
      <AddTodo />
      <FilterTodo />
      <h3 class="text-2xl"><b>Todos</b></h3>
      <div class="legend">
        <span>Double click to mark as complete</span>
        <span>
          <span class="incomplete-box"> = Incomplete</span>
        </span>
        <span>
          <span class="complete-box"> = Complete</span>
        </span>
      </div>
      <div class="todos">
        <div
          class="todo"
          v-for="todo in getAllTodos"
          :key="todo.id"
          @dblclick="onDblClick(todo)"
          :class="{ 'is-complete': todo.completed }"
        >
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
import FilterTodo from "../components/FilterTodo";

export default {
  components: {
    AddTodo,
    FilterTodo,
  },
  computed: mapGetters(["getAllTodos"]),
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onDblClick(todo) {
      const updatedTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };

      this.updateTodo(updatedTodo);
    },
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
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
.is-complete {
  background: #35495e;
  color: #fff;
}
</style>
