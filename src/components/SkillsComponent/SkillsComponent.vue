<template>
  <div class="flex w-full items-center justify-center border-t-2 border-border-grey py-5">
    <div class="flex w-full flex-col items-center justify-center">
      <div class="flex w-[98%] items-center justify-center md:w-[70%] md:min-w-[768px]">
        <div class="flex w-full flex-col items-start justify-center text-xs leading-5 md:text-xl">
          <div class="flex flex-row">
            <p class="text-color-blue">{{ t("skill.skill") }}&nbsp;</p>
            <p class="text-color-charcoal">{</p>
          </div>
          <TechnologiesComponent />
          <LanguagesComponent />
          <SoftComponent />
          <p class="text-color-charcoal">}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";
import TechnologiesComponent from "./TechnologiesComponent.vue";
import LanguagesComponent from "./LanguagesComponent.vue";
import SoftComponent from "./SoftComponent.vue";
const { t } = useI18n();
</script>
