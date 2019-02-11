<template lang="pug">
  div
    .flex
      //- Карточка профиля
      .w-full.rounded.overflow-hidden.shadow-lg.bg-white(v-if="person")
        .py-4.px-6.border-dashed.border-grey-dark.border-b.flex.items-baseline
          .text-3xl 👨‍💻
          .text-lg.ml-4 Общие
        .flex.px-6.py-4
          img.block.h-32.rounded-full.mx-auto.mb-4(:src="person.fields.avatar.fields.file.url")
          .ml-12.text-left.flex-grow
            .mt-2.text-xl.font-semibold.text-grey-darkest {{ person.fields.fullName }}
            .mt-2.text-sm.text-grey-dark {{ person.fields.summary }}
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
    
    .flex
      div(class="w-1/4")
        //- Карточка скилов
        .mt-4.rounded.overflow-hidden.shadow-lg.bg-white(v-if="person")
          .py-4.px-6.border-dashed.border-grey-dark.border-b.flex.items-baseline
            .text-3xl 💻
            .text-lg.ml-4 Технологии
          .py-4
            .text-base.px-6 Языки
            ul.list-reset.font-thin.text-grey-darker
              li.py-2.px-6(v-for="lang in person.fields.progLangs" :class="['hover:bg-grey-lighter', 'cursor-pointer']") {{ lang }}
            .text-base.px-6 Фреймворки
            ul.list-reset.font-thin.text-grey-darker
              li.py-2.px-6(v-for="item in person.fields.frameworks" :class="['hover:bg-grey-lighter', 'cursor-pointer']") {{ item }}
            .text-base.px-6 Базы данных
            ul.list-reset.font-thin.text-grey-darker
              li.py-2.px-6(v-for="db in person.fields.databases" :class="['hover:bg-grey-lighter', 'cursor-pointer']") {{ db }}
      div.flex.flex-wrap(class="w-3/4")
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
      experience: persons.items[0].fields.experience.reverse()
    }
  }
}
</script>
