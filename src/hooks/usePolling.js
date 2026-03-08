import { useState, useEffect, useRef, useCallback } from 'react';

export function usePolling(fetchFn, intervalMs = 300000, deps = []) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const intervalRef = useRef(null);
    const mountedRef = useRef(true);

    const execute = useCallback(async () => {
        try {
            setError(null);
            const result = await fetchFn();
            if (mountedRef.current) {
                setData(result);
                setLoading(false);
            }
        } catch (err) {
            if (mountedRef.current) {
                setError(err.message);
                setLoading(false);
            }
        }
    }, [fetchFn]);

    useEffect(() => {
        mountedRef.current = true;
        execute();

        if (intervalMs > 0) {
            intervalRef.current = setInterval(execute, intervalMs);
        }

        return () => {
            mountedRef.current = false;
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [execute, intervalMs, ...deps]);

    return { data, loading, error, refetch: execute };
}
