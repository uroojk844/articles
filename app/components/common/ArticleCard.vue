<script setup lang="ts">
import FilledButton from "../ui/FilledButton.vue";
import type { IArticles } from "~/models/domain/articles";
defineProps<{
  article: IArticles;
}>();
</script>

<template>
  <article class="@container text-white p-4 bg-surface rounded-lg grid gap-2">
    <img
      :src="
        article.urlToImage ||
        'https://placehold.co/400x200?text=No+Image'
      "
      :alt="article.title"
      class="aspect-video object-cover object-center w-full rounded-lg"
    />
    <p class="font-semibold line-clamp-2">
      {{ article.title }}
    </p>
    <div class="@max-3xs:hidden flex justify-between items-center">
      <div class="text-gray flex items-center gap-2.5">
        <Icon name="mdi:calendar-range-outline" class="text-2xl" />
        <span>{{ parseDate(article.publishedAt) }}</span>
      </div>

      <FilledButton>
        <div class="flex items-center gap-2.5">
          <span>Read More</span>
          <Icon name="mdi:arrow-right-bold-circle" />
        </div>
      </FilledButton>
    </div>
  </article>
</template>
