<template lang="pug">
  .px-4(class="lg:px-0")
    .flex
      //- Карточка профиля
      .w-full.rounded.overflow-hidden.shadow-lg.bg-white(v-if="person")
        .flex
          .flex.flex-col
            img.block.w-64(:src="person.fields.avatar.fields.file.url")
            .px-4.py-2.flex.justify-center.bg-teal-light
              a.github(:href="person.fields.github")
              a.vk.ml-4(:href="person.fields.vk")
          .flex.flex-col.w-full
            .px-8.py-4.text-xl.font-semibold.text-grey-darkest {{ person.fields.fullName }}
            .bg-teal-light.h-full.px-8.py-4.text-white.text-sm
              .font-semibold(class="lg:text-left") Обо мне
              .mt-2 {{ person.fields.summary }}
              .mt-4.font-semibold Языки
              .mt-2 {{ person.fields.languages.join(' ') }}
    
    .flex.flex-col(class="lg:flex-row")
      div(class="lg:w-1/4")
        //- Карточка скилов
        .mt-4.rounded.overflow-hidden.shadow-lg.bg-white(v-if="person")
          .py-4.px-6.border-dashed.border-grey-dark.border-b.flex.items-baseline
            .text-3xl 💻
            .text-lg.ml-4 Технологии
          .py-4
            .px-6.flex.items-baseline
              .text-xs(class="w-1/2") Языки
              ul.list-reset.font-thin.text-grey-darkest.text-left.text-sm.leading-normal(class="w-1/2")
                li(v-for="lang in person.fields.progLangs") {{ lang }}
            .mt-2.px-6.flex.items-baseline
              .text-xs(class="w-1/2") Фреймворки
              ul.list-reset.font-thin.text-grey-darkest.text-left.text-sm.leading-normal(class="w-1/2")
                li(v-for="item in person.fields.frameworks") {{ item }}
            .mt-2.px-6.flex.items-baseline
              .text-xs(class="w-1/2") Базы данных
              ul.list-reset.font-thin.text-grey-darkest.text-left.text-sm.leading-normal(class="w-1/2")
                li(v-for="db in person.fields.databases") {{ db }}
      div.flex.flex-wrap(class="lg:w-3/4")
        //- Карточка опыта работы
        template(v-if="person" )
          experience-card(v-for="(item, index) in experience" :key="index" :experience="item")
</template>

<script>
import client from '../plugins/contentful'

import ExperienceCard from '../components/ExperienceCard'

export default {
  components: { ExperienceCard },
  async asyncData() {
    const persons = await client.getEntries({
      content_type: 'person'
    })
    return {
      person: persons.items[0],
      experience: persons.items[0].fields.experience
    }
  }
}
</script>

