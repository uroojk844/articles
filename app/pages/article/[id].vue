<script setup lang="ts">
import Image from "~/components/ui/Image.vue";
import { useArticlesStore } from "~/store/articles.store";

const route = useRoute();
const id = computed(() => route.params.id as string);

const articlesStore = useArticlesStore();
const { getSelectedArticle: article } = storeToRefs(articlesStore);

onMounted(() => {
  articlesStore.fetchArticles();
  articlesStore.setArticleId(id.value);
  useHead({
    title: article.value?.title || "Article",
    meta: [
      {
        name: "description",
        content: article.value?.description || "Article details",
      },
    ],
  });
});
</script>

<template>
  <header class="relative bg-surface p-6 text-white">
    <nav class="flex items-center justify-between">
      <button
        @click="$router.back()"
        class="bg-white/15 size-12 rounded-full grid place-items-center text-2xl"
      >
        <Icon name="material-symbols:arrow-left-alt-rounded" />
      </button>

      <span class="text-xl font-medium">Article</span>

      <button class="text-white text-3xl">
        <Icon name="material-symbols:heart-plus-outline" />
      </button>
    </nav>

    <section class="grid gap-4 px-2 mt-4 max-sm:pb-22.5">
      <h3 class="text-2xl font-bold">
        {{ article?.title }}
      </h3>
      <div class="dflex">
        <Icon name="mdi:clock-outline" /> {{ article?.publishedAt }}
      </div>
      <Image
        :url="article?.urlToImage"
        :alt="article?.title"
        class="h-44 sm:h-96 mx-auto max-sm:absolute bottom-0 max-sm:translate-y-1/2 left-1/2 max-sm:-translate-x-1/2 shadow-b sm:row-start-1"
      />
    </section>
  </header>

  <p class="p-6 max-sm:pt-28 text-black-3">{{ article?.description }}</p>
</template>
