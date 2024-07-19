<template>
  <div>
    <p>
      <span class="text-color-pink">{{ t("personalExperience.one.name") }}&nbsp;</span>
      <span class="text-color-charcoal">{</span>
    </p>
    <div class="ml-3 md:ml-4">
      <p>
        <span class="text-color-green">{{ t("personalExperience.date") }}&nbsp;</span>
        <span class="text-color-charcoal">[</span>
        <span>{{ t("personalExperience.one.date1") }}</span>
        <span class="text-color-charcoal">][</span>
        <span>{{ t("personalExperience.one.date2") }}</span>
        <span class="text-color-charcoal">];</span>
      </p>
      <p>
        <span class="text-color-green">{{ t("personalExperience.activities") }}&nbsp;</span>
        <span class="text-color-charcoal">= {</span>
      </p>
      <p>
        <span class="text-color-charcoal">[</span>
        <span class="text-color-green">0</span>
        <span class="text-color-charcoal">][</span>
        <span>{{ t("personalExperience.one.cero") }}</span>
        <span class="text-color-charcoal">]}</span>
      </p>
      <p>
        <span class="text-color-green">{{ t("personalExperience.technologies") }}&nbsp;</span>
        <span class="text-color-charcoal">= [</span>
        <span class="whitwhiteTextChar">Java, Spring Boot, Angular, Typescript</span>
        <span class="text-color-charcoal">];</span>
      </p>
    </div>
  </div>
  <p class="text-color-charcoal">}</p>
</template>
<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
