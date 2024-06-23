<template>
  <mainPage />
</template>

<script setup>
import mainPage from './components/mainPage.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');

*::-webkit-scrollbar {
  width: 5px;
}

*::-webkit-scrollbar-track {
  background: hsl(0, 0%, 10%);
}

*::-webkit-scrollbar-thumb {
  border-radius: 20px;
  border: 3px solid hsl(0, 0%, 5%);
}

* {
  scrollbar-width: thin;
  scrollbar-color: hsl(0, 0%, 5%) hsl(0, 0%, 10%);
}

.roboto-mono {
  font-family: "Roboto Mono", monospace;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>