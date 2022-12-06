<template>
    <div>
        <ul>
            <ProjectItem 
                v-for="(project, i) of projects"
                v-bind:project="project"
                v-bind:index = "i"
                @remove-project="removeProject"
                @edit-project="editProject"
            />
        </ul>
    </div>
</template>

<script>
import ProjectItem from '@/components/Projects/ProjectItem.vue'
export default{
    props: ["projects"],
    components: {
        ProjectItem
    },
    methods: {
        editProject(project) {
            this.$emit("edit-project", project)
        },
        removeProject(id) {
            this.$emit("remove-project", id)
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