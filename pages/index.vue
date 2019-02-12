<template lang="pug">
  .px-4(class="lg:px-0")
    .flex
      //- Карточка профиля
      .w-full.rounded.overflow-hidden.shadow-lg.bg-white(v-if="person")
        .py-4.px-6.border-dashed.border-grey-dark.border-b.flex.items-baseline
          .text-3xl 👨‍💻
          .text-lg.ml-4 Общие
        .px-6.py-4(class="lg:flex")
          img.block.h-32.rounded-full.mx-auto.mb-4(:src="person.fields.avatar.fields.file.url")
          .text-center.flex-grow(class="lg:ml-12 lg:text-left")
            .mt-2.text-xl.font-semibold.text-grey-darkest {{ person.fields.fullName }}
            .mt-2.text-sm.text-grey-dark.text-justify(class="lg:text-left") {{ person.fields.summary }}
            .mt-2.text-sm.text-grey-darkest Языки: {{ person.fields.languages.join(' ') }}
            .mt-2.flex
              a(
                :class="['text-blue', 'hover:text-blue-darker', 'no-underline']"
                :href="person.fields.github"
              ) GitHub
              a(
                :class="['ml-4', 'text-blue', 'hover:text-blue-darker', 'no-underline']"
                :href="person.fields.vk"
              ) VK
    
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
