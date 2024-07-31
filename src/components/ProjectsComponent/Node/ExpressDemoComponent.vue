<template>
  <div>
    <div>
      <p>
        <span class="text-color-green">Node.js&nbsp;</span>
        <span class="text-color-charcoal">+&nbsp;</span>
        <span>Express.js&nbsp;</span>
        <span class="text-color-charcoal">{</span>
      </p>
    </div>
  </div>
  <div class="ml-3 md:ml-4">
    <p>
      <span class="text-color-green">{{ t("projects.repository") }}&nbsp;</span>
      <span class="text-color-charcoal">=&nbsp;</span>
      <a href="https://github.com/Netokingpo22/Express-demo" class="underline underline-offset-4">github</a>
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
          <span>{{ t("projects.expDemo.description") }}</span>
          <span class="text-color-charcoal">]</span>
          <span class="text-color-charcoal">;</span>
        </p>
      </div>
      <div>
        <p>
          <span class="text-color-green">Node.js&nbsp;</span>
          <span class="text-color-charcoal">=&nbsp;</span>
          <span class="text-color-yellow">v20.15.0</span>
          <span class="text-color-charcoal">;</span>
        </p>
      </div>
      <div>
        <p>
          <span>Express.js&nbsp;</span>
          <span class="text-color-charcoal">=&nbsp;</span>
          <span class="text-color-yellow">v4.19.2</span>
          <span class="text-color-charcoal">;</span>
        </p>
      </div>
      <div>
        <p>
          <span class="text-color-green">MongoDB&nbsp;</span>
          <span class="text-color-charcoal">=&nbsp;</span>
          <span class="text-color-yellow">v7.0</span>
          <span class="text-color-charcoal">;</span>
        </p>
      </div>
      <div>
        <p>
          <span class="text-color-green">Mongoose&nbsp;</span>
          <span class="text-color-charcoal">=&nbsp;</span>
          <span class="text-color-yellow">v8.4.4</span>
          <span class="text-color-charcoal">;</span>
        </p>
      </div>
      <div>
        <p>
          <span class="text-color-purple">jsonwebtoken&nbsp;</span>
          <span class="text-color-charcoal">=&nbsp;</span>
          <span class="text-color-yellow">v9.0.2</span>
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
