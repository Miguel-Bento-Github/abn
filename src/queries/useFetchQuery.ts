import { get } from "@/services/http";
import type { APIResponse } from "@/services/http/types/APIResponse";
import { useQuery } from "@tanstack/vue-query";
import { QueryKey } from "@/queries/QueryKey.enum";

/**
 * A custom hook that fetches data using the `useQuery` hook.
 *
 * @param - The API endpoint to fetch data from. If not provided, it defaults to a base endpoint.
 * @returns - The result of the query, including the data, status, and any errors.
 *
 */
export const useShowsQuery = (endpoint?: string) =>
  useQuery({
    // Ideally the dynamic content would also be localized and a third param with the locale would be passed
    queryKey: [QueryKey.Show, { locale: localStorage.locale }],
    queryFn: () => get<APIResponse[]>(`/${endpoint}`),
  });
