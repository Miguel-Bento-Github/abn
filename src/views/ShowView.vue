<script setup lang="ts">
import { useShowsStore } from "@/stores/useShowsStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const showsStore = useShowsStore();
const { getShowById } = storeToRefs(showsStore);
const show = ref(getShowById.value(+route.params.showId));

const ctas = [
  {
    name: show.value?.name,
    img: "https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg",
    href: `https://www.imdb.com/title/${show.value?.externals.imdb}`,
    label: "imdb",
  },
  {
    name: "TVMaze",
    img: "https://static.tvmaze.com/images/tvm-header-logo.png",
    href: show.value?.url,
    label: "TVMaze",
  },
];
</script>

<template>
  <section class="show-section">
    <h1 :id="show?.name" class="title" data-cy="show-title">
      {{ show?.name }}
    </h1>
    <div class="info-stats">
      <picture>
        <source
          :srcset="show?.image.medium"
          media="(orientation: portrait)"
          data-cy="show-image"
        />
        <img class="show-image" :src="show?.image.original" :alt="show?.name" />
      </picture>
      <p class="language" v-if="show?.language" data-cy="show-language">
        {{ $t("language", { language: show?.language }) }}
      </p>
      <p class="runtime" v-if="show?.averageRuntime" data-cy="show-runtime">
        {{ $t("runtime", { runtime: show?.averageRuntime }) }}
      </p>
      <div class="run">
        <p class="premiered" v-if="show?.premiered" data-cy="show-premiered">
          {{ $t("premiered", { premiered: show?.premiered }) }}
        </p>
        <p class="ended" v-if="show?.ended" data-cy="show-ended">
          {{ $t("ended", { ended: show?.ended }) }}
        </p>
      </div>
      <p
        class="network"
        v-if="show?.network?.name && show?.network?.country.name"
        data-cy="show-country"
      >
        {{
          $t("network", {
            network: show?.network?.name,
            country: show?.network?.country.name,
          })
        }}
      </p>
      <div data-cy="show-showtime">
        {{ $t("showtime", { showtime: show?.schedule.time }) }}

        <span v-for="(day, index) in show?.schedule.days" :key="day">
          <span v-if="show?.schedule.days">
            {{ day
            }}{{ index === show?.schedule.days.length - 1 ? "" : ", " }}</span
          >
        </span>
      </div>
    </div>
    <div class="info-core">
      <p
        class="summary"
        v-if="show?.summary"
        v-html="show?.summary"
        data-cy="show-summary"
      />
      <div class="external-links">
        <a
          class="cta"
          rel="noreferrer"
          target="_blank"
          :href="cta.href"
          :aria-label="cta.label"
          v-for="cta in ctas"
          :key="cta.name"
        >
          <img :src="cta.img" alt="" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.show-section {
  display: grid;
  grid-template-areas:
    "title title title title"
    "core core core stats";

  @media screen and (min-width: 600px) {
    grid-template-areas:
      "title title"
      "core stats stats";
  }
}

.info-stats {
  background: #f4f4f4;
  grid-area: stats;
  padding: 1rem;
  border-radius: 0.25rem;
}

.info-core {
  grid-area: core;
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;
}

.title {
  grid-area: title;
}

.show-image {
  border-radius: 0.5rem;
}

.external-links {
  display: flex;

  img {
    object-fit: contain;
  }
}

.cta {
  display: flex;
  margin: 0.5rem;
  width: 3rem;
  filter: saturate(70%);

  &:hover {
    filter: saturate(100%);
  }
}
</style>
