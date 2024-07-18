<template>
  <div class="flex h-screen w-full items-center justify-center">
    <div class="absolute right-5 top-5 flex text-xs underline underline-offset-4 md:text-xl">
      <button v-if="currentLanguage === 'es'" @click="changeLanguage('en')" class="p-3">
        English
      </button>
      <button v-else @click="changeLanguage('es')" class="p-3">Español</button>
    </div>
    <div class="flex w-full flex-col items-center">
      <img src="../assets/icon.png" class="w-64" alt="Icono de Ernesto Zazueta" />
      <div class="my-10 border-y-4 border-color-white p-2 text-center">
        <p class="mt-2 text-2xl">Ernesto Zazueta</p>
        <p class="mb-2">{{ t("main.developer") }}</p>
      </div>
      <div class="mt-2 flex flex-col items-center justify-center md:flex-row md:gap-4">
        <a href="mailto:ernestozb22@gmail.com">ernestozb22@gmail.com</a>
        <p>+526442553963</p>
        <a href="https://leetcode.com/u/Netokingpo/">Leetcode</a>
        <a href="https://www.linkedin.com/in/ernestozazuetab/">Linkedin</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { loadLocaleMessages } from "../i18n";

const { locale, t } = useI18n();

async function changeLanguage(lang) {
  await loadLocaleMessages(lang);
}

const currentLanguage = computed(() => locale.value);
</script>
