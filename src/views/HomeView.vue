<script setup lang="ts">
import ShowCard from "@/components/show-card/ShowCard.vue";
import { useShowsQuery } from "@/queries/useFetchQuery";
import type { APIResponse } from "@/services/http/types";
import { useShowsStore } from "@/stores/useShowsStore";
import { computed, ref, watch } from "vue";

const isSortDescending = ref(false);
const initialModelState: string[] = [];
const genresModel = ref<APIResponse["genres"]>(initialModelState);
const resetGenresModel = () => (genresModel.value = initialModelState);

const {
  isLoading,
  isError,
  data: shows,
  isSuccess,
} = useShowsQuery("shows?page=1");

const showsStore = useShowsStore();

/**
 * A computed property that returns a list of active shows, sorted and filtered based on certain criteria.
 *
 * The list is initially sliced to the top 5 shows. If no genres are selected in the `genresModel`,
 * the list is sorted based on the average rating, either in descending or ascending order,
 * depending on the value of `isSortDescending`.
 *
 * If genres are selected, the list is filtered to include only shows that match the selected genres
 * before being sorted.
 */
const activeShows = computed(() => {
  const sortCallback = <T extends APIResponse>(a: T, b: T) =>
    isSortDescending.value
      ? a.rating.average - b.rating.average
      : b.rating.average - a.rating.average;

  let shows = showsStore.shows?.slice(0, 5);
  if (!genresModel.value.length) return shows?.sort(sortCallback);

  shows = showsStore.shows?.filter((show) =>
    show.genres.some((genre) => genresModel.value.includes(genre))
  );

  return shows?.sort(sortCallback);
});

watch(isSuccess, () => {
  showsStore.$patch({
    shows: shows.value,
  });
});

const sortByRating = () => {
  isSortDescending.value = !isSortDescending.value;
};
</script>

<template>
  <h1>{{ $t("welcome") }}</h1>
  <p :aria-busy="isLoading">
    <TransitionGroup name="content">
      <span key="loading" v-if="isLoading"> {{ $t("loading") }}</span>
      <div key="error" v-if="isError">{{ $t("error") }}</div>

      <div key="not-loading" data-cy="home-content" v-else>
        <section>
          <h2>Genres</h2>
          <div class="genre-selection">
            <label v-for="genre in showsStore.genres" :key="genre" :for="genre">
              <input
                type="checkbox"
                true-value="yes"
                false-value="no"
                v-model="genresModel"
                :id="genre"
                :value="genre"
              />
              {{ genre }}
            </label>
          </div>

          <button class="genre-reset" type="button" @click="resetGenresModel()">
            Reset
          </button>

          <div class="rating-control">
            <button type="button" class="sort" @click="sortByRating">
              Sort by Rating {{ isSortDescending ? "↑" : "↓" }}
            </button>
          </div>
        </section>

        <div key="active-show">
          <h2>Shows</h2>
          <div class="show-cards">
            <TransitionGroup name="list">
              <ShowCard
                :show="activeShow"
                v-for="activeShow in activeShows"
                :key="activeShow.id"
              />
            </TransitionGroup>
          </div>
        </div>
      </div>
    </TransitionGroup>
  </p>
</template>

<style lang="scss" scoped>
.list-move,
.list-enter-active {
  transition: all 0.5s ease;
}

.list-leave-active,
.list-leave-to {
  transition: all 0s;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  z-index: -1;
  transform: translateX(-4rem);
}

.list-leave-active {
  position: absolute;
  opacity: 0;
}

.rating-control {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
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

.genre-reset {
  display: block;
  margin-inline-start: auto;
  margin-right: 1rem;
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
