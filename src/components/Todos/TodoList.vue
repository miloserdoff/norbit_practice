<template>
    <div>
        <ul>
            <TodoItem 
                v-for="(todo, i) of todos"
                v-bind:todo="todo"
                v-bind:index = "i"
                @remove-todo="removeTodo"
                @edit-todo="editTodo"
            />
        </ul>
    </div>
</template>

<script>
import TodoItem from '@/components/Todos/TodoItem.vue'
export default{
    props: ["todos"],
    components: {
        TodoItem
    },
    methods: {
        editTodo(todo) {
            this.$emit("edit-todo", todo)
        },
        removeTodo(id) {
            this.$emit("remove-todo", id)
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>