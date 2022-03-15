import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function userUser() {
  const { data, error } = useSWR("/api/users/me", fetcher);
  const router = useRouter();

  return data;
}
