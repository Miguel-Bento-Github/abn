<script setup lang="ts">
import LocaleChanger from "@/components/locale-changer/LocaleChanger.vue";
import { Route } from "@/router/routes.enum";
import { useShowsStore } from "@/stores/useShowsStore";
import { useShowsQuery } from "@/queries/useFetchQuery";
import { watch } from "vue";
const showsStore = useShowsStore();

const {
  data: shows,
  isSuccess,
  isLoading,
  isError,
} = useShowsQuery("shows?page=1");

watch(isSuccess, () => {
  showsStore.$patch({
    shows: shows.value,
  });
});
</script>

<template>
  <nav class="nav">
    <RouterLink :to="{ name: Route.Home }">{{ $t("home") }}</RouterLink>
    <LocaleChanger />
  </nav>
  <h1 class="title">{{ $t("welcome") }}</h1>
  <div :aria-busy="isLoading">
    <span key="loading" v-if="isLoading"> {{ $t("loading") }}</span>
    <div key="error" v-if="isError">{{ $t("error") }}</div>
    <main class="view" v-else>
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  position: fixed;
  inset-inline-start: 0;
  inset-block-start: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background: #555;
  color: #f8f8f8;
  filter: drop-shadow(0.25rem 0 0.5rem #999);

  a {
    color: inherit;
  }
}

.title {
  padding-block-start: 1rem;
}

.view {
  padding-block-start: 0.5rem;
}
</style>
