import type { NextPage } from "next";
import Layout from "@components/layout";
import { Stream } from "@prisma/client";
import useSWR from "swr";
import Link from "next/link";
import FloatingButton from "@components/floating-button";

interface StreamsResponse {
  ok: boolean;
  streams: Stream[];
}

const Streams: NextPage = () => {
  const { data } = useSWR<StreamsResponse>(`/api/streams`);
  return (
    <Layout hasTabBar title="Live">
      <div className="space-y-4 divide-y-2 py-10 ">
        {data?.streams.map((stream) => (
          <Link key={stream.id} href={`/streams/${stream.id}`}>
            <a className="block px-4 pt-4">
              <div className="aspect-video w-full rounded-md bg-slate-300 shadow-sm" />
              <h3 className="mt-2 text-lg text-gray-700">{stream.name}</h3>
            </a>
          </Link>
        ))}
        <FloatingButton href="/streams/create">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            ></path>
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Streams;
