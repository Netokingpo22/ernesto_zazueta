<template>
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
</template>
<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>