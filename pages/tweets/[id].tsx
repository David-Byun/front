import { useEffect, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { NextPage } from "next";
import useSWR from "swr";
import useMutation from "../../libs/useMutation";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Tweet: NextPage = () => {
  const router = useRouter();
  const { data, mutate } = useSWR(
    router.query.id ? `/api/tweets/${router.query.id}` : null,
    fetcher
  );
  return (
    <div className="flex  h-full w-full flex-col bg-black px-4">
      <div className="border-b-2 px-4 py-8">
        <div className="flex">
          <div className="flex flex-col">
            <div className="flex flex-col px-3">
              <div className="flex py-5 px-2 text-gray-700">
                <svg
                  className="h-5 w-5 text-white"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span className="px-2 font-bold text-white">Other Tweet</span>
              </div>
            </div>
            <div></div>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center justify-center pl-2">
                <div className="h-16 w-16 rounded-full bg-slate-300" />
                <div className="pl-3 font-medium text-gray-500">
                  {data?.otherTweet?.user?.email}
                  <div className="px-3 text-white">
                    {data?.otherTweet?.tweet}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
