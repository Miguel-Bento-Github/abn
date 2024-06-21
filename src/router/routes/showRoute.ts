import { Route } from "@/router/routes.enum";
import ShowView from "@/views/ShowView.vue";

export const showRoute = {
  name: Route.Show,
  path: "/show/:showId",
  component: ShowView,
};
