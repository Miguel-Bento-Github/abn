import { get } from "@/services/http";
import type { APIResponse } from "@/services/http/types/APIResponse";
import { useQuery } from "@tanstack/vue-query";
import { QueryKey } from "@/queries/QueryKey.enum";

export const useFetchQuery = (code?: string | number) =>
  useQuery({
    queryKey: [QueryKey.Product, { locale: localStorage.locale }],
    queryFn: () => get<APIResponse>(`/http/${code ? code : 200}/Hello World`),
  });
