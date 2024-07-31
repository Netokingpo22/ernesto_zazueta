<template>
  <div class="flex w-full items-center justify-center py-3">
    <div class="flex w-full items-center justify-center">
      <div
        class="flex w-[95%] flex-col items-center justify-center rounded-md border-2 border-dashed border-color-charcoal p-3 md:w-[70%] md:min-w-[768px] md:rounded-xl md:p-5 md:gap-y-6 gap-y-4">
        <div class="flex w-full items-start justify-center leading-5">
          <div class="flex w-full flex-row text-center">
            <div class="w-[50%]">
              <button class="m:py-5 rounded-md border-2 border-dashed border-color-charcoal px-5 py-2"
                @click="prevSlide">
                {{ left }}
              </button>
            </div>
            <div class="flex w-full items-center justify-center">
              <component :is="currentTitle" />
            </div>
            <div class="w-[50%]">
              <button class="m:py-5 rounded-md border-2 border-dashed border-color-charcoal px-5 py-2"
                @click="nextSlide">
                {{ right }}
              </button>
            </div>
          </div>
        </div>
        <div class="flex w-full flex-col items-start justify-center leading-5">
          <div class="flex flex-row">
            <p class="text-color-blue">{{ t("projects.projects") }}&nbsp;</p>
            <p class="text-color-charcoal">{</p>
          </div>
          <div class="ml-3 md:ml-4">
            <component :is="currentComponent" />
          </div>
          <p class="text-color-charcoal">}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, markRaw } from "vue";
import nodeComponent from "./Node/nodeComponent.vue";
import vueComponent from "./Vue/vueComponent.vue";
import springComponent from "./Spring/springComponent.vue";
import vueTitle from "./TitlesComponent/vueTitleComponent.vue";
import nodeTitle from "./TitlesComponent/nodeTitleComponent.vue";
import springTitle from "./TitlesComponent/springTitleComponent.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const components = [
  markRaw(nodeComponent),
  markRaw(vueComponent),
  markRaw(springComponent),
];
const titles = [markRaw(nodeTitle), markRaw(vueTitle), markRaw(springTitle)];

const currentIndex = ref(0);
const left = "<";
const right = ">";

const currentComponent = ref(components[currentIndex.value]);
const currentTitle = ref(titles[currentIndex.value]);

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % components.length;
  currentComponent.value = components[currentIndex.value];
  currentTitle.value = titles[currentIndex.value];
}

function prevSlide() {
  currentIndex.value =
    (currentIndex.value - 1 + components.length) % components.length;
  currentComponent.value = components[currentIndex.value];
  currentTitle.value = titles[currentIndex.value];
}
</script>
./Spring/springComponent.vue