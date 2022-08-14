import { setRevalidateHeaders } from "next/dist/server/send-payload";
import { useState } from "react";

interface UseMutationState<T> {
  loading: boolean;
  data?: T;
  error?: object;
}

type UseMutationResult<T> = [(data: any) => void, UseMutationState<T>];

//GET : useSWR 사용

export default function useMutation<T = any>(
  url: string
): UseMutationResult<T> {
  /* const [state, setState] = useState({
    loading: false,
    data: undefined,
    error: undefined,
  }); */
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);
  function mutation(data: any) {
    setLoading(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json().catch(() => {}))
      .then((json) => setData(json))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }
  return [mutation, { loading, data, error }];
}
