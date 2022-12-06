<template>
    <form @submit.prevent>
        <input id = "inputDate" type = "date" v-model="date">
        <input id = "inputTime" type = "text" v-model="time" placeholder="Затраченное время">
        <input id = "inputDescriprion" type = "text" v-model="description" placeholder="Описание задачи">
        <select v-model="task">
            <option v-for="todo of avTodos"> {{ todo.title }} </option>
        </select>
        <button @click="addProvod">Создать</button>
    </form>
</template>

<script>
export default{
    props: ["selectedProvod"],
    data() {
        return {
            todos: JSON.parse(localStorage.getItem("todos")),
            SumHour: 0
        }
    },
    computed: {
        avTodos: function() {
            return this.todos.filter(p => p.active == true)
        }
    },
    methods: {
        addProvod() {
            if(this.SumHour <= 24)
            {
                const newProvod = {
                    id: this.id,
                    date: this.date,
                    time: this.time,
                    description: this.description,
                    task: this.task
                }
                this.SumHour += this.time
                this.$emit('add-provod', newProvod)
            }
            else alert("Вы уже использовали 24-часовой лимит для добавления проводок!")
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