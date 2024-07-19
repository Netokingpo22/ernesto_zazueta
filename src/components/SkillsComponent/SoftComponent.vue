<template>
  <div>
    <p>
      <span class="text-color-pink">{{ t("skill.soft.soft") }}&nbsp;</span>
      <span class="text-color-charcoal">{</span>
    </p>
    <div class="ml-3 md:ml-4">
      <p>
        <span class="text-color-green">{{ t("skill.soft.cero") }}&nbsp;</span>
        <span class="text-color-charcoal">= </span>
        <span>True</span>
        <span class="text-color-charcoal">;</span>
      </p>
      <p>
        <span class="text-color-green">{{ t("skill.soft.one") }}&nbsp;</span>
        <span class="text-color-charcoal">= </span>
        <span>True</span>
        <span class="text-color-charcoal">;</span>
      </p>
      <p>
        <span class="text-color-green">{{ t("skill.soft.two") }}&nbsp;</span>
        <span class="text-color-charcoal">= </span>
        <span>True</span>
        <span class="text-color-charcoal">;</span>
      </p>
      <p>
        <span class="text-color-green">{{ t("skill.soft.three") }}&nbsp;</span>
        <span class="text-color-charcoal">= </span>
        <span>True</span>
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
