<template>
    <h4 style="text-align:center">Редактирование</h4>
    <form @submit.prevent>
        <div>
            <label><strong>Название: </strong></label>
            <input type="text" v-model="this.selectedProject.title">
        </div>
        <div>
            <label><strong>Код: </strong></label>
            <input type="text" v-model="this.selectedProject.code">
        </div>
        <div>
            <label><strong>Активный проект: </strong></label>
            <input type="checkbox" v-model="this.selectedProject.active">
        </div>
        <button id = "saveBtn" @click="this.$emit('edit-new-project', this.selectedProject)"> Сохранить </button>
    </form>
</template>

<script>
export default{
    props: ["selectedProject", "projects"],
    data() {
        return {
            projects: JSON.parse(localStorage.getItem("projects"))
        }
    }
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