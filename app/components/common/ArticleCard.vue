<script setup lang="ts">
import FilledButton from "../ui/FilledButton.vue";
import type { IArticles } from "~/models/domain/articles";
import Image from "../ui/Image.vue";
const { article } = defineProps<{
  article: IArticles;
}>();
</script>

<template>
  <article
    @click="$router.push('/article/' + slugify(article.title))"
    class="@container cursor-pointer text-white p-4 bg-surface rounded-lg grid gap-2"
  >
    <Image
      :url="article.urlToImage"
      :alt="article.title"
      class="w-full sm:min-h-48"
    />
    <p class="font-semibold line-clamp-2">
      {{ article.title }}
    </p>
    <div class="@max-3xs:hidden flex justify-between items-center">
      <div class="text-gray flex items-center gap-2.5">
        <Icon name="mdi:calendar-range-outline" class="text-2xl" />
        <span>{{ article.publishedAt }}</span>
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
