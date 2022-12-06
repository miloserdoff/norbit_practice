<template>
  <div id = "app">
    <h1>Корпоративный портал учета рабочего времени</h1>
    <div>
      <router-link to = "/todos">Задачи</router-link>
    </div>
    <div class = "proj">
      <router-link to = "/projects">Проекты</router-link>
    </div>
    <div class = "provods">
      <router-link to = "/provodki">Проводки</router-link>
    </div>
    <hr>

    <router-view />
  </div>
</template>

<script>
if (localStorage.length == 0) {
  let TaskArray = [
    {id: 1, title: 'Разработать массив для C#', project: 1, active: true},
    {id: 2, title: 'Заполнить массив для C#', project: 2, active: false},
    {id: 3, title: 'Вывести массив C#', project: 3, active: false}
  ]
  localStorage.setItem("todos", JSON.stringify(TaskArray))

  ProjectsArray = [
    {id: 1, title: 'Калькулятор', code: 023, active: true},
    {id: 2, title: 'CRM', code: 024, active: true},
    {id: 3, title: 'Веб-сайт', code: 025, active: true}
  ]
  localStorage.setItem("projects", JSON.stringify(ProjectsArray))

  ProvodkiArray = [
    {id: 1, date: '2022-03-13',descriprion: 'Текст1',time: 6, task: 1},
    {id: 1, date: '2022-03-14',descriprion: 'Текст2',time: 2, task: 2},
    {id: 1, date: '2022-03-15',descriprion: 'Текст3',time: 1, task: 2},
  ]
  localStorage.setItem("provodki", JSON.stringify(ProvodkiArray))
}
</script>

<style>
#app{
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
  text-align: center;
  margin-bottom: 1rem;
}
.proj{
  margin-top: 10px;
}
.provods{
  margin-top: 10px;
}
</style>
