<template lang="pug">
  .container
    .mt-4.rounded.overflow-hidden.shadow-md.bg-white
      .py-4.px-6.text-lg.border-dashed.border-grey-dark.border-b {{ project.fields.title }}
</template>

<script>
import client from '../../plugins/contentful'

export default {
  async asyncData({ params }) {
    const project = await client.getEntry(params.id)
    return {
      project
    }
  }
}
</script>
