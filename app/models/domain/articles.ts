export interface IArticles {
  id: string;
  source: ISource;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
}

interface ISource {
  id: null | string;
  name: string;
}