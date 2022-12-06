<template>
    <div>
      <h2 style="text-align:center">Список задач</h2>
      <router-link to = "/">Домой</router-link>
      <AddTodo 
        @add-todo = "addTodo"
      />
      <EditTodo 
        v-bind:selectedTodo="selectedTodo"
        @edit-new-todo="editNewTodo"
      />
      <hr>
      <TodoList 
        v-bind:todos = "todos"
        @remove-todo="removeTodo"
        @edit-todo = "editTodo"
      />
    </div>
</template>

<script>
import AddTodo from '@/components/Todos/AddTodo.vue'
import TodoList from '@/components/Todos/TodoList.vue'
import EditTodo from '@/components/Todos/EditTodo.vue'
export default{
    data() {
        return{
            todos: JSON.parse(localStorage.getItem("todos")),
            selectedTodo: {
                id: null,
                title: null,
                active: true,
                project: null
            }
        }
    },
    methods: {
        editNewTodo(newTodo) {
            for (let i of this.todos) {
                if (newTodo.id == i.id) {
                    i.title = newTodo.title,
                    i.project = newTodo.project
                    i.active = newTodo.active
                    break
                }
            }
            localStorage.setItem("todos", JSON.stringify(this.todos))
        },
        editTodo(todo) {
            this.selectedTodo.id = todo.id,
            this.selectedTodo.title = todo.title,
            this.selectedTodo.active = todo.active
        },
        removeTodo(id){
            this.todos = this.todos.filter(t => t.id != id)
            localStorage.setItem("todos", JSON.stringify(this.todos))
        },
        addTodo(todo){
            const newTodo = {
                id: Date.now(),
                title: todo.title,
                project: todo.project,
                active: todo.active
            }
            this.todos.push(newTodo)
            localStorage.setItem("todos", JSON.stringify(this.todos))
        }
    },
    components: {
        TodoList, AddTodo, EditTodo
    }
}
</script>

<style>

</style>