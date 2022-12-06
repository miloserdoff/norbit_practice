<template>
    <h3 style="text-align:center">Редактирование</h3>
    <form @submit.prevent>
        <div>
            <label><strong>Название: </strong></label>
            <input type="text" v-model="this.selectedTodo.title">
        </div>
        <div>
            <label><strong>Проект: </strong></label>
            <select v-model="this.selectedTodo.project">
                <option v-for="project of avProjects"> {{ project.title }} </option>
            </select>
        </div>
        <div>
            <label><strong>Активный проект: </strong></label>
            <input type="checkbox" v-model="this.selectedTodo.active">
        </div>
        <button id = "saveBtn" @click="this.$emit('edit-new-todo', this.selectedTodo)"> Сохранить </button>
    </form>
</template>

<script>
export default{
    props: ["selectedTodo", "projects"],
    data() {
        return{
            todos: JSON.parse(localStorage.getItem("todos")),
            projects: JSON.parse(localStorage.getItem("projects"))
        }
    },
    computed: {
        avProjects: function() {
            return this.projects.filter(p => p.active == true)
        }
    },
}
</script>

<style scoped>
div{
    margin-top: 10px;
}
.saveBtn{
    padding: 8px;
}
form{
    display: flex;
    border: 1px solid #ccc;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
}


</style>