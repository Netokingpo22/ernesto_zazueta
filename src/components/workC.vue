<template>
    <div class="roboto-mono flex w-full items-center justify-center py-5 border-t-2 border-[#26232b]">
        <div class="flex flex-col justify-center items-center w-full whiteText">
            <div class="flex justify-center items-center w-[98%] md:w-[70%] md:min-w-[768px]">
                <div class="flex flex-col items-start justify-center text-xs leading-5 w-full md:text-xl ">
                    <div class="flex flex-row">
                        <p class="blueClass">{{ t('workExperience.workExperience') }}&nbsp;</p>
                        <p class="whiteChar">{</p>
                    </div>
                    <div>
                        <div class="ml-4 md:ml-8">
                            <p>
                                <span class="pinkClass">{{ t('workExperience.softwareDeveloper') }}&nbsp;</span>
                                <span class="whiteChar">[0][</span>
                                <span class="whiteText">{{ t('workExperience.internship') }}</span>
                                <span class="whiteChar">]&nbsp;</span>
                                <span class="whiteChar">{</span>
                            </p>
                        </div>
                        <div class="ml-8 md:ml-16">
                            <p>
                                <span class="greenVar">{{ t('workExperience.organization') }}&nbsp;</span>
                                <span class="whiteChar">=&nbsp;</span>
                                <span class="whiteText">Instituto Tecnológico Superior de Cajeme</span>
                                <span class="whiteChar">;</span>
                            </p>
                            <p>
                                <span class="greenVar">{{ t('workExperience.date') }}&nbsp;</span>
                                <span class="whiteChar">[&nbsp;</span>
                                <span class="whiteText">{{ t('workExperience.cero.date1') }}</span>
                                <span class="whiteChar">]&nbsp;</span>
                                <span class="whiteChar">[&nbsp;</span>
                                <span class="whiteText">{{ t('workExperience.cero.date2') }}</span>
                                <span class="whiteChar">&nbsp;];</span>
                            </p>
                            <p>
                                <span class="greenVar">{{ t('workExperience.activities') }}&nbsp;</span>
                                <span class="whiteChar">{</span>
                            </p>
                            <p>
                                <span class="whiteChar">[</span>
                                <span class="greenVar">0</span>
                                <span class="whiteChar">]</span>
                                <span class="whiteChar">[ </span>
                                <span class="whiteText">{{ t('workExperience.cero.cero') }}</span>
                                <span class="whiteChar"> ]</span>
                            </p>
                            <p>
                                <span class="whiteChar">[</span>
                                <span class="greenVar">1</span>
                                <span class="whiteChar">]</span>
                                <span class="whiteChar">[ </span>
                                <span class="whiteText">{{ t('workExperience.cero.one') }}</span>
                                <span class="whiteChar"> ]</span>
                            </p>
                            <p>
                                <span class="whiteChar">[</span>
                                <span class="greenVar">2</span>
                                <span class="whiteChar">]</span>
                                <span class="whiteChar">[ </span>
                                <span class="whiteText">{{ t('workExperience.cero.two') }}</span>
                                <span class="whiteChar"> ]</span>
                            </p>
                            <p>
                                <span class="whiteChar">[</span>
                                <span class="greenVar">3</span>
                                <span class="whiteChar">]</span>
                                <span class="whiteChar">[ </span>
                                <span class="whiteText">{{ t('workExperience.cero.three') }}</span>
                                <span class="whiteChar"> ]</span>
                            </p>
                            <p>
                                <span class="whiteChar">[</span>
                                <span class="greenVar">4</span>
                                <span class="whiteChar">]</span>
                                <span class="whiteChar">[ </span>
                                <span class="whiteText">{{ t('workExperience.cero.four') }}</span>
                                <span class="whiteChar"> ]}</span>
                            </p>
                            <p>
                                <span class="greenVar">{{ t('workExperience.technologies') }}&nbsp;</span>
                                <span class="whiteChar">= </span>
                                <span class="whiteChar">[ </span>
                                <span class="whiteText">Python, Django, Django REST Framework, Vue.js,
                                    JavaScript, Tailwind CSS, Git</span>
                                <span class="whiteChar"> ];</span>
                            </p>
                        </div>
                        <p class="ml-4 md:ml-8 whiteChar">}</p>
                        <!-- ----------------------------------------------------------------------- -->
                        <div class="ml-4 md:ml-8">
                            <p>
                                <span class="pinkClass">{{ t('workExperience.softwareDeveloper') }}&nbsp;</span>
                                <span class="whiteChar">[1][</span>
                                <span class="whiteText">{{ t('workExperience.internship') }}</span>
                                <span class="whiteChar">]&nbsp;</span>
                                <span class="whiteChar">{</span>
                            </p>
                        </div>
                        <div class="ml-8 md:ml-16">
                            <p>
                                <span class="greenVar">{{ t('workExperience.organization') }}&nbsp;</span>
                                <span class="whiteChar">=&nbsp;</span>
                                <span class="whiteText">Clever Cloud</span>
                                <span class="whiteChar">;</span>
                            </p>
                            <p>
                                <span class="greenVar">{{ t('workExperience.date') }}&nbsp;</span>
                                <span class="whiteChar">[&nbsp;</span>
                                <span class="whiteText">{{ t('workExperience.one.date1') }}</span>
                                <span class="whiteChar">]&nbsp;</span>
                                <span class="whiteChar">[&nbsp;</span>
                                <span class="whiteText">{{ t('workExperience.one.date2') }}</span>
                                <span class="whiteChar">&nbsp;];</span>
                            </p>
                            <p>
                                <span class="greenVar">{{ t('workExperience.activities') }}&nbsp;</span>
                                <span class="whiteChar">{</span>
                            </p>
                            <p>
                                <span class="whiteChar">[</span>
                                <span class="greenVar">0</span>
                                <span class="whiteChar">]</span>
                                <span class="whiteChar">[ </span>
                                <span class="whiteText">{{ t('workExperience.one.cero') }}</span>
                                <span class="whiteChar"> ]</span>
                            </p>
                            <p>
                                <span class="whiteChar">[</span>
                                <span class="greenVar">1</span>
                                <span class="whiteChar">]</span>
                                <span class="whiteChar">[ </span>
                                <span class="whiteText">{{ t('workExperience.one.one') }}</span>
                                <span class="whiteChar"> ]</span>
                            </p>
                            <p>
                                <span class="greenVar">{{ t('workExperience.technologies') }}&nbsp;</span>
                                <span class="whiteChar">= </span>
                                <span class="whiteChar">[ </span>
                                <span class="whiteText">Java, Git</span>
                                <span class="whiteChar"> ];</span>
                            </p>
                        </div>
                        <p class="ml-4 md:ml-8 whiteChar">}</p>
                        <!-- ----------------------------------------------------------------------- -->
                        <div class="ml-4 md:ml-8">
                            <p>
                                <span class="pinkClass">{{ t('workExperience.softwareDeveloper') }}&nbsp;</span>
                                <span class="whiteChar">[0][</span>
                                <span class="whiteText">{{ t('workExperience.internship') }}</span>
                                <span class="whiteChar">]&nbsp;</span>
                                <span class="whiteChar">{</span>
                            </p>
                        </div>
                        <div class="ml-8 md:ml-16">
                            <p>
                                <span class="greenVar">{{ t('workExperience.organization') }}&nbsp;</span>
                                <span class="whiteChar">=&nbsp;</span>
                                <span class="whiteText">Zitheonsoft.</span>
                                <span class="whiteChar">;</span>
                            </p>
                            <p>
                                <span class="greenVar">{{ t('workExperience.date') }}&nbsp;</span>
                                <span class="whiteChar">[&nbsp;</span>
                                <span class="whiteText">{{ t('workExperience.two.date1') }}</span>
                                <span class="whiteChar">]&nbsp;</span>
                                <span class="whiteChar">[&nbsp;</span>
                                <span class="whiteText">{{ t('workExperience.two.date2') }}</span>
                                <span class="whiteChar">&nbsp;];</span>
                            </p>
                            <p>
                                <span class="greenVar">{{ t('workExperience.activities') }}&nbsp;</span>
                                <span class="whiteChar">{</span>
                            </p>
                            <p>
                                <span class="whiteChar">[</span>
                                <span class="greenVar">0</span>
                                <span class="whiteChar">]</span>
                                <span class="whiteChar">[ </span>
                                <span class="whiteText">{{ t('workExperience.two.cero') }}</span>
                                <span class="whiteChar"> ]</span>
                            </p>
                            <p>
                                <span class="whiteChar">[</span>
                                <span class="greenVar">1</span>
                                <span class="whiteChar">]</span>
                                <span class="whiteChar">[ </span>
                                <span class="whiteText">{{ t('workExperience.two.one') }}</span>
                                <span class="whiteChar"> ]</span>
                            </p>
                            <p>
                                <span class="whiteChar">[</span>
                                <span class="greenVar">2</span>
                                <span class="whiteChar">]</span>
                                <span class="whiteChar">[ </span>
                                <span class="whiteText">{{ t('workExperience.two.two') }}</span>
                                <span class="whiteChar"> ]</span>
                            </p>
                            <p>
                                <span class="whiteChar">[</span>
                                <span class="greenVar">3</span>
                                <span class="whiteChar">]</span>
                                <span class="whiteChar">[ </span>
                                <span class="whiteText">{{ t('workExperience.two.three') }}</span>
                                <span class="whiteChar"> ]</span>
                            </p>
                            <p>
                                <span class="whiteChar">[</span>
                                <span class="greenVar">4</span>
                                <span class="whiteChar">]</span>
                                <span class="whiteChar">[ </span>
                                <span class="whiteText">{{ t('workExperience.two.four') }}</span>
                                <span class="whiteChar"> ]}</span>
                            </p>
                            <p>
                                <span class="greenVar">{{ t('workExperience.technologies') }}&nbsp;</span>
                                <span class="whiteChar">= </span>
                                <span class="whiteChar">[ </span>
                                <span class="whiteText">Java, Spring Boot, Angular, Typescript, Sql, Git</span>
                                <span class="whiteChar"> ];</span>
                            </p>
                        </div>
                        <p class="ml-4 md:ml-8 whiteChar">}</p>
                        <!-- ----------------------------------------------------------------------- -->
                    </div>
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