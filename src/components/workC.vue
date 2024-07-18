<template>
  <div class="flex w-full items-center justify-center border-t-2 border-border-grey py-5">
    <div class="flex w-full flex-col items-center justify-center">
      <div class="flex w-[98%] items-center justify-center md:w-[70%] md:min-w-[768px]">
        <div class="flex w-full flex-col items-start justify-center text-xs leading-5 md:text-xl">
          <div class="flex flex-row">
            <p class="text-color-blue">
              {{ t("workExperience.workExperience") }}&nbsp;
            </p>
            <p class="text-color-charcoal">{</p>
          </div>
          <div>
            <div class="ml-4 md:ml-8">
              <p>
                <span class="text-color-pink">{{ t("workExperience.softwareDeveloper") }}&nbsp;</span>
                <span class="text-color-charcoal">[0][</span>
                <span>{{ t("workExperience.internship") }}</span>
                <span class="text-color-charcoal">]&nbsp;</span>
                <span class="text-color-charcoal">{</span>
              </p>
            </div>
            <div class="ml-8 md:ml-16">
              <p>
                <span class="text-color-green">{{ t("workExperience.organization") }}&nbsp;</span>
                <span class="text-color-charcoal">=&nbsp;</span>
                <span>Instituto Tecnológico Superior de Cajeme</span>
                <span class="text-color-charcoal">;</span>
              </p>
              <p>
                <span class="text-color-green">{{ t("workExperience.date") }}&nbsp;</span>
                <span class="text-color-charcoal">[&nbsp;</span>
                <span>{{ t("workExperience.cero.date1") }}</span>
                <span class="text-color-charcoal">]&nbsp;</span>
                <span class="text-color-charcoal">[&nbsp;</span>
                <span>{{ t("workExperience.cero.date2") }}</span>
                <span class="text-color-charcoal">&nbsp;];</span>
              </p>
              <p>
                <span class="text-color-green">{{ t("workExperience.activities") }}&nbsp;</span>
                <span class="text-color-charcoal">{</span>
              </p>
              <p>
                <span class="text-color-charcoal">[</span>
                <span class="text-color-green">0</span>
                <span class="text-color-charcoal">]</span>
                <span class="text-color-charcoal">[ </span>
                <span>{{ t("workExperience.cero.cero") }}</span>
                <span class="text-color-charcoal"> ]</span>
              </p>
              <p>
                <span class="text-color-charcoal">[</span>
                <span class="text-color-green">1</span>
                <span class="text-color-charcoal">]</span>
                <span class="text-color-charcoal">[ </span>
                <span>{{ t("workExperience.cero.one") }}</span>
                <span class="text-color-charcoal"> ]</span>
              </p>
              <p>
                <span class="text-color-charcoal">[</span>
                <span class="text-color-green">2</span>
                <span class="text-color-charcoal">]</span>
                <span class="text-color-charcoal">[ </span>
                <span>{{ t("workExperience.cero.two") }}</span>
                <span class="text-color-charcoal"> ]</span>
              </p>
              <p>
                <span class="text-color-charcoal">[</span>
                <span class="text-color-green">3</span>
                <span class="text-color-charcoal">]</span>
                <span class="text-color-charcoal">[ </span>
                <span>{{ t("workExperience.cero.three") }}</span>
                <span class="text-color-charcoal"> ]</span>
              </p>
              <p>
                <span class="text-color-charcoal">[</span>
                <span class="text-color-green">4</span>
                <span class="text-color-charcoal">]</span>
                <span class="text-color-charcoal">[ </span>
                <span>{{ t("workExperience.cero.four") }}</span>
                <span class="text-color-charcoal"> ]}</span>
              </p>
              <p>
                <span class="text-color-green">{{ t("workExperience.technologies") }}&nbsp;</span>
                <span class="text-color-charcoal">= </span>
                <span class="text-color-charcoal">[ </span>
                <span>Python, Django, Django REST Framework, Vue.js, JavaScript,
                  Tailwind CSS, Git</span>
                <span class="text-color-charcoal"> ];</span>
              </p>
            </div>
            <p class="text-color-charcoal ml-4 md:ml-8">}</p>
            <!-- ----------------------------------------------------------------------- -->
            <div class="ml-4 md:ml-8">
              <p>
                <span class="text-color-pink">{{ t("workExperience.softwareDeveloper") }}&nbsp;</span>
                <span class="text-color-charcoal">[1][</span>
                <span>{{ t("workExperience.internship") }}</span>
                <span class="text-color-charcoal">]&nbsp;</span>
                <span class="text-color-charcoal">{</span>
              </p>
            </div>
            <div class="ml-8 md:ml-16">
              <p>
                <span class="text-color-green">{{ t("workExperience.organization") }}&nbsp;</span>
                <span class="text-color-charcoal">=&nbsp;</span>
                <span>Clever Cloud</span>
                <span class="text-color-charcoal">;</span>
              </p>
              <p>
                <span class="text-color-green">{{ t("workExperience.date") }}&nbsp;</span>
                <span class="text-color-charcoal">[&nbsp;</span>
                <span>{{ t("workExperience.one.date1") }}</span>
                <span class="text-color-charcoal">]&nbsp;</span>
                <span class="text-color-charcoal">[&nbsp;</span>
                <span>{{ t("workExperience.one.date2") }}</span>
                <span class="text-color-charcoal">&nbsp;];</span>
              </p>
              <p>
                <span class="text-color-green">{{ t("workExperience.activities") }}&nbsp;</span>
                <span class="text-color-charcoal">{</span>
              </p>
              <p>
                <span class="text-color-charcoal">[</span>
                <span class="text-color-green">0</span>
                <span class="text-color-charcoal">]</span>
                <span class="text-color-charcoal">[ </span>
                <span>{{ t("workExperience.one.cero") }}</span>
                <span class="text-color-charcoal"> ]</span>
              </p>
              <p>
                <span class="text-color-charcoal">[</span>
                <span class="text-color-green">1</span>
                <span class="text-color-charcoal">]</span>
                <span class="text-color-charcoal">[ </span>
                <span>{{ t("workExperience.one.one") }}</span>
                <span class="text-color-charcoal"> ]</span>
              </p>
              <p>
                <span class="text-color-green">{{ t("workExperience.technologies") }}&nbsp;</span>
                <span class="text-color-charcoal">= </span>
                <span class="text-color-charcoal">[ </span>
                <span>Java, Git</span>
                <span class="text-color-charcoal"> ];</span>
              </p>
            </div>
            <p class="text-color-charcoal ml-4 md:ml-8">}</p>
            <!-- ----------------------------------------------------------------------- -->
            <div class="ml-4 md:ml-8">
              <p>
                <span class="text-color-pink">{{ t("workExperience.softwareDeveloper") }}&nbsp;</span>
                <span class="text-color-charcoal">[0][</span>
                <span>{{ t("workExperience.internship") }}</span>
                <span class="text-color-charcoal">]&nbsp;</span>
                <span class="text-color-charcoal">{</span>
              </p>
            </div>
            <div class="ml-8 md:ml-16">
              <p>
                <span class="text-color-green">{{ t("workExperience.organization") }}&nbsp;</span>
                <span class="text-color-charcoal">=&nbsp;</span>
                <span>Zitheonsoft.</span>
                <span class="text-color-charcoal">;</span>
              </p>
              <p>
                <span class="text-color-green">{{ t("workExperience.date") }}&nbsp;</span>
                <span class="text-color-charcoal">[&nbsp;</span>
                <span>{{ t("workExperience.two.date1") }}</span>
                <span class="text-color-charcoal">]&nbsp;</span>
                <span class="text-color-charcoal">[&nbsp;</span>
                <span>{{ t("workExperience.two.date2") }}</span>
                <span class="text-color-charcoal">&nbsp;];</span>
              </p>
              <p>
                <span class="text-color-green">{{ t("workExperience.activities") }}&nbsp;</span>
                <span class="text-color-charcoal">{</span>
              </p>
              <p>
                <span class="text-color-charcoal">[</span>
                <span class="text-color-green">0</span>
                <span class="text-color-charcoal">]</span>
                <span class="text-color-charcoal">[ </span>
                <span>{{ t("workExperience.two.cero") }}</span>
                <span class="text-color-charcoal"> ]</span>
              </p>
              <p>
                <span class="text-color-charcoal">[</span>
                <span class="text-color-green">1</span>
                <span class="text-color-charcoal">]</span>
                <span class="text-color-charcoal">[ </span>
                <span>{{ t("workExperience.two.one") }}</span>
                <span class="text-color-charcoal"> ]</span>
              </p>
              <p>
                <span class="text-color-charcoal">[</span>
                <span class="text-color-green">2</span>
                <span class="text-color-charcoal">]</span>
                <span class="text-color-charcoal">[ </span>
                <span>{{ t("workExperience.two.two") }}</span>
                <span class="text-color-charcoal"> ]</span>
              </p>
              <p>
                <span class="text-color-charcoal">[</span>
                <span class="text-color-green">3</span>
                <span class="text-color-charcoal">]</span>
                <span class="text-color-charcoal">[ </span>
                <span>{{ t("workExperience.two.three") }}</span>
                <span class="text-color-charcoal"> ]</span>
              </p>
              <p>
                <span class="text-color-charcoal">[</span>
                <span class="text-color-green">4</span>
                <span class="text-color-charcoal">]</span>
                <span class="text-color-charcoal">[ </span>
                <span>{{ t("workExperience.two.four") }}</span>
                <span class="text-color-charcoal"> ]}</span>
              </p>
              <p>
                <span class="text-color-green">{{ t("workExperience.technologies") }}&nbsp;</span>
                <span class="text-color-charcoal">= </span>
                <span class="text-color-charcoal">[ </span>
                <span>Java, Spring Boot, Angular, Typescript, Sql, Git</span>
                <span class="text-color-charcoal"> ];</span>
              </p>
            </div>
            <p class="text-color-charcoal ml-4 md:ml-8">}</p>
            <!-- ----------------------------------------------------------------------- -->
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
