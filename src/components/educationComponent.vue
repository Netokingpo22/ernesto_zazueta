<template>
  <div class="roboto-mono text-[#e6e6e6] flex w-full items-center justify-center py-10">
    <div class="flex flex-col justify-center items-center w-full border-b-4">
      <div class="text-center">
        <p class="text-3xl">Educación</p>
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