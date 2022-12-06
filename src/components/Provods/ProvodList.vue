<template>
    <div>
        <ul>
            <ProvodItem
                v-for="(provod, i) of provods"
                v-bind:provod="provod"
                v-bind:index = "i"
                @remove-provod="removeProvod"
                @edit-provod="editProvod"
            />
        </ul>
    </div>
</template>

<script>
import ProvodItem from '@/components/Provods/ProvodItem.vue'
export default{
    props: ["provods"],
    components: {
        ProvodItem
    },
    methods: {
        editProvod(provod) {
            this.$emit("edit-provod", provod)
        },
        removeProvod(id) {
            this.$emit("remove-provod", id)
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