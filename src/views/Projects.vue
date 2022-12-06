<template>
    <div>
      <h2 style="text-align:center">Список проектов</h2>
      <router-link to = "/">Домой</router-link>
      <AddProject 
        @add-project = "addProject"
      />
      <EditProject 
        v-bind:selectedProject="selectedProject"
        @edit-new-project="editNewProject"
      />
      <hr>
      <ProjectList 
        v-bind:projects = "projects"
        @remove-project="removeProject"
        @edit-project = "editProject"
      />
    </div>
</template>
<script>
import AddProject from '@/components/Projects/AddProject.vue'
import ProjectList from '@/components/Projects/ProjectList.vue'
import EditProject from '@/components/Projects/EditProject.vue'
export default{
    data() {
        return{
            projects: JSON.parse(localStorage.getItem("projects")),
            selectedProject: {
                id: null,
                title: null,
                code: null, 
                active: true
            }
        }
    },
    methods:{
        editNewProject(newProject) {
            for (let i of this.projects) {
                if (newProject.id == i.id) {
                    i.title = newProject.title,
                    i.code = newProject.code,
                    i.active = newProject.active
                    break
                }
            }
            localStorage.setItem("projects", JSON.stringify(this.projects))
        },
        editProject(project){
            this.selectedProject.id = project.id,
            this.selectedProject.title = project.title,
            this.selectedProject.code = project.code,
            this.selectedProject.active = project.code
        },
        removeProject(id) {
            this.projects = this.projects.filter(p => p.id != id)
            localStorage.setItem("projects", JSON.stringify(this.projects))
        },
        addProject(project){
            const newProject = {
                id: Date.now(),
                title: project.title,
                code: project.code,
                active: project.code
            }
            this.projects.push(newProject)
            localStorage.setItem("projects", JSON.stringify(this.projects))
        }
    },
    components: {
        ProjectList, AddProject, EditProject
    }
}
</script>

<style>

</style>