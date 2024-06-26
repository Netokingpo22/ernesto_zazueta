<template>
    <div class="roboto-mono flex w-full items-center justify-center py-5 border-t-2 border-[#26232b]">
        <div class="flex flex-col justify-center items-center w-full whiteText">
            <div class="flex justify-center items-center w-[98%] md:w-[70%] md:min-w-[768px]">
                <div class="flex flex-col items-start justify-center text-xs leading-5 w-full md:text-xl">
                    <div class="flex flex-row">
                        <p class="blueClass">{{ t('projects.projects') }}&nbsp;</p>
                        <p class="whiteChar">{</p>
                    </div>
                    <div>
                        <div class="ml-4 md:ml-8">
                            <p>
                                <span class="text-[#50FA7B]">Node.js&nbsp;</span>
                                <span class="whiteChar">+&nbsp;</span>
                                <span class="text-[#F8F8F2]">Express.js&nbsp;</span>
                                <span class="whiteChar">+&nbsp;</span>
                                <span class="text-[#8BE9FD]">React&nbsp;</span>
                                <span class="whiteChar">{</span>
                            </p>
                        </div>
                    </div>
                    <div class="ml-8 md:ml-16">
                        <p>
                            <span class="greenVar">{{ t('projects.repository') }}&nbsp;</span>
                            <span class="whiteChar">=&nbsp;</span>
                            <a href="" class="underline underline-offset-4">github</a>
                            <span class="whiteChar">;</span>
                        </p>
                        <p>
                            <span class="greenVar">{{ t('projects.description') }}&nbsp;</span>
                            <span class="whiteChar">=&nbsp;</span>
                            <a href="" class="underline underline-offset-4">link</a>
                            <span class="whiteChar">;</span>
                        </p>
                        <p>
                            <span class="greenVar">Backend&nbsp;</span>
                            <span class="whiteChar">=&nbsp;</span>
                            <span>Node.js con Express.js</span>
                            <span class="whiteChar">;</span>
                        </p>
                        <p>
                            <span class="greenVar">Frontend&nbsp;</span>
                            <span class="whiteChar">=&nbsp;</span>
                            <span>React (JavaScript)</span>
                            <span class="whiteChar">;</span>
                        </p>
                        <p>
                            <span class="greenVar">{{ t('projects.database') }}&nbsp;</span>
                            <span class="whiteChar">=&nbsp;</span>
                            <span>MongoDB</span>
                            <span class="whiteChar">;</span>
                        </p>
                    </div>
                    <p class=" whiteChar ml-4 md:ml-8">}</p>
                    <div>
                        <div class="ml-4 md:ml-8">
                            <p>
                                <span class="text-[#50FA7B]">Spring Boot&nbsp;</span>
                                <span class="whiteChar">+&nbsp;</span>
                                <span class="text-[#FF5555]">Angular&nbsp;</span>
                                <span class="whiteChar">{</span>
                            </p>
                        </div>
                    </div>
                    <div class="ml-8 md:ml-16">
                        <p>
                            <span class="greenVar">{{ t('projects.repository') }}&nbsp;</span>
                            <span class="whiteChar">=&nbsp;</span>
                            <a href="" class="underline underline-offset-4">github</a>
                            <span class="whiteChar">;</span>
                        </p>
                        <p>
                            <span class="greenVar">{{ t('projects.description') }}&nbsp;</span>
                            <span class="whiteChar">=&nbsp;</span>
                            <a href="" class="underline underline-offset-4">link</a>
                            <span class="whiteChar">;</span>
                        </p>
                        <p>
                            <span class="greenVar">Backend&nbsp;</span>
                            <span class="whiteChar">=&nbsp;</span>
                            <span>Spring Boot (Java)</span>
                            <span class="whiteChar">;</span>
                        </p>
                        <p>
                            <span class="greenVar">Frontend&nbsp;</span>
                            <span class="whiteChar">=&nbsp;</span>
                            <span>Angular (TypeScript)</span>
                            <span class="whiteChar">;</span>
                        </p>
                        <p>
                            <span class="greenVar">{{ t('projects.database') }}&nbsp;</span>
                            <span class="whiteChar">=&nbsp;</span>
                            <span>PostgreSQL</span>
                            <span class="whiteChar">;</span>
                        </p>
                    </div>
                    <p class="whiteChar ml-4 md:ml-8">}</p>
                    <div>
                        <div class="ml-4 md:ml-8">
                            <p>
                                <span class="text-[#50FA7B]">Django&nbsp;</span>
                                <span class="whiteChar">+&nbsp;</span>
                                <span class="text-[#50FA7B]">Vue.js&nbsp;</span>
                                <span class="whiteChar">{</span>
                            </p>
                        </div>
                    </div>
                    <div class="ml-8 md:ml-16">
                        <p>
                            <span class="greenVar">{{ t('projects.repository') }}&nbsp;</span>
                            <span class="whiteChar">=&nbsp;</span>
                            <a href="" class="underline underline-offset-4">github</a>
                            <span class="whiteChar">;</span>
                        </p>
                        <p>
                            <span class="greenVar">{{ t('projects.description') }}&nbsp;</span>
                            <span class="whiteChar">=&nbsp;</span>
                            <a href="" class="underline underline-offset-4">link</a>
                            <span class="whiteChar">;</span>
                        </p>
                        <p>
                            <span class="greenVar">Backend&nbsp;</span>
                            <span class="whiteChar">=&nbsp;</span>
                            <span>Django (Python)</span>
                            <span class="whiteChar">;</span>
                        </p>
                        <p>
                            <span class="greenVar">Frontend&nbsp;</span>
                            <span class="whiteChar">=&nbsp;</span>
                            <span>Vue.js (JavaScript)</span>
                            <span class="whiteChar">;</span>
                        </p>
                        <p>
                            <span class="greenVar">{{ t('projects.database') }}&nbsp;</span>
                            <span class="whiteChar">=&nbsp;</span>
                            <span>SQLite</span>
                            <span class="whiteChar">;</span>
                        </p>
                    </div>
                    <p class=" whiteChar ml-4 md:ml-8">}</p>
                    <div>
                        <div class="ml-4 md:ml-8">
                            <p>
                                <span class="text-[#BD93F9]">ASP.NET Core&nbsp;</span>
                                <span class="whiteChar">+&nbsp;</span>
                                <span class="text-[#FFB86C]">Ember.js&nbsp;</span>
                                <span class="whiteChar">{</span>
                            </p>
                        </div>
                    </div>
                    <div class="ml-8 md:ml-16">
                        <p>
                            <span class="greenVar">{{ t('projects.repository') }}&nbsp;</span>
                            <span class="whiteChar">=&nbsp;</span>
                            <a href="" class="underline underline-offset-4">github</a>
                            <span class="whiteChar">;</span>
                        </p>
                        <p>
                            <span class="greenVar">{{ t('projects.description') }}&nbsp;</span>
                            <span class="whiteChar">=&nbsp;</span>
                            <a href="" class="underline underline-offset-4">link</a>
                            <span class="whiteChar">;</span>
                        </p>
                        <p>
                            <span class="greenVar">Backend&nbsp;</span>
                            <span class="whiteChar">=&nbsp;</span>
                            <span>ASP.NET Core (C#)</span>
                            <span class="whiteChar">;</span>
                        </p>
                        <p>
                            <span class="greenVar">Frontend&nbsp;</span>
                            <span class="whiteChar">=&nbsp;</span>
                            <span>Ember.js (JavaScript)</span>
                            <span class="whiteChar">;</span>
                        </p>
                        <p>
                            <span class="greenVar">{{ t('projects.database') }}&nbsp;</span>
                            <span class="whiteChar">=&nbsp;</span>
                            <span>MySQL</span>
                            <span class="whiteChar">;</span>
                        </p>
                    </div>
                    <p class=" whiteChar ml-4 md:ml-8">}</p>
                    <div>
                        <div class="ml-4 md:ml-8">
                            <p>
                                <span class="text-[#FF5555]">Laravel&nbsp;</span>
                                <span class="whiteChar">+&nbsp;</span>
                                <span class="text-[#FFB86C]">Svelte&nbsp;</span>
                                <span class="whiteChar">{</span>
                            </p>
                        </div>
                    </div>
                    <div class="ml-8 md:ml-16">
                        <p>
                            <span class="greenVar">{{ t('projects.repository') }}&nbsp;</span>
                            <span class="whiteChar">=&nbsp;</span>
                            <a href="" class="underline underline-offset-4">github</a>
                            <span class="whiteChar">;</span>
                        </p>
                        <p>
                            <span class="greenVar">{{ t('projects.description') }}&nbsp;</span>
                            <span class="whiteChar">=&nbsp;</span>
                            <a href="" class="underline underline-offset-4">link</a>
                            <span class="whiteChar">;</span>
                        </p>
                        <p>
                            <span class="greenVar">Backend&nbsp;</span>
                            <span class="whiteChar">=&nbsp;</span>
                            <span>Laravel (PHP)</span>
                            <span class="whiteChar">;</span>
                        </p>
                        <p>
                            <span class="greenVar">Frontend&nbsp;</span>
                            <span class="whiteChar">=&nbsp;</span>
                            <span>Svelte (JavaScript)</span>
                            <span class="whiteChar">;</span>
                        </p>
                        <p>
                            <span class="greenVar">{{ t('projects.database') }}&nbsp;</span>
                            <span class="whiteChar">=&nbsp;</span>
                            <span>MySQL</span>
                            <span class="whiteChar">;</span>
                        </p>
                    </div>
                    <p class=" whiteChar ml-4 md:ml-8">}</p>
                    <p class=" whiteChar">}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

</script>