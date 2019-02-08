<template lang="pug">
  div(:class="['container', 'mx-auto', 'my-4']")
    //- Карточка профиля
    .max-w-sm.rounded.overflow-hidden.shadow-lg.bg-white(v-if="person")
      .py-4.px-6.text-lg.border-dashed.border-grey-dark.border-b Общие
      .flex.px-6.py-4
        img.block.h-48.rounded-full.mx-auto.mb-4(:src="person.fields.avatar.fields.file.url")
        .text-center.text-left.flex-grow
          .text-xl.font-semibold {{ person.fields.fullName }}
          .text-sm.text-grey-dark {{ person.fields.summary }}
          .text-sm.text-grey-dark {{ person.fields.github }}
          .text-sm.text-grey-dark Языки:
          .text-sm.text-grey-dark(v-for="lang in person.fields.languages") {{ lang }}
          a(
            :class="['text-blue', 'hover:text-blue-darker']"
            :href="person.fields.github"
          ) GitHub
          a(
            :class="['text-blue', 'hover:text-blue-darker']"
            :href="person.fields.vk"
          ) VK
    //- Карточка скилов
    .mt-4.max-w-sm.rounded.overflow-hidden.shadow-lg.bg-white(v-if="person")
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
</template>

<script>
import client from '../plugins/contentful'

export default {
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
