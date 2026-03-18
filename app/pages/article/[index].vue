<script setup lang="ts">
import { a } from "vue-router/dist/index-DFCq6eJK.js";
import type { IArticles } from "~/models/domain/articles";
import { useArticlesStore } from "~/store/articles.store";

const route = useRoute();
const index = computed(() => parseInt(route.params.index as string));

const { getArticlesByIndex } = useArticlesStore();
const article = ref<IArticles | undefined>(undefined);


</script>

<template>
  {{ article?.author }}
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
      <div><Icon name="mdi:clock-outline" /> 10h ago</div>
      <img
        src="https://placehold.co/400x256"
        alt="alt text"
        class="rounded-xl object-cover object-center aspect-video h-44 max-sm:absolute bottom-0 max-sm:translate-y-1/2 left-1/2 max-sm:-translate-x-1/2 shadow-b sm:row-start-1"
      />
    </section>
  </header>

  <p class="p-6 max-sm:pt-28 text-black-3">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsam
    nisi obcaecati officiis? Quidem, libero cum ipsa sapiente in ipsum fuga
    laboriosam omnis laudantium voluptates iure ratione nulla? Sed libero
    provident ut? Sequi distinctio rem, ex iusto et iure. Suscipit quia alias
    error perferendis nobis nostrum, sed ipsum tempora voluptatem aspernatur
    obcaecati rem voluptates dignissimos id ipsam. Quisquam aliquid vero
    cupiditate, est repudiandae eligendi nemo mollitia molestiae nisi quasi non
    laudantium unde aliquam nobis voluptates atque aspernatur sed! Voluptatibus
    repellat quasi iste libero explicabo itaque maxime fugiat reprehenderit
    minima in veritatis aperiam iusto nesciunt, ut inventore assumenda labore
    vitae porro.
  </p>
</template>
