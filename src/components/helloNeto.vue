<template>
  <div class="roboto-mono text-[#e6e6e6] flex h-full w-full items-center justify-center">
    <div class="flex flex-col justify-center items-center w-full">
      <img v-if="isMobile" src="../assets/icon.png" class="w-[384]" alt="">
      <img v-else src="../assets/icon.png" class="w-[576]" alt="">
      <div class="border-y-4 border-[#e6e6e6] text-center px-2">
        <p class="text-3xl mt-2">Ernesto Zazueta</p>
        <p class="text-xl mb-2">Desarollador de software</p>
      </div>
      <div v-if="isMobile" class="flex flex-col mt-2 gap-1 items-center justify-center">
        <p class="text-sm">+526442553963</p>
        <a class="text-sm">ernestozb22@gmail.com</a>
        <a class="text-sm" href="https://leetcode.com/u/Netokingpo/">Leetcode</a>
        <a class="text-sm" href="https://www.linkedin.com/in/ernestozazuetab/">Linkedin</a>
      </div>
      <div v-else class="flex flex-row mt-2 gap-1 items-center justify-center">
        <p class="text-sm">+526442553963</p>
        <p class="text-sm">|</p>
        <a class="text-sm">ernestozb22@gmail.com</a>
        <p class="text-sm">|</p>
        <a class="text-sm" href="https://leetcode.com/u/Netokingpo/">Leetcode</a>
        <p class="text-sm">|</p>
        <a class="text-sm" href="https://www.linkedin.com/in/ernestozazuetab/">Linkedin</a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isMobile = ref(false);

const checkDevice = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  checkDevice();
  window.addEventListener('resize', checkDevice);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkDevice);
});
</script>
