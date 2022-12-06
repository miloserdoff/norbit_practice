<template>
    <div>
      <h2 style="text-align:center">Список проводок</h2>
      <router-link to = "/">Домой</router-link>
      <AddProvod 
        @add-provod = "addProvod"
      />
      <FilterProvod
        @set-filter="setFilter"
      />
      <hr>
      <ProvodList 
        v-bind:provods = "provods"
        v-bind:filterDate = "this.filterDate"
        @remove-provod="removeProvod"
      />
    </div>
</template>

<script>
import AddProvod from '@/components/Provods/AddProvod.vue'
import ProvodList from '@/components/Provods/ProvodList.vue'
import FilterProvod from '@/components/Provods/FilterProvod.vue'
export default{
    data() {
        return{
            provods: JSON.parse(localStorage.getItem("provodki")),
            selectedProvod: {
                id: null,
                date: null,
                time: null,
                description: null,
                task: null
            },
            filterDate: "all"
        }
    },
    methods:{
        setFilter(filterDate) {
            this.filterDate = filterDate;
        },
        removeProvod(id) {
            this.provods = this.provods.filter(p => p.id != id)
            localStorage.setItem("provodki", JSON.stringify(this.provods))
        },
        addProvod(provod) {
            const newProvod = {
                id: Date.now(),
                date: provod.date,
                time: provod.time,
                description: provod.description,
                task: provod.task
            }
            this.provods.push(newProvod)
            localStorage.setItem("provodki", JSON.stringify(this.provods))
        }
    },
    components: {
        ProvodList, AddProvod, FilterProvod
    }
}

</script>

<style>

</style>