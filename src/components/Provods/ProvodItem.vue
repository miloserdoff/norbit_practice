<template>
    <li v-bind:class = "{net: provod.time < 8,
    nt: provod.time == 8, ext: provod.time > 8}">
        <span>
            <div>
                Дата проводки: <strong> {{ provod.date }} </strong>
            </div>
            <div>
                Количество часов: <strong> {{ provod.time }} </strong>
            </div>
            <div>
                Описание проводки: <strong> {{ provod.description }} </strong>
            </div>
            <div>
                Задача: <strong> {{ provod.task }} </strong>
            </div>
        </span>
        <button class = "deleteBtn" v-on:click = "$emit('remove-provod', provod.id)">&times;</button>
        
    </li>
</template>

<script>
export default{
    props: {
        provod: {
            type: Object,
            required: true,
        }, 
        index: Number
    },  
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
.net {
  color: black;
  background-color: yellow;
}
.nt {
  color: black;
  background-color: green;
}
.ext {
  background-color: darkred;
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