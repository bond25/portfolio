<template lang="pug">
  .flex.flex-col(v-if="experience")
    .text-sm.text-grey-dark Начало работы
    .text-base {{ experience.fields.startDate }}
    .text-sm.text-grey-dark Компания
    .text-base {{ experience.fields.company }}
    .text-sm.text-grey-dark Команда
    .text-base {{ experience.fields.team }}
    .text-sm.text-grey-dark Должность
    .text-base {{ experience.fields.position }}
    .text-sm.text-grey-dark Стек:
    ul.list-reset
      li(
        v-for="(item, index) in experience.fields.technologies"
        :key="index"
      ) {{ item }}
    .text-sm.text-grey-dark Обязанности:
    ul.list-reset
      li(
        v-for="(item, index) in experience.fields.responsibilities"
        :key="index"
      ) {{ item }}
</template>

<script>
export default {
  props: {
    experience: {}
  }
}
</script>
