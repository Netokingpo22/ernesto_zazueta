<template>
  <div class="roboto-mono whiteText flex h-full w-full items-center justify-center">
    <div class="absolute top-5 right-5 flex text-xs md:text-xl underline underline-offset-4">
      <button v-if="currentLanguage === 'es'" @click="changeLanguage('en')" class="p-3">English</button>
      <button v-else @click="changeLanguage('es')" class="p-3">Español</button>
    </div>
    <div class="flex flex-col justify-center items-center w-full">
      <img src="../assets/icon.png" class="w-64" alt="">
      <div class="border-y-4 border-[#F8F8F2] text-center p-2 my-10">
        <p class="text-2xl mt-2">Ernesto Zazueta</p>
        <p class="mb-2">{{ t('main.developer') }}</p>
      </div>
      <div class="flex flex-col mt-2 items-center justify-center md:flex-row md:gap-4">
        <a>ernestozb22@gmail.com</a>
        <p>+526442553963</p>
        <a href="https://leetcode.com/u/Netokingpo/">Leetcode</a>
        <a href="https://www.linkedin.com/in/ernestozazuetab/">Linkedin</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { loadLocaleMessages } from '../i18n';

const { locale, t } = useI18n();

async function changeLanguage(lang) {
  await loadLocaleMessages(lang);
}

const currentLanguage = computed(() => {
  return locale.value;
});
</script>
