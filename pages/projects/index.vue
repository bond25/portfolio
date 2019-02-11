<template lang="pug">
  .flex
    .mt-4.rounded.overflow-hidden.shadow-md.bg-white(
      :class="['hover:shadow-lg']"
      v-for="project in projects"
    )
      .py-4.px-6.text-lg.border-dashed.border-grey-dark.border-b {{ project.fields.title }}
      img.mt-1.h-64(:src="project.fields.images[0].fields.file.url")
      .py-4.px-6 Стек:
        .text-sm.text-grey-dark(
          v-for="name in project.fields.technologies"
        ) {{ name }}
      .flex.pb-4.px-6
        nuxt-link(:to="`/projects/${project.sys.id}`").px-4.py-2.text-white.rounded.bg-teal(
          :class="['active:bg-teal-dark', 'hover:bg-teal-light']"
        ) Подробнее
</template>

<script>
import client from '../../plugins/contentful'

export default {
  async asyncData() {
    const persons = await client.getEntries({
      content_type: 'person'
    })
    return {
      projects: persons.items[0].fields.projects
    }
  }
}
</script>
