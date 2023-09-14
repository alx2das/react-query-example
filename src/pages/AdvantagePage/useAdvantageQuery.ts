import { useQuery } from "@tanstack/react-query";
import { api } from "../../common";

import { AdvantageData } from "./types";

export const useAdvantageQuery = () => {
    const {
        data,
        dataUpdatedAt,
        error,
        errorUpdateCount,
        errorUpdatedAt,
        failureCount,
        failureReason,
        fetchStatus,
        isError,
        isFetched,
        isFetchedAfterMount,
        isFetching,
        isInitialLoading,
        isLoading,
        isLoadingError,
        isPaused,
        isPlaceholderData,
        isPreviousData,
        isRefetchError,
        isRefetching,
        isStale,
        isSuccess,
        refetch,
        remove,
        status
    } = useQuery<AdvantageData>({
        queryKey: ["advantage"],
        queryFn: async () => {
            const response = await api.get("/advantage");
            return response.data;
        },

        select: (data) => {
            return data;
        },

        enabled: true,

        initialData: undefined,
        initialDataUpdatedAt: 5 * 60 * 1000,

        retry: false,
        retryOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retryDelay: 1000,

        staleTime: 5 * 60 * 1000, // время устаревания кеша
        cacheTime: 5 * 60 * 1000, // неиспользуемые данные перед удалением

        refetchInterval: false, // обновление через Х секунд
        refetchIntervalInBackground: false,

    });

    return { isLoading, data };
};