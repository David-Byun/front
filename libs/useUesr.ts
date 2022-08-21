import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function useUser() {
  const { data, error } = useSWR("/api/users/me", fetcher);
  // const [user, setUser] = useState();
  const router = useRouter();
  useEffect(() => {
    if (data && !data.ok) {
      router.replace("/");
    }
  }, [data, router]);
  // useEffect(() => {
  //   fetch("/api/users/me")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (!data.ok) {
  //         return router.replace("/");
  //       }
  //       setUser(data.profile);
  //     });
  // }, [router]);
  return { user: data?.profile, isLoading: !data && !error };
}
