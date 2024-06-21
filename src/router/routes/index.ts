import { notFound } from "@/router/routes/notFound";
import { homeRoute } from "@/router/routes/homeRoute";
import { showRoute } from "@/router/routes/showRoute";
import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [homeRoute, showRoute, notFound];
