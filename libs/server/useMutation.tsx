import { useState } from "react";

interface useMutationState<T> {
  loading: boolean;
  error?: object;
  data?: T;
}

type useMutationResult<T> = [(data: any) => void, useMutationState<T>];

export default function useMutation<T = any>(
  url: string
): useMutationResult<T> {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [data, setData] = useState(undefined);
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
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }
  return [mutation, { loading, error, data }];
}
