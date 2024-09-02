<script setup lang="ts">
import { marked } from 'marked';


const props = defineProps<{
    md: string
}>()

const markdownFile = (await import(`../assets/md/${props.md}?raw`)).default
const markdown = marked.parse(markdownFile)

</script>

<template>
    <div v-html="markdown" class="prose prose-invert text-white prose-headings:text-white lg:prose-xl max-w-none">

    </div>
</template>