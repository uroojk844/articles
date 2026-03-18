<script setup lang="ts">
import NoImage from "./NoImage.vue";

const { url } = defineProps<{
  url?: string | null;
}>();

const error = ref(false);
</script>

<template>
  <img
    v-if="url && !error"
    :src="url"
    @error="error = true"
    :$attrs
    class="aspect-video object-cover object-center rounded-lg"
  />
  <NoImage v-bind="$attrs" v-else />
</template>
