<template>
  <p>
    <span class="text-color-pink">{{ t("workExperience.softwareDeveloper") }}&nbsp;</span>
    <span class="text-color-charcoal">[0][</span>
    <span>{{ t("workExperience.internship") }}</span>
    <span class="text-color-charcoal">]&nbsp;</span>
    <span class="text-color-charcoal">{</span>
  </p>
  <div class="ml-3 md:ml-4">
    <p>
      <span class="text-color-green">{{ t("workExperience.organization") }}&nbsp;</span>
      <span class="text-color-charcoal">=&nbsp;</span>
      <span>Instituto Tecnológico Superior de Cajeme</span>
      <span class="text-color-charcoal">;</span>
    </p>
    <p>
      <span class="text-color-green">{{ t("workExperience.date") }}&nbsp;</span>
      <span class="text-color-charcoal">= [</span>
      <span>{{ t("workExperience.cero.date1") }}</span>
      <span class="text-color-charcoal">][</span>
      <span>{{ t("workExperience.cero.date2") }}</span>
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
      <span>{{ t("workExperience.cero.cero") }}</span>
      <span class="text-color-charcoal">],</span>
    </p>
    <p>
      <span class="text-color-charcoal">[</span>
      <span class="text-color-green">1</span>
      <span class="text-color-charcoal">][</span>
      <span>{{ t("workExperience.cero.one") }}</span>
      <span class="text-color-charcoal">],</span>
    </p>
    <p>
      <span class="text-color-charcoal">[</span>
      <span class="text-color-green">2</span>
      <span class="text-color-charcoal">][</span>
      <span>{{ t("workExperience.cero.two") }}</span>
      <span class="text-color-charcoal">],</span>
    </p>
    <p>
      <span class="text-color-charcoal">[</span>
      <span class="text-color-green">3</span>
      <span class="text-color-charcoal">][</span>
      <span>{{ t("workExperience.cero.three") }}</span>
      <span class="text-color-charcoal">],</span>
    </p>
    <p>
      <span class="text-color-charcoal">[</span>
      <span class="text-color-green">4</span>
      <span class="text-color-charcoal">][</span>
      <span>{{ t("workExperience.cero.four") }}</span>
      <span class="text-color-charcoal">]}</span>
    </p>
    <p>
      <span class="text-color-green">{{ t("workExperience.technologies") }}&nbsp;</span>
      <span class="text-color-charcoal">= [</span>
      <span>Python, Django, Django REST Framework, Vue.js, JavaScript, Tailwind
        CSS, Git</span>
      <span class="text-color-charcoal">];</span>
    </p>
  </div>
  <p class="text-color-charcoal">}</p>
</template>
<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
