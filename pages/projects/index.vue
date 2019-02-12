<template lang="pug">
  .flex.flex-wrap.-mx-2.px-4(class="lg:px-0")
    project-card(v-for="(item, index) in projects" :key="index" :project="item")
</template>

<script>
import client from '../../plugins/contentful'

import ProjectCard from '../../components/ProjectCard'

export default {
  components: { ProjectCard },
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
