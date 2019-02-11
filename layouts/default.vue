<template lang="pug">
  .h-screen
    .overflow-auto.h-full.bg-grey-lighter
      .container.mx-auto.mb-8
        nav.flex.py-6
          .flex.w-full.block.flex-grow.items-center
            .text-sm
              nuxt-link.text-teal.no-underline.px-2.py-2.text-center(
                :class="['hover:text-teal-dark']"
                v-for="item in menu"
                :key="item.label"
                :to="item.path"
              ) {{ item.label }} 
        nuxt
</template>

<script>
export default {
  data() {
    return {
      menu: [{ label: 'Я', path: '/' }, { label: 'Проекты', path: '/projects' }]
    }
  }
}
</script>


<style>
html {
  font-family: 'Open Sans', sans-serif;
}
</style>
