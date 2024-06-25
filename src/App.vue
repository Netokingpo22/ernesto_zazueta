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
  font-weight: 450;
  font-style: normal;
}

.greenVar {
  color: #50FA7B;
}

.blueClass {
  color: #788eff;
}

.pinkClass {
  color: #FF79C6;
}

.whiteText {
  color: #F8F8F2;
}

.whiteChar {
  color: #44475A;
}
</style>