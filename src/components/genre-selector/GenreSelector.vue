<script setup lang="ts">
import { useShowsStore } from "@/stores/useShowsStore";

const showsStore = useShowsStore();
const genresModel = defineModel();
const emit = defineEmits<{
  (e: "reset"): void;
}>();
</script>

<template>
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
  <button class="genre-reset" type="button" @click="emit('reset')">
    Reset
  </button>
</template>

<style lang="scss" scoped>
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
  margin-inline-end: 1rem;
}
</style>
