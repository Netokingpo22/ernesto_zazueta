<template>
    <div class="roboto-mono text-[#e6e6e6] flex w-full items-center justify-center">
        <div class="flex flex-col justify-center items-center w-full">
            <div class="text-center">
                <p class="text-2xl">{{ props.titleTextEspañol }}</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    titleTextEspañol: {
        type: String,
        required: true
    },
    titleTextIngles: {
        type: String,
        required: false
    }
});
</script>