<style scoped>
.vk {
  transition: all 0.5s ease;
  display: inline-block;
  height: 32px;
  width: 32px;
  background-size: cover;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDk3Ljc1IDk3Ljc1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5Ny43NSA5Ny43NTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnPgoJPHBhdGggZD0iTTQ4Ljg3NSwwQzIxLjg4MywwLDAsMjEuODgyLDAsNDguODc1UzIxLjg4Myw5Ny43NSw0OC44NzUsOTcuNzVTOTcuNzUsNzUuODY4LDk3Ljc1LDQ4Ljg3NVM3NS44NjcsMCw0OC44NzUsMHogICAgTTczLjY2Nyw1NC4xNjFjMi4yNzgsMi4yMjUsNC42ODgsNC4zMTksNi43MzMsNi43NzRjMC45MDYsMS4wODYsMS43NiwyLjIwOSwyLjQxLDMuNDcyYzAuOTI4LDEuODAxLDAuMDksMy43NzYtMS41MjIsMy44ODMgICBsLTEwLjAxMy0wLjAwMmMtMi41ODYsMC4yMTQtNC42NDQtMC44MjktNi4zNzktMi41OTdjLTEuMzg1LTEuNDA5LTIuNjctMi45MTQtNC4wMDQtNC4zNzFjLTAuNTQ1LTAuNTk4LTEuMTE5LTEuMTYxLTEuODAzLTEuNjA0ICAgYy0xLjM2NS0wLjg4OC0yLjU1MS0wLjYxNi0zLjMzMywwLjgxYy0wLjc5NywxLjQ1MS0wLjk3OSwzLjA1OS0xLjA1NSw0LjY3NGMtMC4xMDksMi4zNjEtMC44MjEsMi45NzgtMy4xOSwzLjA4OSAgIGMtNS4wNjIsMC4yMzctOS44NjUtMC41MzEtMTQuMzI5LTMuMDgzYy0zLjkzOC0yLjI1MS02Ljk4Ni01LjQyOC05LjY0Mi05LjAyNWMtNS4xNzItNy4wMTItOS4xMzMtMTQuNzA4LTEyLjY5Mi0yMi42MjUgICBjLTAuODAxLTEuNzgzLTAuMjE1LTIuNzM3LDEuNzUyLTIuNzc0YzMuMjY4LTAuMDYzLDYuNTM2LTAuMDU1LDkuODA0LTAuMDAzYzEuMzMsMC4wMjEsMi4yMSwwLjc4MiwyLjcyMSwyLjAzNyAgIGMxLjc2Niw0LjM0NSwzLjkzMSw4LjQ3OSw2LjY0NCwxMi4zMTNjMC43MjMsMS4wMjEsMS40NjEsMi4wMzksMi41MTIsMi43NmMxLjE2LDAuNzk2LDIuMDQ0LDAuNTMzLDIuNTkxLTAuNzYyICAgYzAuMzUtMC44MjMsMC41MDEtMS43MDMsMC41NzctMi41ODVjMC4yNi0zLjAyMSwwLjI5MS02LjA0MS0wLjE1OS05LjA1Yy0wLjI4LTEuODgzLTEuMzM5LTMuMDk5LTMuMjE2LTMuNDU1ICAgYy0wLjk1Ni0wLjE4MS0wLjgxNi0wLjUzNS0wLjM1MS0xLjA4MWMwLjgwNy0wLjk0NCwxLjU2My0xLjUyOCwzLjA3NC0xLjUyOGwxMS4zMTMtMC4wMDJjMS43ODMsMC4zNSwyLjE4MywxLjE1LDIuNDI1LDIuOTQ2ICAgbDAuMDEsMTIuNTcyYy0wLjAyMSwwLjY5NSwwLjM0OSwyLjc1NSwxLjU5NywzLjIxYzEsMC4zMywxLjY2LTAuNDcyLDIuMjU4LTEuMTA1YzIuNzEzLTIuODc5LDQuNjQ2LTYuMjc3LDYuMzc3LTkuNzk0ICAgYzAuNzY0LTEuNTUxLDEuNDIzLTMuMTU2LDIuMDYzLTQuNzY0YzAuNDc2LTEuMTg5LDEuMjE2LTEuNzc0LDIuNTU4LTEuNzU0bDEwLjg5NCwwLjAxM2MwLjMyMSwwLDAuNjQ3LDAuMDAzLDAuOTY1LDAuMDU4ICAgYzEuODM2LDAuMzE0LDIuMzM5LDEuMTA0LDEuNzcxLDIuODk1Yy0wLjg5NCwyLjgxNC0yLjYzMSw1LjE1OC00LjMyOSw3LjUwOGMtMS44MiwyLjUxNi0zLjc2MSw0Ljk0NC01LjU2Myw3LjQ3MSAgIEM3MS40OCw1MC45OTIsNzEuNjExLDUyLjE1NSw3My42NjcsNTQuMTYxeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojMkIyQjJCIiBkYXRhLW9sZF9jb2xvcj0iIzJBMjkyOSI+PC9wYXRoPgo8L2c+PC9nPiA8L3N2Zz4=);
}

.vk:hover,
.github:hover {
  transform: translateY(-4px);
}

