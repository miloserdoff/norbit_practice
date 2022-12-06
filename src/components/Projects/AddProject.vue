<template>
    <form @submit.prevent>
        <input id = "inputName" type = "text" v-model="name" placeholder="Название">
        <input id = "inputCode" type = "text" v-model="code" placeholder="Код">
        <button @click="addProject">Создать</button>
    </form>
</template>

<script>
export default{
    props: ["selectedProject"],
    methods: {
        addProject() {
            const newProject = {
                id: this.id,
                title: this.name,
                code: this.code,
                active: true
            }
            this.$emit('add-project', newProject)
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