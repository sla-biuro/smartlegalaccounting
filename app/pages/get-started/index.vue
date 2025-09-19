<template>
  <main class="max-w-4xl mx-auto py-20 px-4">
    <h1 class="text-3xl font-bold mb-4">{{ pageTitle }}</h1>
    <p class="text-gray-600">A quick getting-started guide or signup flow will go here.</p>
  </main>
</template>

<script setup>
import { useTexts } from '../../../data/texts'
const { t } = useTexts()
const pageTitle = t.value.language ? t.value.language.getStarted : 'Get Started'
</script>