.github {
  transition: all 0.5s ease;
  display: inline-block;
  height: 32px;
  width: 32px;
  background-size: cover;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDQzOC41NDkgNDM4LjU0OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjU0OSA0MzguNTQ5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGc+Cgk8cGF0aCBkPSJNNDA5LjEzMiwxMTQuNTczYy0xOS42MDgtMzMuNTk2LTQ2LjIwNS02MC4xOTQtNzkuNzk4LTc5LjhDMjk1LjczNiwxNS4xNjYsMjU5LjA1Nyw1LjM2NSwyMTkuMjcxLDUuMzY1ICAgYy0zOS43ODEsMC03Ni40NzIsOS44MDQtMTEwLjA2MywyOS40MDhjLTMzLjU5NiwxOS42MDUtNjAuMTkyLDQ2LjIwNC03OS44LDc5LjhDOS44MDMsMTQ4LjE2OCwwLDE4NC44NTQsMCwyMjQuNjMgICBjMCw0Ny43OCwxMy45NCw5MC43NDUsNDEuODI3LDEyOC45MDZjMjcuODg0LDM4LjE2NCw2My45MDYsNjQuNTcyLDEwOC4wNjMsNzkuMjI3YzUuMTQsMC45NTQsOC45NDUsMC4yODMsMTEuNDE5LTEuOTk2ICAgYzIuNDc1LTIuMjgyLDMuNzExLTUuMTQsMy43MTEtOC41NjJjMC0wLjU3MS0wLjA0OS01LjcwOC0wLjE0NC0xNS40MTdjLTAuMDk4LTkuNzA5LTAuMTQ0LTE4LjE3OS0wLjE0NC0yNS40MDZsLTYuNTY3LDEuMTM2ICAgYy00LjE4NywwLjc2Ny05LjQ2OSwxLjA5Mi0xNS44NDYsMWMtNi4zNzQtMC4wODktMTIuOTkxLTAuNzU3LTE5Ljg0Mi0xLjk5OWMtNi44NTQtMS4yMzEtMTMuMjI5LTQuMDg2LTE5LjEzLTguNTU5ICAgYy01Ljg5OC00LjQ3My0xMC4wODUtMTAuMzI4LTEyLjU2LTE3LjU1NmwtMi44NTUtNi41N2MtMS45MDMtNC4zNzQtNC44OTktOS4yMzMtOC45OTItMTQuNTU5ICAgYy00LjA5My01LjMzMS04LjIzMi04Ljk0NS0xMi40MTktMTAuODQ4bC0xLjk5OS0xLjQzMWMtMS4zMzItMC45NTEtMi41NjgtMi4wOTgtMy43MTEtMy40MjljLTEuMTQyLTEuMzMxLTEuOTk3LTIuNjYzLTIuNTY4LTMuOTk3ICAgYy0wLjU3Mi0xLjMzNS0wLjA5OC0yLjQzLDEuNDI3LTMuMjg5YzEuNTI1LTAuODU5LDQuMjgxLTEuMjc2LDguMjgtMS4yNzZsNS43MDgsMC44NTNjMy44MDcsMC43NjMsOC41MTYsMy4wNDIsMTQuMTMzLDYuODUxICAgYzUuNjE0LDMuODA2LDEwLjIyOSw4Ljc1NCwxMy44NDYsMTQuODQyYzQuMzgsNy44MDYsOS42NTcsMTMuNzU0LDE1Ljg0NiwxNy44NDdjNi4xODQsNC4wOTMsMTIuNDE5LDYuMTM2LDE4LjY5OSw2LjEzNiAgIGM2LjI4LDAsMTEuNzA0LTAuNDc2LDE2LjI3NC0xLjQyM2M0LjU2NS0wLjk1Miw4Ljg0OC0yLjM4MywxMi44NDctNC4yODVjMS43MTMtMTIuNzU4LDYuMzc3LTIyLjU1OSwxMy45ODgtMjkuNDEgICBjLTEwLjg0OC0xLjE0LTIwLjYwMS0yLjg1Ny0yOS4yNjQtNS4xNGMtOC42NTgtMi4yODYtMTcuNjA1LTUuOTk2LTI2LjgzNS0xMS4xNGMtOS4yMzUtNS4xMzctMTYuODk2LTExLjUxNi0yMi45ODUtMTkuMTI2ICAgYy02LjA5LTcuNjE0LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc5Yy0zLjkwMS0xMi4zNzQtNS44NTItMjYuNjQ4LTUuODUyLTQyLjgyNmMwLTIzLjAzNSw3LjUyLTQyLjYzNywyMi41NTctNTguODE3ICAgYy03LjA0NC0xNy4zMTgtNi4zNzktMzYuNzMyLDEuOTk3LTU4LjI0YzUuNTItMS43MTUsMTMuNzA2LTAuNDI4LDI0LjU1NCwzLjg1M2MxMC44NSw0LjI4MywxOC43OTQsNy45NTIsMjMuODQsMTAuOTk0ICAgYzUuMDQ2LDMuMDQxLDkuMDg5LDUuNjE4LDEyLjEzNSw3LjcwOGMxNy43MDUtNC45NDcsMzUuOTc2LTcuNDIxLDU0LjgxOC03LjQyMXMzNy4xMTcsMi40NzQsNTQuODIzLDcuNDIxbDEwLjg0OS02Ljg0OSAgIGM3LjQxOS00LjU3LDE2LjE4LTguNzU4LDI2LjI2Mi0xMi41NjVjMTAuMDg4LTMuODA1LDE3LjgwMi00Ljg1MywyMy4xMzQtMy4xMzhjOC41NjIsMjEuNTA5LDkuMzI1LDQwLjkyMiwyLjI3OSw1OC4yNCAgIGMxNS4wMzYsMTYuMTgsMjIuNTU5LDM1Ljc4NywyMi41NTksNTguODE3YzAsMTYuMTc4LTEuOTU4LDMwLjQ5Ny01Ljg1Myw0Mi45NjZjLTMuOSwxMi40NzEtOC45NDEsMjIuNDU3LTE1LjEyNSwyOS45NzkgICBjLTYuMTkxLDcuNTIxLTEzLjkwMSwxMy44NS0yMy4xMzEsMTguOTg2Yy05LjIzMiw1LjE0LTE4LjE4Miw4Ljg1LTI2Ljg0LDExLjEzNmMtOC42NjIsMi4yODYtMTguNDE1LDQuMDA0LTI5LjI2Myw1LjE0NiAgIGM5Ljg5NCw4LjU2MiwxNC44NDIsMjIuMDc3LDE0Ljg0Miw0MC41Mzl2NjAuMjM3YzAsMy40MjIsMS4xOSw2LjI3OSwzLjU3Miw4LjU2MmMyLjM3OSwyLjI3OSw2LjEzNiwyLjk1LDExLjI3NiwxLjk5NSAgIGM0NC4xNjMtMTQuNjUzLDgwLjE4NS00MS4wNjIsMTA4LjA2OC03OS4yMjZjMjcuODgtMzguMTYxLDQxLjgyNS04MS4xMjYsNDEuODI1LTEyOC45MDYgICBDNDM4LjUzNiwxODQuODUxLDQyOC43MjgsMTQ4LjE2OCw0MDkuMTMyLDExNC41NzN6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMyQjJCMkIiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CjwvZz48L2c+IDwvc3ZnPg==);
}
</style>
