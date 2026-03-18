<script setup lang="ts">
import ArticleCard from "~/components/common/ArticleCard.vue";
import OfflineView from "~/components/common/OfflineView.vue";
import { handleToggleView, useAppView } from "~/composables/useAppView";
import type { IArticles } from "~/models/domain/articles";
import { useArticlesStore } from "~/store/articles.store";
const appView = useAppView();
const { isOnline } = useNetwork();

const articlesStore = useArticlesStore();
const { getArticles } = storeToRefs(articlesStore);

const { data, status } = await useFetch<{
  articles: IArticles[];
}>("https://mocki.io/v1/50422b19-547f-41c0-b623-e82d886ad264", {
  onResponse({ response }) {
    console.log(response._data);
    articlesStore.saveArticles(response._data?.articles || []);
  },
});
</script>

<template>
  <nav class="flex items-center gap-4 p-4 text-2xl">
    <div class="mr-auto font-bold">Articles</div>

    <button class="flex text-3xl sm:hidden" @click="handleToggleView">
      <Icon
        v-if="appView == 'list'"
        name="material-symbols:grid-view-rounded"
      />
      <Icon v-else name="material-symbols:format-list-bulleted-rounded" />
    </button>

    <button class="flex">
      <Icon name="material-symbols:search" class="text-3xl" />
    </button>
  </nav>

  <div v-if="status=='pending'">Loading...</div>

  <main
    v-else-if="getArticles.length > 0 && isOnline"
    class="p-2 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    :class="{
      'grid-cols-2 gap-2.5': appView == 'grid',
      'gap-4': appView == 'list',
    }"
  >
    <NuxtLink
      v-for="(article, index) in getArticles"
      :key="index"
      :to="'/article/' + index"
    >
      <ArticleCard :article="article" />
    </NuxtLink>
  </main>

  <OfflineView v-else-if="!isOnline" />
</template>
