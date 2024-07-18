<template>
  <div class="flex w-full items-center justify-center border-t-2 border-border-grey py-5">
    <div class="flex w-full flex-col items-center justify-center">
      <div class="flex w-[98%] items-center justify-center md:w-[70%] md:min-w-[768px]">
        <div class="flex w-full flex-col items-start justify-center text-xs leading-5 md:text-xl">
          <div class="flex flex-row">
            <p class="text-color-blue">
              {{ t("personalExperience.personalExperience") }}&nbsp;
            </p>
            <p class="text-color-charcoal">{</p>
          </div>
          <div>
            <div class="ml-4 md:ml-8">
              <p>
                <span class="text-color-pink">{{ t("personalExperience.cero.name") }}&nbsp;</span>
                <span class="text-color-charcoal">{</span>
              </p>
            </div>
            <div class="ml-8 md:ml-16">
              <p>
                <span class="text-color-green">{{ t("personalExperience.date") }}&nbsp;</span>
                <span class="text-color-charcoal">[&nbsp;</span>
                <span>{{ t("personalExperience.cero.date1") }}</span>
                <span class="text-color-charcoal">]&nbsp;</span>
                <span class="text-color-charcoal">[&nbsp;</span>
                <span>{{ t("personalExperience.cero.date2") }}</span>
                <span class="text-color-charcoal"> ];</span>
              </p>
              <p>
                <span class="text-color-green">{{ t("personalExperience.activities") }}&nbsp;</span>
                <span class="text-color-charcoal">= {</span>
              </p>
              <p>
                <span class="text-color-charcoal">[</span>
                <span class="text-color-green">0</span>
                <span class="text-color-charcoal">]</span>
                <span class="text-color-charcoal">[ </span>
                <span>{{ t("personalExperience.cero.cero") }}</span>
                <span class="text-color-charcoal"> ]</span>
              </p>
              <p>
                <span class="text-color-green">{{ t("personalExperience.technologies") }}&nbsp;</span>
                <span class="text-color-charcoal">= [ </span>
                <span class="whitwhiteTextChar">Java, Sql, Excel</span>
                <span class="text-color-charcoal"> ];</span>
              </p>
            </div>
            <p class="text-color-charcoal ml-4 md:ml-8">}</p>
            <div class="ml-4 md:ml-8">
              <p>
                <span class="text-color-pink">{{ t("personalExperience.one.name") }}&nbsp;</span>
                <span class="text-color-charcoal">{</span>
              </p>
            </div>
            <div class="ml-8 md:ml-16">
              <p>
                <span class="text-color-green">{{ t("personalExperience.date") }}&nbsp;</span>
                <span class="text-color-charcoal">[&nbsp;</span>
                <span>{{ t("personalExperience.one.date1") }}</span>
                <span class="text-color-charcoal">]&nbsp;</span>
                <span class="text-color-charcoal">[&nbsp;</span>
                <span>{{ t("personalExperience.one.date2") }}</span>
                <span class="text-color-charcoal"> ];</span>
              </p>
              <p>
                <span class="text-color-green">{{ t("personalExperience.activities") }}&nbsp;</span>
                <span class="text-color-charcoal">= {</span>
              </p>
              <p>
                <span class="text-color-charcoal">[</span>
                <span class="text-color-green">0</span>
                <span class="text-color-charcoal">]</span>
                <span class="text-color-charcoal">[ </span>
                <span>{{ t("personalExperience.one.cero") }}</span>
                <span class="text-color-charcoal"> ]</span>
              </p>
              <p>
                <span class="text-color-green">{{ t("personalExperience.technologies") }}&nbsp;</span>
                <span class="text-color-charcoal">= [ </span>
                <span class="whitwhiteTextChar">Java, Spring Boot, Angular, Typescript</span>
                <span class="text-color-charcoal"> ];</span>
              </p>
            </div>
            <p class="text-color-charcoal ml-4 md:ml-8">}</p>
            <div class="ml-4 md:ml-8">
              <p>
                <span class="text-color-pink">{{ t("personalExperience.two.name") }}&nbsp;</span>
                <span class="text-color-charcoal">{</span>
              </p>
            </div>
            <div class="ml-8 md:ml-16">
              <p>
                <span class="text-color-green">{{ t("personalExperience.date") }}&nbsp;</span>
                <span class="text-color-charcoal">[&nbsp;</span>
                <span>{{ t("personalExperience.two.date1") }}</span>
                <span class="text-color-charcoal">]&nbsp;</span>
                <span class="text-color-charcoal">[&nbsp;</span>
                <span>{{ t("personalExperience.two.date2") }}</span>
                <span class="text-color-charcoal"> ];</span>
              </p>
              <p>
                <span class="text-color-green">{{ t("personalExperience.activities") }}&nbsp;</span>
                <span class="text-color-charcoal">= {</span>
              </p>
              <p>
                <span class="text-color-charcoal">[</span>
                <span class="text-color-green">0</span>
                <span class="text-color-charcoal">]</span>
                <span class="text-color-charcoal">[ </span>
                <span>{{ t("personalExperience.two.cero") }}</span>
                <span class="text-color-charcoal"> ]</span>
              </p>
              <p>
                <span class="text-color-green">{{ t("personalExperience.technologies") }}&nbsp;</span>
                <span class="text-color-charcoal">= [ </span>
                <span class="whitwhiteTextChar">JavaScript, Php, Bootstrap</span>
                <span class="text-color-charcoal"> ];</span>
              </p>
            </div>
            <p class="text-color-charcoal ml-4 md:ml-8">}</p>
            <div class="ml-4 md:ml-8">
              <p>
                <span class="text-color-pink">{{ t("personalExperience.three.name") }}&nbsp;</span>
                <span class="text-color-charcoal">{</span>
              </p>
            </div>
            <div class="ml-8 md:ml-16">
              <p>
                <span class="text-color-green">{{ t("personalExperience.date") }}&nbsp;</span>
                <span class="text-color-charcoal">[&nbsp;</span>
                <span>{{ t("personalExperience.three.date1") }}</span>
                <span class="text-color-charcoal">]&nbsp;</span>
                <span class="text-color-charcoal">[&nbsp;</span>
                <span>{{ t("personalExperience.three.date2") }}</span>
                <span class="text-color-charcoal"> ];</span>
              </p>
              <p>
                <span class="text-color-green">{{ t("personalExperience.activities") }}&nbsp;</span>
                <span class="text-color-charcoal">= {</span>
              </p>
              <p>
                <span class="text-color-charcoal">[</span>
                <span class="text-color-green">0</span>
                <span class="text-color-charcoal">]</span>
                <span class="text-color-charcoal">[ </span>
                <span>{{ t("personalExperience.three.cero") }}</span>
                <span class="text-color-charcoal"> ]</span>
              </p>
              <p>
                <span class="text-color-green">{{ t("personalExperience.technologies") }}&nbsp;</span>
                <span class="text-color-charcoal">= [ </span>
                <span class="whitwhiteTextChar">Java</span>
                <span class="text-color-charcoal"> ];</span>
              </p>
            </div>
            <p class="text-color-charcoal ml-4 md:ml-8">}</p>
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
