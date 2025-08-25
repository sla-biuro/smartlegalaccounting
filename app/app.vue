<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
    <Header />
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
import Header from "~~/components/Header.vue";
</script>