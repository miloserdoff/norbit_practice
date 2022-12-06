<template>
    <li>
            <button class = "editBtn" @click="$emit('edit-project', project)">Edit</button>
            <span v-bind:class="{done: project.active}">
                <strong>{{ project.title }} </strong>
                (Код: <strong> {{ project.code }} </strong>)
                <span>
                    (Активный: 
                    <strong>
                    <label v-if="(project.active == false)" style="color: red">Нет</label>
                    <label v-else style="color: green">Да</label> </strong>)
                </span>
            </span>
            <button class = "deleteBtn" v-on:click = "$emit('remove-project', project.id)">&times;</button>
            
        </li>
    </template>
    
    <script>
    export default{
        props: {
            project: {
                type: Object,
                required: true,
            },
            index: Number
        }
    }
    </script>
    
    <style scoped>
    li {
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin-bottom: 1rem;
    }
    .deleteBtn {
        background: red;
        color: #fff;
        border-radius: 50%;
        font-weight: bold;
    }
    input{
        margin-right: 1rem;
    }
    </style>