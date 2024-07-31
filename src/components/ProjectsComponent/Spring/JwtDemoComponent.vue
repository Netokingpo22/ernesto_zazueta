<template>
    <div>
        <div>
            <p>
                <span class="text-color-green">Spring Boot&nbsp;</span>
                <span class="text-color-charcoal">{</span>
            </p>
        </div>
    </div>
    <div class="ml-3 md:ml-4">
        <p>
            <span class="text-color-green">{{ t("projects.repository") }}&nbsp;</span>
            <span class="text-color-charcoal">=&nbsp;</span>
            <a href="https://github.com/Netokingpo22/jwtDemo" class="underline underline-offset-4">github</a>
            <span class="text-color-charcoal">;</span>
        </p>
        <p>
            <span class="text-color-pink">{{ t("projects.description") }}&nbsp;</span>
            <span class="text-color-charcoal">= {&nbsp;</span>
        </p>
        <div class="ml-3 md:ml-4">
            <div>
                <p>
                    <span class="text-color-charcoal">[</span>
                    <span>{{ t("projects.jwtDemo.description") }}</span>
                    <span class="text-color-charcoal">]</span>
                    <span class="text-color-charcoal">;</span>
                </p>
            </div>
            <div>
                <p>
                    <span class="text-color-green">Spring Boot&nbsp;</span>
                    <span class="text-color-charcoal">=&nbsp;</span>
                    <span class="text-color-yellow">v3.3.2</span>
                    <span class="text-color-charcoal">;</span>
                </p>
            </div>
            <div>
                <p>
                    <span class="text-color-orange">Java&nbsp;</span>
                    <span class="text-color-charcoal">=&nbsp;</span>
                    <span class="text-color-yellow">v17</span>
                    <span class="text-color-charcoal">;</span>
                </p>
            </div>
            <div>
                <p>
                    <span class="text-color-dark-blue">PostgreSQL&nbsp;</span>
                    <span class="text-color-charcoal">=&nbsp;</span>
                    <span class="text-color-yellow">v16.3</span>
                    <span class="text-color-charcoal">;</span>
                </p>
            </div>
            <div>
                <p>
                    <span class="text-color-green">Spring Data JPA&nbsp;</span>
                    <span class="text-color-charcoal">=&nbsp;</span>
                    <span class="text-color-yellow">v3.3.2</span>
                    <span class="text-color-charcoal">;</span>
                </p>
            </div>
            <div>
                <p>
                    <span class="text-color-green">Spring Security&nbsp;</span>
                    <span class="text-color-charcoal">=&nbsp;</span>
                    <span class="text-color-yellow">v3.3.2</span>
                    <span class="text-color-charcoal">;</span>
                </p>
            </div>
            <div>
                <p>
                    <span class="text-color-green">Spring Web&nbsp;</span>
                    <span class="text-color-charcoal">=&nbsp;</span>
                    <span class="text-color-yellow">v3.3.2</span>
                    <span class="text-color-charcoal">;</span>
                </p>
            </div>
            <div>
                <p>
                    <span class="text-color-dark-blue">PostgreSQL Driver&nbsp;</span>
                    <span class="text-color-charcoal">=&nbsp;</span>
                    <span class="text-color-yellow">v42.7.3</span>
                    <span class="text-color-charcoal">;</span>
                </p>
            </div>
            <div>
                <p>
                    <span class="text-color-white">JWT (jjwt-impl)&nbsp;</span>
                    <span class="text-color-charcoal">=&nbsp;</span>
                    <span class="text-color-yellow">v0.11.5</span>
                    <span class="text-color-charcoal">;</span>
                </p>
            </div>
            <div>
                <p>
                    <span class="text-color-white">JWT (jjwt-api)&nbsp;</span>
                    <span class="text-color-charcoal">=&nbsp;</span>
                    <span class="text-color-yellow">v0.11.5</span>
                    <span class="text-color-charcoal">;</span>
                </p>
            </div>
            <div>
                <p>
                    <span class="text-color-white">JWT (jjwt-jackson)&nbsp;</span>
                    <span class="text-color-charcoal">=&nbsp;</span>
                    <span class="text-color-yellow">v0.11.5</span>
                    <span class="text-color-charcoal">;</span>
                </p>
            </div>
        </div>
        <p class="text-color-charcoal">}</p>
    </div>
    <p class="text-color-charcoal">}</p>
</template>
<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
