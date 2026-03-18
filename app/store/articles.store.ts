import type { IArticles } from "~/models/domain/articles";

export const useArticlesStore = defineStore("articleStore", () => {
  const isLoading = ref(false);
  const articles = ref<IArticles[]>([]);

  const getIsLoading = computed(() => isLoading.value);
  const getArticles = computed(() => articles.value);

  function saveArticles(newArticles: IArticles[]) {
    let filteredArticles = newArticles.filter((article) => !article.title.includes("[Removed]"));
    articles.value = filteredArticles;
  }

  function getArticlesByIndex(index: number): IArticles | undefined {
    return articles.value[index];
  }

  return {
    getIsLoading,
    getArticles,
    saveArticles,
    getArticlesByIndex,
  };
});
