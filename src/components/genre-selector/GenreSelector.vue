<script setup lang="ts">
import { useShowsStore } from "@/stores/useShowsStore";

const showsStore = useShowsStore();
const genresModel = defineModel();
</script>

<template>
  <div data-cy="genre-selection" class="genre-selection">
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
</template>
