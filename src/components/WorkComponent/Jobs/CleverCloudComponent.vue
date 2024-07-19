<template>
  <p>
    <span class="text-color-pink">{{ t("workExperience.softwareDeveloper") }}&nbsp;</span>
    <span class="text-color-charcoal">[1][</span>
    <span>{{ t("workExperience.internship") }}</span>
    <span class="text-color-charcoal">]&nbsp;</span>
    <span class="text-color-charcoal">{</span>
  </p>
  <div class="ml-3 md:ml-4">
    <p>
      <span class="text-color-green">{{ t("workExperience.organization") }}&nbsp;</span>
      <span class="text-color-charcoal">=&nbsp;</span>
      <span>Clever Cloud</span>
      <span class="text-color-charcoal">;</span>
    </p>
    <p>
      <span class="text-color-green">{{ t("workExperience.date") }}&nbsp;</span>
      <span class="text-color-charcoal">= [</span>
      <span>{{ t("workExperience.one.date1") }}</span>
      <span class="text-color-charcoal">][</span>
      <span>{{ t("workExperience.one.date2") }}</span>
      <span class="text-color-charcoal">];</span>
    </p>
    <p>
      <span class="text-color-green">{{ t("workExperience.activities") }}&nbsp;</span>
      <span class="text-color-charcoal">= {</span>
    </p>
    <p>
      <span class="text-color-charcoal">[</span>
      <span class="text-color-green">0</span>
      <span class="text-color-charcoal">][</span>
      <span>{{ t("workExperience.one.cero") }}</span>
      <span class="text-color-charcoal">],</span>
    </p>
    <p>
      <span class="text-color-charcoal">[</span>
      <span class="text-color-green">1</span>
      <span class="text-color-charcoal">][</span>
      <span>{{ t("workExperience.one.one") }}</span>
      <span class="text-color-charcoal">]}</span>
    </p>
    <p>
      <span class="text-color-green">{{ t("workExperience.technologies") }}&nbsp;</span>
      <span class="text-color-charcoal">= </span>
      <span class="text-color-charcoal">[</span>
      <span>Java, Git</span>
      <span class="text-color-charcoal">];</span>
    </p>
  </div>
  <p class="text-color-charcoal">}</p>
</template>
<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
