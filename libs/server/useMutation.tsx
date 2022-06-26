import { useState } from "react";

interface useMutationState {
  loading: boolean;
  error?: object;
  data?: object;
}

type useMutationResult = [(data: any) => void, useMutationState];

export default function useMutation(url: string): useMutationResult {
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
