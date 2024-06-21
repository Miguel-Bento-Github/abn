<script setup lang="ts">
import { useShowsStore } from "@/stores/useShowsStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const showsStore = useShowsStore();
const { getShowById } = storeToRefs(showsStore);
const show = ref(getShowById.value(+route.params.showId));
</script>

<template>
  <section>
    <h1 class="title">{{ show?.name }}</h1>
    <p class="runtime" v-if="show?.averageRuntime">
      Runtime: {{ show?.averageRuntime }} min
    </p>
    <p class="ended" v-if="show?.ended">Ended: {{ show?.ended }}</p>
    <p class="summary" v-if="show?.summary" v-html="show?.summary" />
    <a
      class="imdb-cta"
      rel="noreferrer"
      target="_blank"
      :href="`https://www.imdb.com/title/${show?.externals.imdb}`"
      aria-label="IMDB"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
        alt=""
        aria-hidden="true"
      />
    </a>
  </section>
</template>

<style lang="scss" scoped>
.imdb-cta {
  display: flex;
  width: 3rem;
  filter: saturate(75%);

  &:hover {
    filter: saturate(100%);
  }
}
</style>
