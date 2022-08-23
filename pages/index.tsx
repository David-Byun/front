import { useEffect, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { NextPage } from "next";
import useSWR from "swr";
import useMutation from "../libs/useMutation";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Home: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();
  const { data, mutate } = useSWR("api/users/me", fetcher);
  const [tweet, { data: tweetData, loading }] = useMutation(
    "api/tweets/register"
  );
  const onValid = (tweetData: any) => {
    if (loading) return;
    tweet(tweetData);
    reset();
  };
  useEffect(() => {
    if (data && data?.ok === false) {
      router.replace("/create-account");
    }
  }, [data, router]);
  useEffect(() => {
    if (tweetData && tweetData.ok) {
      mutate();
    }
  }, [tweetData, mutate]);
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
                <span className="px-2 font-bold text-white">My Tweet</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-16 w-16 rounded-full bg-slate-300" />
              <form className="px-3" onSubmit={handleSubmit(onValid)}>
                <input
                  placeholder="무슨 일이 있나요?"
                  className="rounded-md border-0 bg-black px-3 py-3 text-white"
                  type="text"
                  {...register("tweet")}
                />
                <button className="rounded-md px-3 text-white">Tweet</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="flex flex-col space-y-3 py-3">
            {" "}
            {data?.foundTweet?.map((tweet) => (
              <a
                href={`/tweets/${tweet.id}`}
                key={tweet?.id}
                className="flex items-center space-y-3 border-b-2 py-3 pl-4"
              >
                <div className="h-16 w-16 rounded-full bg-slate-300" />
                <div className=" pl-2">
                  <div className="font-medium text-gray-500">
                    {tweet?.user?.email}
                  </div>
                  <div className="text-white"> {tweet?.tweet}</div>
                  <div className="flex space-x-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    숫자
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    숫자
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    숫자
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
