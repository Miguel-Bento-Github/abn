export const notFound = {
  path: "/:catchAll(.*)",
  component: () => import("@/views/NotFound.vue"),
  meta: {
    title: "NotFound",
    metaTags: [
      {
        name: "description",
        content: "Page not found.",
      },
    ],
  },
};
