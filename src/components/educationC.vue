<template>
  <div class="roboto-mono flex w-full items-center justify-center py-5 border-t-2 border-[#26232b]">
    <div class="flex justify-center items-center w-full whiteText">
      <div class="flex justify-center items-center w-[98%] md:w-[70%] md:min-w-[768px]">
        <div class="flex flex-col items-start justify-center text-xs leading-5 w-full md:text-xl">
          <div class="flex flex-row">
            <p class="blueClass">{{ t('education.education') }}&nbsp;</p>
            <p class="whiteChar">{</p>
          </div>
          <div class="ml-4 md:ml-8">
            <p>
              <span class="greenVar">{{ t('education.institution') }}&nbsp;</span>
              <span class="whiteChar">=&nbsp;</span>
              <span>Instituto Tecnológico Superior de Cajeme</span>
              <span class="whiteChar">;</span>
            </p>
            <p>
              <span class="greenVar">{{ t('education.location') }}&nbsp;</span>
              <span class="whiteChar">=&nbsp;</span>
              <span>Ciudad Obregón, Sonora</span>
              <span class="whiteChar">;</span>
            </p>
            <p>
              <span class="greenVar">{{ t('education.degree') }}&nbsp;</span>
              <span class="whiteChar">=&nbsp;</span>
              <span>{{ t('education.career') }}</span>
              <span class="whiteChar">;</span>
            </p>
            <p>
              <span class="greenVar">{{ t('education.status') }}&nbsp;</span>
              <span class="whiteChar">=&nbsp;</span>
              <span>{{ t('education.graduated') }}</span>
              <span class="whiteChar">;</span>
            </p>
          </div>
          <p class="whiteChar">}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>