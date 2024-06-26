<script setup lang="ts">
import GenreSelector from "@/components/genre-selector/GenreSelector.vue";
import ShowCard from "@/components/show-card/ShowCard.vue";
import type { APIResponse } from "@/services/http/types";
import { useShowsStore } from "@/stores/useShowsStore";
import { ref, watch, watchEffect } from "vue";

const isSortDescending = ref(false);
const initialModelState: string[] = [];
const genresModel = ref<APIResponse["genres"]>(initialModelState);
const resetGenresModel = () => (genresModel.value = initialModelState);

const showsStore = useShowsStore();

const shows = showsStore.shows?.slice(0, 5);
const activeShows = ref(shows);

watchEffect(() => {
  if (!genresModel.value.length) {
    activeShows.value = shows;
    return;
  }

  activeShows.value = showsStore.shows?.filter((show) =>
    show.genres.some((genre) => genresModel.value.includes(genre))
  );
});

watch(isSortDescending, () => {
  activeShows.value = activeShows.value?.sort((a, b) => {
    return isSortDescending.value
      ? a.rating.average - b.rating.average
      : b.rating.average - a.rating.average;
  });
});

const userInput = ref("");
watch(userInput, (text) => {
  activeShows.value = showsStore.getShowsByName(text);
});
</script>

<template>
  <div data-cy="home-content">
    <section>
      <h2 class="genres-title">{{ $t("genres") }}</h2>
      <GenreSelector v-model="genresModel" />

      <button
        type="button"
        class="genre-control"
        data-cy="genre-reset"
        @click="resetGenresModel()"
      >
        {{ $t("reset") }}
      </button>
    </section>

    <div class="show-cards-wrapper" key="active-show">
      <h2 class="show-cards-title">{{ $t("shows") }}</h2>
      <div class="shows-control">
        <input
          data-cy="show-filter"
          class="show-filter"
          type="text"
          v-model="userInput"
          placeholder="input show name here..."
        />
        <button
          data-cy="sort-shows"
          type="button"
          class="genre-control"
          @click="isSortDescending = !isSortDescending"
        >
          {{
            $t("sortByRating", {
              direction: isSortDescending ? "↑" : "↓",
            })
          }}
        </button>
      </div>
      <div class="show-cards">
        <TransitionGroup name="list">
          <ShowCard
            data-cy="show-card"
            :show="activeShow"
            v-for="activeShow in activeShows"
            :key="activeShow.id"
          />
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.show-filter {
  padding: 0.5rem 1rem;
  margin-inline-start: 1rem;
  border: 0;
  box-shadow: inset 2px 2px 4px #999;
  border-radius: 0.25rem;
}

.rating-control {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

.shows-control {
  display: flex;
  align-items: center;
}

.genre-selection {
  padding: 0.5rem;
  padding-block-start: 0;
  display: flex;
  flex-flow: column wrap;
  overflow: auto;
  max-height: 7rem;
  justify-content: flex-start;
  gap: 0.25rem;

  @media screen and (min-width: 600px) {
    flex-flow: column wrap;
    max-height: 10rem;
    padding: 1rem;
  }
}

.genre-control {
  display: block;
  margin-inline-start: auto;
  margin-inline-end: 1rem;
  margin-block-end: 1rem;
}

.show-cards-title,
.genres-title {
  padding-inline-start: 1rem;
}

.show-cards-wrapper {
  position: relative;
}

.show-cards {
  position: relative;
  display: flex;
  flex: none;
  justify-content: flex-start;
  column-gap: 1rem;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 1rem;
  scroll-snap-align: center;

  & > * {
    scroll-snap-type: x mandatory;
  }
}
</style>
