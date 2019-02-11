<template lang="pug">
  .h-screen
    .overflow-auto.h-full.bg-grey-lighter
      .container.mx-auto
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
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
