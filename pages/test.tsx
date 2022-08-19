import React from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((response) => response.json());

export default function Test() {
  const { data, mutate } = useSWR(
    "https://dogs-api.nomadcoders.workers.dev",
    fetcher
  );
  const onLike = () => mutate({ ...data, isLiked: !data?.isLiked }, false);
  return (
    <div>
      <video src={data?.url} autoPlay loop muted></video>
      <div>
        <button
          onClick={() => {
            mutate("https://dogs-api.nomadcoders.workers.dev");
          }}
        >
          New Dogs
        </button>
      </div>
      <div>
        <button onClick={() => onLike()}>
          {data?.isLiked === false ? "Like" : "UnLike"}
        </button>
      </div>
    </div>
  );
}
