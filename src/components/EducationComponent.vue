<template>
  <div class="flex w-full items-center justify-center py-3">
    <div class="flex w-full items-center justify-center">
      <div
        class="flex w-[95%] items-center justify-center rounded-md border-2 border-dashed border-color-charcoal p-1 md:w-[70%] md:min-w-[768px] md:rounded-xl md:p-5">
        <div class="flex w-full flex-col items-start justify-center leading-5">
          <div class="flex flex-row">
            <p class="text-color-blue">{{ t("education.education") }}&nbsp;</p>
            <p class="text-color-charcoal">{</p>
          </div>
          <div class="ml-3 md:ml-4">
            <p>
              <span class="text-color-green">{{ t("education.institution") }}&nbsp;</span>
              <span class="text-color-charcoal">=&nbsp;</span>
              <span>Instituto Tecnológico Superior de Cajeme</span>
              <span class="text-color-charcoal">;</span>
            </p>
            <p>
              <span class="text-color-green">{{ t("education.location") }}&nbsp;</span>
              <span class="text-color-charcoal">=&nbsp;</span>
              <span>Ciudad Obregón, Sonora</span>
              <span class="text-color-charcoal">;</span>
            </p>
            <p>
              <span class="text-color-green">{{ t("education.degree") }}&nbsp;</span>
              <span class="text-color-charcoal">=&nbsp;</span>
              <span>{{ t("education.career") }}</span>
              <span class="text-color-charcoal">;</span>
            </p>
            <p>
              <span class="text-color-green">{{ t("education.status") }}&nbsp;</span>
              <span class="text-color-charcoal">=&nbsp;</span>
              <span>{{ t("education.graduated") }}</span>
              <span class="text-color-charcoal">;</span>
            </p>
          </div>
          <p class="text-color-charcoal">}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
