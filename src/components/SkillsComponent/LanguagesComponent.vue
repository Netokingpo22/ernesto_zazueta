<template>
  <div>
    <p>
      <span class="text-color-pink">{{ t("skill.languages.languages") }}&nbsp;</span>
      <span class="text-color-charcoal">{</span>
    </p>
    <div class="ml-3 md:ml-4">
      <p>
        <span class="text-color-green">{{ t("skill.languages.spanish") }}</span>
        <span class="text-color-charcoal"> = </span>
        <span>100%</span>
        <span class="text-color-charcoal">;</span>
      </p>
      <p>
        <span class="text-color-green">{{ t("skill.languages.english") }}</span>
        <span class="text-color-charcoal"> = </span>
        <span>B2</span>
        <span class="text-color-charcoal">;</span>
      </p>
    </div>
  </div>
  <p class="text-color-charcoal">}</p>
</template>
<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
