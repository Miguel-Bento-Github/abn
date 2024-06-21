<script setup lang="ts">
import type { APIResponse } from "@/services/http/types";
defineProps<{ show: APIResponse }>();
</script>

<template>
  <RouterLink
    :to="{ name: 'show', params: { showId: +show.id } }"
    class="show-card"
  >
    <figure>
      <img
        class="image"
        :src="show.image.medium"
        :alt="show.name"
        v-if="show.image"
      />
      <div class="image" v-else />
      <figcaption>{{ show.name }}</figcaption>
    </figure>
    <span>Rating: {{ show.rating.average ?? "Unrated" }}</span>
  </RouterLink>
</template>

<style lang="scss" scoped>
@use "sass:math";

.show-card {
  text-decoration: inherit;
  color: inherit;
  cursor: pointer;
  padding: 0.5rem 1rem;
  box-shadow: #ccc 0 0.25rem 0.5rem;
  background: #f8f8f8;
  border-radius: 0.5rem;
  transition: all 0.25s ease;
  filter: saturate(75%);

  &:hover {
    filter: saturate(100%);
    transform: translateY(-1%);
  }
}

.image {
  aspect-ratio: 42 / 59;
  min-height: math.div(295px, 1.5);
  min-width: math.div(210px, 1.5);
  background: #ccc;
  border-radius: 0.5rem;

  @media screen and (min-width: 600px) {
    min-height: 295px;
    min-width: 210px;
  }
}
</style>
