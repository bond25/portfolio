<template lang="pug">
  .container
    .max-w-sm.rounded.overflow-hidden.shadow-lg
      .px-6.py-4
        .font-bold.text-xl.mb-2 {{ person.fields.fullName }}
        .font-bold.text-xl.mb-2 {{ person.fields.email }}
        .font-bold.text-xl.mb-2 {{ person.fields.github }}
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
