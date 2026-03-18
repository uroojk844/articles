<script setup lang="ts">
import FilledButton from "../ui/FilledButton.vue";
function handleRetry() {
  window.location.reload();
}
</script>

<template>
  <section
    class="p-6 grid place-items-center place-content-center gap-4 h-[calc(100dvh-64px)]"
  >
    <Icon name="mdi:wifi-off" class="text-6xl sm:text-8xl" />
    <p class="font-bold text-lg">You're offline!</p>
    <p class="text-lg text-center text-black-3">
      Please connect to the internet and try again.
    </p>
    <FilledButton @click="handleRetry">
      <Icon name="mdi:refresh" class="text-xl" />
      <span class="font-medium">Retry</span>
    </FilledButton>
  </section>
</template>
