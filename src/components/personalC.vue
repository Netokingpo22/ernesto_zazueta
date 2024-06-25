<template>
    <div class="roboto-mono flex w-full items-center justify-center py-5 border-t-2 border-[#26232b]">
        <div class="flex flex-col justify-center items-center w-full whiteText">
            <div class="flex justify-center items-center w-[98%] md:w-[70%] md:min-w-[768px]">
                <div class="flex flex-col items-start justify-center text-xs leading-5 w-full md:text-xl">
                    <div class="flex flex-row">
                        <p class="blueClass">{{ t('personalExperience.personalExperience') }}&nbsp;</p>
                        <p class="whiteChar">{</p>
                    </div>
                    <div>
                        <div class="ml-4 md:ml-8">
                            <p>
                                <span class="pinkClass">{{ t('personalExperience.cero.name') }}&nbsp;</span>
                                <span class="whiteChar">{</span>
                            </p>
                        </div>
                        <div class="ml-8 md:ml-16">
                            <p>
                                <span class="greenVar">{{ t('personalExperience.date') }}&nbsp;</span>
                                <span class="whiteChar">[&nbsp;</span>
                                <span class="whiteText">{{ t('personalExperience.cero.date1') }}</span>
                                <span class="whiteChar">]&nbsp;</span>
                                <span class="whiteChar">[&nbsp;</span>
                                <span class="whiteText">{{ t('personalExperience.cero.date2') }}</span>
                                <span class="whiteChar"> ];</span>
                            </p>
                            <p>
                                <span class="greenVar">{{ t('personalExperience.activities') }}&nbsp;</span>
                                <span class="whiteChar">= {</span>
                            </p>
                            <p>
                                <span class="whiteChar">[</span>
                                <span class="greenVar">0</span>
                                <span class="whiteChar">]</span>
                                <span class="whiteChar">[ </span>
                                <span class="whiteText">{{ t('personalExperience.cero.cero') }}</span>
                                <span class="whiteChar"> ]</span>
                            </p>
                            <p>
                                <span class="greenVar">{{ t('personalExperience.technologies') }}&nbsp;</span>
                                <span class="whiteChar">= [ </span>
                                <span class="whitwhiteTextChar">Java, Sql, Excel</span>
                                <span class="whiteChar"> ];</span>
                            </p>
                        </div>
                        <p class="ml-4 md:ml-8 whiteChar">}</p>
                        <div class="ml-4 md:ml-8">
                            <p>
                                <span class="pinkClass">{{ t('personalExperience.one.name') }}&nbsp;</span>
                                <span class="whiteChar">{</span>
                            </p>
                        </div>
                        <div class="ml-8 md:ml-16">
                            <p>
                                <span class="greenVar">{{ t('personalExperience.date') }}&nbsp;</span>
                                <span class="whiteChar">[&nbsp;</span>
                                <span class="whiteText">{{ t('personalExperience.one.date1') }}</span>
                                <span class="whiteChar">]&nbsp;</span>
                                <span class="whiteChar">[&nbsp;</span>
                                <span class="whiteText">{{ t('personalExperience.one.date2') }}</span>
                                <span class="whiteChar"> ];</span>
                            </p>
                            <p>
                                <span class="greenVar">{{ t('personalExperience.activities') }}&nbsp;</span>
                                <span class="whiteChar">= {</span>
                            </p>
                            <p>
                                <span class="whiteChar">[</span>
                                <span class="greenVar">0</span>
                                <span class="whiteChar">]</span>
                                <span class="whiteChar">[ </span>
                                <span class="whiteText">{{ t('personalExperience.one.cero') }}</span>
                                <span class="whiteChar"> ]</span>
                            </p>
                            <p>
                                <span class="greenVar">{{ t('personalExperience.technologies') }}&nbsp;</span>
                                <span class="whiteChar">= [ </span>
                                <span class="whitwhiteTextChar">Java, Spring Boot, Angular, Typescript</span>
                                <span class="whiteChar"> ];</span>
                            </p>
                        </div>
                        <p class="ml-4 md:ml-8 whiteChar">}</p>
                        <div class="ml-4 md:ml-8">
                            <p>
                                <span class="pinkClass">{{ t('personalExperience.two.name') }}&nbsp;</span>
                                <span class="whiteChar">{</span>
                            </p>
                        </div>
                        <div class="ml-8 md:ml-16">
                            <p>
                                <span class="greenVar">{{ t('personalExperience.date') }}&nbsp;</span>
                                <span class="whiteChar">[&nbsp;</span>
                                <span class="whiteText">{{ t('personalExperience.two.date1') }}</span>
                                <span class="whiteChar">]&nbsp;</span>
                                <span class="whiteChar">[&nbsp;</span>
                                <span class="whiteText">{{ t('personalExperience.two.date2') }}</span>
                                <span class="whiteChar"> ];</span>
                            </p>
                            <p>
                                <span class="greenVar">{{ t('personalExperience.activities') }}&nbsp;</span>
                                <span class="whiteChar">= {</span>
                            </p>
                            <p>
                                <span class="whiteChar">[</span>
                                <span class="greenVar">0</span>
                                <span class="whiteChar">]</span>
                                <span class="whiteChar">[ </span>
                                <span class="whiteText">{{ t('personalExperience.two.cero') }}</span>
                                <span class="whiteChar"> ]</span>
                            </p>
                            <p>
                                <span class="greenVar">{{ t('personalExperience.technologies') }}&nbsp;</span>
                                <span class="whiteChar">= [ </span>
                                <span class="whitwhiteTextChar">JavaScript, Php, Bootstrap</span>
                                <span class="whiteChar"> ];</span>
                            </p>
                        </div>
                        <p class="ml-4 md:ml-8 whiteChar">}</p>
                        <div class="ml-4 md:ml-8">
                            <p>
                                <span class="pinkClass">{{ t('personalExperience.three.name') }}&nbsp;</span>
                                <span class="whiteChar">{</span>
                            </p>
                        </div>
                        <div class="ml-8 md:ml-16">
                            <p>
                                <span class="greenVar">{{ t('personalExperience.date') }}&nbsp;</span>
                                <span class="whiteChar">[&nbsp;</span>
                                <span class="whiteText">{{ t('personalExperience.three.date1') }}</span>
                                <span class="whiteChar">]&nbsp;</span>
                                <span class="whiteChar">[&nbsp;</span>
                                <span class="whiteText">{{ t('personalExperience.three.date2') }}</span>
                                <span class="whiteChar"> ];</span>
                            </p>
                            <p>
                                <span class="greenVar">{{ t('personalExperience.activities') }}&nbsp;</span>
                                <span class="whiteChar">= {</span>
                            </p>
                            <p>
                                <span class="whiteChar">[</span>
                                <span class="greenVar">0</span>
                                <span class="whiteChar">]</span>
                                <span class="whiteChar">[ </span>
                                <span class="whiteText">{{ t('personalExperience.three.cero') }}</span>
                                <span class="whiteChar"> ]</span>
                            </p>
                            <p>
                                <span class="greenVar">{{ t('personalExperience.technologies') }}&nbsp;</span>
                                <span class="whiteChar">= [ </span>
                                <span class="whitwhiteTextChar">Java</span>
                                <span class="whiteChar"> ];</span>
                            </p>
                        </div>
                        <p class="ml-4 md:ml-8 whiteChar">}</p>
                    </div>
                    <p class="whiteChar">}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>