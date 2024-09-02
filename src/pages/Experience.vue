<script setup lang="ts">
import { useRoute } from 'vue-router';
import experiences from '../experiences.json'
import Markdown from '../components/Markdown.vue';
import { Stories } from 'vue-insta-stories'
import { ref } from 'vue';
import { useWindowSize } from '@vueuse/core';

const route = useRoute()

const experience = experiences[+route.params.id - 1]

const storiesVisible = ref(false)

const { width } = useWindowSize()

</script>

<template>
    <Stories v-if="storiesVisible || width >= 1280" :stories="experience.images" class="transition-all xl:h-fit h-dvh w-dvw overflow-hidden xl:w-1/3 fixed xl:right-4 xl:top-1/2 xl:-translate-y-1/2 rounded-xl xl:py-4 drop-shadow-lg border-4 border-stone-900" :loop="true" :interval="5000"></Stories>
    <div v-if="storiesVisible" @click="storiesVisible = false" class="fixed z-50 right-4 top-8 btn sm:text-3xl font-bold btn-square btn-sm sm:btn-md bg-stone-800 border-0 text-white hover:bg-stone-500 font-mono hover:scale-110">X</div>

    <div class="w-full xl:w-2/3 p-2 sm:p-8">
        <div class="mb-8 bg-stone-700 px-6 py-4 rounded-xl top-8 drop-shadow-md border-4 border-stone-900 flex items-center justify-between flex-col gap-4 sm:gap-8 sm:flex-row">
            <div class="flex items-center gap-6">
                <RouterLink to="/" class="btn sm:text-3xl font-bold btn-square btn-sm sm:btn-md bg-stone-800 border-0 text-white hover:bg-stone-500 hover:scale-110">←</RouterLink>
                <h1 class="text-4xl md:text-6xl">{{ experience.title }}</h1>
                <div @click="storiesVisible = !storiesVisible" class="btn xl:hidden sm:text-3xl font-bold btn-square btn-sm sm:btn-md bg-stone-800 border-0 text-white hover:bg-stone-500 hover:scale-110 relative z-50">📸</div>
            </div>
            <div class="flex gap-4 flex-wrap-reverse justify-center">
                <div class="badge badge-xs font-mono text-white lg:badge-lg" :class="{ 'badge-info': area == 'Creatividad', 'badge-success': area == 'Actividad', 'badge-error': area == 'Servicio' }" v-for="area in experience.areas">{{ area }}</div>
            </div>
        </div>
        <Suspense>
            <Markdown :md="experience.content" class="p-2 font-mono" />
    
            <template #fallback>
                <svg class="w-16 h-16 animate-spin" viewBox="0 0 24 24">
    
                </svg>
            </template>
        </Suspense>
    </div>
    

</template>