import { useEffect, useState, useRef } from 'react';
/**
 * **Calls a service, avoids race conditions and handles debounced isLoading state**
 *
 * * **race conditions**
 * When calling a service, it often gets called multiple times, due to changing parameters.
 * This hook should prevent this race condition by cancelling previous requests
 *
 * @param url the complete url of the service, includings querys etc
 * @param config.loadingThreshold threshold before removing _old result_ and setting `isLoading` flag.
 * @param config.bypass bypasses the request, clears all pending ones and sets isLoading flag
 */
export const useService = <ResultType>(
    url: string,
    options?: {
        loadingThreshold?: number
        bypass?: boolean
    }
) => {

  const { loadingThreshold, bypass } = {
    loadingThreshold: 1000,
    ...options,
  };

  const [result, setResult] = useState<ResultType>();
  const abortControllerRef = useRef<AbortController>();

  useEffect(() => {
    if (!bypass) {
      setResult(undefined);
      abortControllerRef.current && abortControllerRef.current.abort();
      return;
    }

    const timeout = setTimeout(() => {
      setResult(undefined)
    }, loadingThreshold);

    if (abortControllerRef.current) abortControllerRef.current.abort();

    abortControllerRef.current = new AbortController();

    fetch(url, { signal: abortControllerRef.current.signal })
      .then(response => response.json())
      .then(result => {
        clearTimeout(timeout)
        setResult(result)
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          clearTimeout(timeout)
          return
        }
      });

  }, [url, loadingThreshold, bypass])
  return { result };
}
