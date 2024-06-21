import { defineStore } from "pinia";
import type { APIResponse } from "@/services/http/types/APIResponse";

interface State {
  shows?: APIResponse[];
}

export const useShowsStore = defineStore({
  id: "shows",
  persist: {
    storage: sessionStorage,
    paths: ["shows", "genres"],
  },
  state: (): State => ({
    shows: undefined,
  }),
  getters: {
    genres: (state) => {
      return [...new Set(state.shows?.flatMap((show) => show.genres))];
    },
    getShowById: (state) => {
      return (showId: number) =>
        state.shows?.find((show) => show.id === showId);
    },
    getShowsByName: (state) => {
      return (showName: string) =>
        state.shows?.filter((show) =>
          show.name.toLocaleLowerCase().includes(showName.toLocaleLowerCase())
        );
    },
  },
});
