<template lang="pug">
  .container
    .max-w-sm.rounded.overflow-hidden.shadow-lg(v-if="person")
      .flex.px-6.py-4
        img.block.h-48.rounded-full.mx-auto.mb-4(:src="person.fields.avatar.fields.file.url")
        .text-center.text-left.flex-grow
          .text-xl.font-semibold {{ person.fields.fullName }}
          .text-sm.text-grey-dark {{ person.fields.summary }}
          .text-sm.text-grey-dark {{ person.fields.github }}
          a(
            :class="['text-blue', 'hover:text-blue-darker']"
            :href="person.fields.github"
          ) GitHub
          a(
            :class="['text-blue', 'hover:text-blue-darker']"
            :href="person.fields.vk"
          ) VK
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
