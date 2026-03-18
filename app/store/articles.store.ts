import type { IArticles } from "~/models/domain/articles";
import { slugify } from "~/utils/slugify";

export const useArticlesStore = defineStore("articleStore", () => {
  const initialized = ref(false);
  const isLoading = ref(true);
  const articles = ref<IArticles[]>([]);

  const getIsLoading = computed(() => isLoading.value);
  const getArticles = computed(() => articles.value);

  async function fetchArticles() {
    if (initialized.value) return;

    isLoading.value = true;
    try {
      const response = await $fetch<{ articles: IArticles[] }>(
        "https://mocki.io/v1/50422b19-547f-41c0-b623-e82d886ad264",
      );
      saveArticles(response?.articles || []);
    } catch (error) {
      articles.value = [];
      console.error("Failed to fetch articles:", error);
    } finally {
      isLoading.value = false;
    }
  }

  function saveArticles(newArticles: IArticles[]) {
    let filteredArticles = newArticles.filter(
      (article) => !article.title.includes("[Removed]"),
    );
    let mappedArticles = filteredArticles.map((article) => {
      article.publishedAt = parseDate(article.publishedAt);
      return article;
    });
    articles.value = mappedArticles;
    initialized.value = true;
  }

  const selectedArticleId = ref<string | null>(null);

  const getSelectedArticle = computed(() => {
    return (
      articles.value.find(
        (article) => slugify(article.title) == selectedArticleId.value,
      ) || null
    );
  });

  function setArticleId(id: string) {
    selectedArticleId.value = id;
  }

  return {
    initialized,
    getIsLoading,
    fetchArticles,
    getArticles,
    saveArticles,
    selectedArticleId,
    getSelectedArticle,
    setArticleId,
  };
});
