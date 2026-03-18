<script setup lang="ts">
import ArticleCard from "~/components/common/ArticleCard.vue";
import ArticleCardSkeleton from "~/components/common/ArticleCardSkeleton.vue";
import Empty from "~/components/common/Empty.vue";
import Expanded from "~/components/common/Expanded.vue";
import OfflineView from "~/components/common/OfflineView.vue";
import Loader from "~/components/ui/Loader.vue";
import { handleToggleView, useAppView } from "~/composables/useAppView";
import { useArticlesStore } from "~/store/articles.store";
import { slugify } from "~/utils/slugify";
const appView = useAppView();
const { isOnline } = useNetwork();

const articlesStore = useArticlesStore();
const { initialized, getIsLoading, getArticles } = storeToRefs(articlesStore);

const query = ref("");
const showSearch = ref(false);

const filteredArticles = computed(() => {
  if (!query.value) return getArticles.value;

  return getArticles.value.filter((article) =>
    article.title.toLowerCase().includes(query.value.toLowerCase()),
  );
});

onMounted(() => {
  articlesStore.fetchArticles();
});
</script>

<template>
  <nav class="flex flex-wrap items-center gap-4 p-4 text-2xl">
    <div class="mr-auto font-bold">Articles</div>

    <button class="flex text-3xl sm:hidden" @click="handleToggleView">
      <Icon
        v-if="appView == 'list'"
        name="material-symbols:grid-view-rounded"
      />
      <Icon v-else name="material-symbols:format-list-bulleted-rounded" />
    </button>

    <button v-if="initialized" class="flex" @click="showSearch = !showSearch">
      <Icon name="material-symbols:search" class="text-3xl" />
    </button>

    <input
      v-if="showSearch"
      type="search"
      placeholder="Search articles..."
      v-model="query"
      class="outline-none flex-1 max-w-96"
    />
  </nav>

  <div v-if="getIsLoading" class="responsive-grid p-2 gap-4">
    <ArticleCardSkeleton v-for="value in 6" :key="value" />
  </div>

  <Empty v-if="!getIsLoading && filteredArticles.length == 0" />

  <main
    v-else-if="filteredArticles.length && isOnline"
    class="@container grid p-2 sm:responsive-grid"
    :class="{
      'grid-cols-2 gap-2.5': appView == 'grid',
      'gap-4': appView == 'list',
    }"
  >
    <ArticleCard
      v-for="article in filteredArticles"
      :key="slugify(article.title)"
      :article="article"
    />
  </main>

  <OfflineView v-else-if="!isOnline" />
</template>
