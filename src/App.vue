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
  isFetched,
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
    <h1 data-cy="home-title" class="title">{{ $t("welcome") }}</h1>
    <LocaleChanger />
  </nav>
  <div :aria-busy="isLoading">
    <span key="loading" v-if="isLoading"> {{ $t("loading") }}</span>
    <div key="error" v-if="isError">{{ $t("error") }}</div>
    <main class="view" v-if="isFetched">
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
  align-items: center;
  padding: 0.5rem 1rem;
  background: #333;
  color: #f8f8f8;
  filter: drop-shadow(0.25rem 0 0.5rem #999);

  a {
    color: inherit;
  }
}

.title {
  font-size: medium;
}

.view {
  padding-block-start: 3rem;
}
</style>
