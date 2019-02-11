<template lang="pug">
  .w-full.mt-4.ml-4.rounded.overflow-hidden.shadow-lg.bg-white(v-if="experience")
    .py-4.px-6.text-lg.border-dashed.border-grey-dark.border-b {{ experience.fields.company }}
    .py-4.px-6
      .flex.flex-col
        .flex.items-start
          img.block.w-32(:src="experience.fields.logo.fields.file.url")
          .w-full.flex.justify-end
            .ml-4.flex.flex-col
              .text-xs.text-grey-dark Команда
              .text-sm.text-grey-darkest {{ experience.fields.team }}
            .ml-4.flex.flex-col
              .text-xs.text-grey-dark Должность
              .text-sm.text-grey-darkest {{ experience.fields.position }}
        .mt-2.text-xs.text-grey-dark Начало работы
        .text-sm.text-grey-darkest {{ formatDate(experience.fields.startDate) }}
        .mt-2.text-xs.text-grey-dark Стек:
        .inline-block.text-sm.text-grey-darkest {{ technologies }}
        .mt-2.text-xs.text-grey-dark Обязанности:
        ul.list-reset
          li.mt-1.text-sm.text-grey-darkest(
            v-for="(item, index) in experience.fields.responsibilities"
            :key="index"
          ) {{ item }}
</template>

<script>
import { formatISODate } from '../plugins/date'

export default {
  props: {
    experience: {}
  },
  computed: {
    technologies() {
      return this.experience.fields.technologies.join(', ')
    }
  },
  methods: {
    formatDate(date) {
      return formatISODate(date)
    }
  }
}
</script>
