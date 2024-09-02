<script setup lang="ts">
import { useRoute } from 'vue-router';
import experiences from '../experiences.json'
import Markdown from '../components/Markdown.vue';
import { Stories } from 'vue-insta-stories'

type Experience = {
    title: string,
    content: string,
    areas: ("Creatividad" | "Actividad" | "Servicio")[],
    images: string[]
}

const route = useRoute()

const experience = experiences[+route.params.id - 1]

</script>

<template>
    <Stories :stories="experience.images" class="h-fit overflow-hidden w-1/3 fixed right-4 top-8 rounded-xl py-4 drop-shadow-lg border-4 border-stone-900" :loop="true" :interval="5000"></Stories>

    <div class="w-2/3 p-8">
        <div class="mb-8 bg-stone-700 px-6 py-4 rounded-xl top-8 drop-shadow-md border-4 border-stone-900 flex items-center justify-between">
            <div class="flex items-center gap-6">
                <RouterLink to="/" class="btn text-3xl font-bold btn-square bg-stone-800 border-0 text-white hover:bg-stone-500 hover:scale-110">←</RouterLink>
                <h1 class="text-6xl">{{ experience.title }}</h1>
            </div>
            <div class="flex gap-4">
                <div class="badge font-mono text-white badge-lg" :class="{ 'badge-info': area == 'Creatividad', 'badge-success': area == 'Actividad', 'badge-error': area == 'Servicio' }" v-for="area in experience.areas">{{ area }}</div>
            </div>
        </div>
        <Suspense>
            <Markdown :md="experience.content" class="p-2" />
    
            <template #fallback>
                <svg class="w-16 h-16 animate-spin" viewBox="0 0 24 24">
    
                </svg>
            </template>
        </Suspense>
    </div>
    

</template>