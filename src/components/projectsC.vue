<template>
  <div class="flex w-full items-center justify-center border-t-2 border-[#26232b] py-5">
    <div class="flex w-full flex-col items-center justify-center">
      <div class="flex w-[98%] items-center justify-center md:w-[70%] md:min-w-[768px]">
        <div class="flex w-full flex-col items-start justify-center text-xs leading-5 md:text-xl">
          <div class="flex flex-row">
            <p class="text-color-blue">{{ t("projects.projects") }}&nbsp;</p>
            <p class="text-color-charcoal">{</p>
          </div>
          <div>
            <div class="ml-4 md:ml-8">
              <p>
                <span class="text-color-green">Node.js&nbsp;</span>
                <span class="text-color-charcoal">+&nbsp;</span>
                <span>Express.js&nbsp;</span>
                <span class="text-color-charcoal">{</span>
              </p>
            </div>
          </div>
          <div class="ml-8 md:ml-16">
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
            <div class="ml-8 md:ml-16">
              <p>
                <span class="text-color-charcoal">[&nbsp;</span>
                <span>{{
              t("projects.expDemo.description")
                  }}</span>
                <span class="text-color-charcoal">&nbsp;]</span>
                <span class="text-color-charcoal">;</span>
              </p>
            </div>
            <div class="ml-8 md:ml-16">
              <p>
                <span class="text-color-green">Node.js&nbsp;</span>
                <span class="text-color-charcoal">=&nbsp;</span>
                <span class="text-color-yellow">v20.15.0</span>
                <span class="text-color-charcoal">;</span>
              </p>
            </div>
            <div class="ml-8 md:ml-16">
              <p>
                <span>Express.js&nbsp;</span>
                <span class="text-color-charcoal">=&nbsp;</span>
                <span class="text-color-yellow">v4.19.2</span>
                <span class="text-color-charcoal">;</span>
              </p>
            </div>
            <div class="ml-8 md:ml-16">
              <p>
                <span class="text-color-green">MongoDB&nbsp;</span>
                <span class="text-color-charcoal">=&nbsp;</span>
                <span class="text-color-yellow">v7.0</span>
                <span class="text-color-charcoal">;</span>
              </p>
            </div>
            <div class="ml-8 md:ml-16">
              <p>
                <span class="text-color-green">Mongoose&nbsp;</span>
                <span class="text-color-charcoal">=&nbsp;</span>
                <span class="text-color-yellow">v8.4.4</span>
                <span class="text-color-charcoal">;</span>
              </p>
            </div>
            <div class="ml-8 md:ml-16">
              <p>
                <span class="text-color-purple">jsonwebtoken&nbsp;</span>
                <span class="text-color-charcoal">=&nbsp;</span>
                <span class="text-color-yellow">v9.0.2</span>
                <span class="text-color-charcoal">;</span>
              </p>
            </div>
            <p class="text-color-charcoal">}&nbsp;</p>
          </div>
          <p class="text-color-charcoal ml-4 md:ml-8">}</p>
          <!--
                    <div>
                        <div class="ml-4 md:ml-8">
                            <p>
                                <span class="text-color-green">Node.js&nbsp;</span>
                                <span class="text-color-charcoal">+&nbsp;</span>
                                <span>Express.js&nbsp;</span>
                                <span class="text-color-charcoal">+&nbsp;</span>
                                <span class="text-[#8BE9FD]">React&nbsp;</span>
                                <span class="text-color-charcoal">{</span>
                            </p>
                        </div>
                    </div>
                    <div class="ml-8 md:ml-16">
                        <p>
                            <span class="text-color-green">{{ t('projects.repository') }}&nbsp;</span>
                            <span class="text-color-charcoal">=&nbsp;</span>
                            <a href="" class="underline underline-offset-4">github</a>
                            <span class="text-color-charcoal">;</span>
                        </p>
                        <p>
                            <span class="text-color-green">{{ t('projects.description') }}&nbsp;</span>
                            <span class="text-color-charcoal">=&nbsp;</span>
                            <a href="" class="underline underline-offset-4">link</a>
                            <span class="text-color-charcoal">;</span>
                        </p>
                        <p>
                            <span class="text-color-green">Backend&nbsp;</span>
                            <span class="text-color-charcoal">=&nbsp;</span>
                            <span>Node.js Express.js</span>
                            <span class="text-color-charcoal">;</span>
                        </p>
                        <p>
                            <span class="text-color-green">Frontend&nbsp;</span>
                            <span class="text-color-charcoal">=&nbsp;</span>
                            <span>React (JavaScript)</span>
                            <span class="text-color-charcoal">;</span>
                        </p>
                        <p>
                            <span class="text-color-green">{{ t('projects.database') }}&nbsp;</span>
                            <span class="text-color-charcoal">=&nbsp;</span>
                            <span>MongoDB</span>
                            <span class="text-color-charcoal">;</span>
                        </p>
                    </div>
                    <p class=" text-color-charcoal ml-4 md:ml-8">}</p>
                    <div>
                        <div class="ml-4 md:ml-8">
                            <p>
                                <span class="text-color-green">Spring Boot&nbsp;</span>
                                <span class="text-color-charcoal">+&nbsp;</span>
                                <span class="text-[#FF5555]">Angular&nbsp;</span>
                                <span class="text-color-charcoal">{</span>
                            </p>
                        </div>
                    </div>
                    <div class="ml-8 md:ml-16">
                        <p>
                            <span class="text-color-green">{{ t('projects.repository') }}&nbsp;</span>
                            <span class="text-color-charcoal">=&nbsp;</span>
                            <a href="" class="underline underline-offset-4">github</a>
                            <span class="text-color-charcoal">;</span>
                        </p>
                        <p>
                            <span class="text-color-green">{{ t('projects.description') }}&nbsp;</span>
                            <span class="text-color-charcoal">=&nbsp;</span>
                            <a href="" class="underline underline-offset-4">link</a>
                            <span class="text-color-charcoal">;</span>
                        </p>
                        <p>
                            <span class="text-color-green">Backend&nbsp;</span>
                            <span class="text-color-charcoal">=&nbsp;</span>
                            <span>Spring Boot (Java)</span>
                            <span class="text-color-charcoal">;</span>
                        </p>
                        <p>
                            <span class="text-color-green">Frontend&nbsp;</span>
                            <span class="text-color-charcoal">=&nbsp;</span>
                            <span>Angular (TypeScript)</span>
                            <span class="text-color-charcoal">;</span>
                        </p>
                        <p>
                            <span class="text-color-green">{{ t('projects.database') }}&nbsp;</span>
                            <span class="text-color-charcoal">=&nbsp;</span>
                            <span>PostgreSQL</span>
                            <span class="text-color-charcoal">;</span>
                        </p>
                    </div>
                    <p class="text-color-charcoal ml-4 md:ml-8">}</p>
                    <div>
                        <div class="ml-4 md:ml-8">
                            <p>
                                <span class="text-color-green">Django&nbsp;</span>
                                <span class="text-color-charcoal">+&nbsp;</span>
                                <span class="text-color-green">Vue.js&nbsp;</span>
                                <span class="text-color-charcoal">{</span>
                            </p>
                        </div>
                    </div>
                    <div class="ml-8 md:ml-16">
                        <p>
                            <span class="text-color-green">{{ t('projects.repository') }}&nbsp;</span>
                            <span class="text-color-charcoal">=&nbsp;</span>
                            <a href="" class="underline underline-offset-4">github</a>
                            <span class="text-color-charcoal">;</span>
                        </p>
                        <p>
                            <span class="text-color-green">{{ t('projects.description') }}&nbsp;</span>
                            <span class="text-color-charcoal">=&nbsp;</span>
                            <a href="" class="underline underline-offset-4">link</a>
                            <span class="text-color-charcoal">;</span>
                        </p>
                        <p>
                            <span class="text-color-green">Backend&nbsp;</span>
                            <span class="text-color-charcoal">=&nbsp;</span>
                            <span>Django (Python)</span>
                            <span class="text-color-charcoal">;</span>
                        </p>
                        <p>
                            <span class="text-color-green">Frontend&nbsp;</span>
                            <span class="text-color-charcoal">=&nbsp;</span>
                            <span>Vue.js (JavaScript)</span>
                            <span class="text-color-charcoal">;</span>
                        </p>
                        <p>
                            <span class="text-color-green">{{ t('projects.database') }}&nbsp;</span>
                            <span class="text-color-charcoal">=&nbsp;</span>
                            <span>SQLite</span>
                            <span class="text-color-charcoal">;</span>
                        </p>
                    </div>
                    <p class=" text-color-charcoal ml-4 md:ml-8">}</p>
                    <div>
                        <div class="ml-4 md:ml-8">
                            <p>
                                <span class="text-[#BD93F9]">ASP.NET Core&nbsp;</span>
                                <span class="text-color-charcoal">+&nbsp;</span>
                                <span class="text-[#FFB86C]">Ember.js&nbsp;</span>
                                <span class="text-color-charcoal">{</span>
                            </p>
                        </div>
                    </div>
                    <div class="ml-8 md:ml-16">
                        <p>
                            <span class="text-color-green">{{ t('projects.repository') }}&nbsp;</span>
                            <span class="text-color-charcoal">=&nbsp;</span>
                            <a href="" class="underline underline-offset-4">github</a>
                            <span class="text-color-charcoal">;</span>
                        </p>
                        <p>
                            <span class="text-color-green">{{ t('projects.description') }}&nbsp;</span>
                            <span class="text-color-charcoal">=&nbsp;</span>
                            <a href="" class="underline underline-offset-4">link</a>
                            <span class="text-color-charcoal">;</span>
                        </p>
                        <p>
                            <span class="text-color-green">Backend&nbsp;</span>
                            <span class="text-color-charcoal">=&nbsp;</span>
                            <span>ASP.NET Core (C#)</span>
                            <span class="text-color-charcoal">;</span>
                        </p>
                        <p>
                            <span class="text-color-green">Frontend&nbsp;</span>
                            <span class="text-color-charcoal">=&nbsp;</span>
                            <span>Ember.js (JavaScript)</span>
                            <span class="text-color-charcoal">;</span>
                        </p>
                        <p>
                            <span class="text-color-green">{{ t('projects.database') }}&nbsp;</span>
                            <span class="text-color-charcoal">=&nbsp;</span>
                            <span>MySQL</span>
                            <span class="text-color-charcoal">;</span>
                        </p>
                    </div>
                    <p class=" text-color-charcoal ml-4 md:ml-8">}</p>
                    <div>
                        <div class="ml-4 md:ml-8">
                            <p>
                                <span class="text-[#FF5555]">Laravel&nbsp;</span>
                                <span class="text-color-charcoal">+&nbsp;</span>
                                <span class="text-[#FFB86C]">Svelte&nbsp;</span>
                                <span class="text-color-charcoal">{</span>
                            </p>
                        </div>
                    </div>
                    <div class="ml-8 md:ml-16">
                        <p>
                            <span class="text-color-green">{{ t('projects.repository') }}&nbsp;</span>
                            <span class="text-color-charcoal">=&nbsp;</span>
                            <a href="" class="underline underline-offset-4">github</a>
                            <span class="text-color-charcoal">;</span>
                        </p>
                        <p>
                            <span class="text-color-green">{{ t('projects.description') }}&nbsp;</span>
                            <span class="text-color-charcoal">=&nbsp;</span>
                            <a href="" class="underline underline-offset-4">link</a>
                            <span class="text-color-charcoal">;</span>
                        </p>
                        <p>
                            <span class="text-color-green">Backend&nbsp;</span>
                            <span class="text-color-charcoal">=&nbsp;</span>
                            <span>Laravel (PHP)</span>
                            <span class="text-color-charcoal">;</span>
                        </p>
                        <p>
                            <span class="text-color-green">Frontend&nbsp;</span>
                            <span class="text-color-charcoal">=&nbsp;</span>
                            <span>Svelte (JavaScript)</span>
                            <span class="text-color-charcoal">;</span>
                        </p>
                        <p>
                            <span class="text-color-green">{{ t('projects.database') }}&nbsp;</span>
                            <span class="text-color-charcoal">=&nbsp;</span>
                            <span>MySQL</span>
                            <span class="text-color-charcoal">;</span>
                        </p>
                    </div>
                    <p class=" text-color-charcoal ml-4 md:ml-8">}</p>-->
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
