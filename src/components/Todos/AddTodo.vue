<template>
    <form @submit.prevent>
        <div>
            <input id = "inputName" type = "text" v-model="name" placeholder="Название">
        </div>
        <div>
            <label><strong>Проект: </strong></label>
            <select v-model="projectName">
                <option v-for="project of projects"> {{ project.title }} </option>
            </select>
        </div>
        <button @click="addTodo">Создать</button>
    </form>

</template>

<script>
export default{
    props: ["selectedTodo"],
    data() {
        return {
            projects: JSON.parse(localStorage.getItem("projects"))
        }
    },
    methods: {
        addTodo() {
            const newTodo = {
                id: this.id,
                title: this.name,
                project: this.projectName,
                active: true
            }
            this.$emit('add-todo', newTodo)
        }
    }
}
</script>

<style scoped>
form{
    display: flex;
    border: 1px solid #ccc;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
}
</style>