<template lang="pug">
  div
    .flex
      //- Карточка профиля
      .w-full.rounded.overflow-hidden.shadow-lg.bg-white(v-if="person")
        .py-4.px-6.text-lg.border-dashed.border-grey-dark.border-b Общие
        .flex.px-6.py-4
          img.block.h-48.rounded-full.mx-auto.mb-4(:src="person.fields.avatar.fields.file.url")
          .ml-12.text-left.flex-grow
            .text-xl.font-semibold {{ person.fields.fullName }}
            .text-sm.text-grey-dark {{ person.fields.summary }}
            .text-sm.text-grey-dark Языки:
            .text-sm.text-grey-dark(v-for="lang in person.fields.languages") {{ lang }}
            a(
              :class="['text-blue', 'hover:text-blue-darker']"
              :href="person.fields.github"
            ) GitHub
            a(
              :class="['ml-4', 'text-blue', 'hover:text-blue-darker']"
              :href="person.fields.vk"
            ) VK
    
    .flex
      div(class="w-1/4")
        //- Карточка скилов
        .mt-4.rounded.overflow-hidden.shadow-lg.bg-white(v-if="person")
          .py-4.px-6.text-lg.border-dashed.border-grey-dark.border-b Технологии
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
          experience-card(v-for="item in person.fields.experience" :experience="item")
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
      person: persons.items[0]
    }
  }
}
</script>
