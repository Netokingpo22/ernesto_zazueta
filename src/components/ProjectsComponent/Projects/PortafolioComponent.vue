<template>
    <div>
        <div class="ml-4 md:ml-8">
            <p>
                <span class="text-color-green">Vue.js&nbsp;</span>
                <span class="text-color-charcoal">{</span>
            </p>
        </div>
    </div>
    <div class="ml-8 md:ml-16">
        <p>
            <span class="text-color-green">{{ t("projects.repository") }}&nbsp;</span>
            <span class="text-color-charcoal">=&nbsp;</span>
            <a href="https://github.com/Netokingpo22/ernesto_zazueta" class="underline underline-offset-4">github</a>
            <span class="text-color-charcoal">;</span>
        </p>
        <p>
            <span class="text-color-pink">{{ t("projects.description") }}&nbsp;</span>
            <span class="text-color-charcoal">= {&nbsp;</span>
        </p>
        <div class="ml-8 md:ml-16">
            <p>
                <span class="text-color-charcoal">[&nbsp;</span>
                <span>{{
                t("projects.portafolio.description")
                    }}</span>
                <span class="text-color-charcoal">&nbsp;]</span>
                <span class="text-color-charcoal">;</span>
            </p>
        </div>
        <div class="ml-8 md:ml-16">
            <p>
                <span class="text-color-green">Vue.js&nbsp;</span>
                <span class="text-color-charcoal">=&nbsp;</span>
                <span class="text-color-yellow">v3.2.13</span>
                <span class="text-color-charcoal">;</span>
            </p>
        </div>
        <div class="ml-8 md:ml-16">
            <p>
                <span class="text-color-green">Vue I18n&nbsp;</span>
                <span class="text-color-charcoal">=&nbsp;</span>
                <span class="text-color-yellow">v10.0.0-beta.1</span>
                <span class="text-color-charcoal">;</span>
            </p>
        </div>
        <div class="ml-8 md:ml-16">
            <p>
                <span class="text-color-blue">Tailwind CSS&nbsp;</span>
                <span class="text-color-charcoal">=&nbsp;</span>
                <span class="text-color-yellow">v3.4.4</span>
                <span class="text-color-charcoal">;</span>
            </p>
        </div>
        <p class="text-color-charcoal">}&nbsp;</p>
    </div>
    <p class="text-color-charcoal ml-4 md:ml-8">}</p>
</template>
<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>