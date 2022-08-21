import { useEffect, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { NextPage } from "next";
import Link from "next/link";
import useMutation from "../libs/useMutation";

function cls(...classnames: string[]) {
  return classnames.join(" ");
}

interface EnterForm {
  email: string;
}

interface TokenForm {
  token: string;
}

interface MutationResult {
  ok: boolean;
}

const Home: NextPage = () => {
  const [enter, { loading, data, error }] =
    useMutation<MutationResult>("/api/users/enter");
  const [confirmToken, { loading: tokenLoading, data: tokenData }] =
    useMutation<MutationResult>("/api/users/confirm");
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit } = useForm();
  const { register: tokenRegister, handleSubmit: tokenHandleSubmit } =
    useForm<TokenForm>();
  const onValid = (validForm: EnterForm) => {
    if (loading) return;
    enter(validForm);
  };
  const onTokenValid = (validForm: TokenForm) => {
    console.log(`validForm : ${validForm}`);
    if (tokenLoading) return;
    confirmToken(validForm);
  };
  console.log(loading, data, error);
  const router = useRouter();
  useEffect(() => {
    if (tokenData?.ok) {
      router.push("/me/tweet");
    }
  }, [tokenData, router]);
  return (
    <div className="flex-col px-4 py-4">
      <img
        src="https://www.bworldonline.com/wp-content/uploads/2021/07/Twitter-640x569.jpg"
        height="800"
        width="800"
      />
      <h3 className="mt-8 text-3xl font-medium">
        <svg
          className="h-20 w-20 text-white"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      </h3>
      <div className="mt-16">
        <div className="flex flex-col">
          <h5 className="mb-8 text-3xl font-bold text-white">
            지금 일어나고 있는 일
          </h5>
          <h3 className="mb-8 text-3xl text-white">
            오늘 트위터를 이용해보세요.
          </h3>
          {data?.ok ? (
            <>
              <form
                onSubmit={tokenHandleSubmit(onTokenValid)}
                className="flex flex-col space-y-3"
              >
                <input
                  className="rounded-md border-solid border-sky-400 py-2"
                  placeholder="토큰을 입력해주세요."
                  type="number"
                  {...tokenRegister("token")}
                ></input>
                <button className="rounded-md border-2 border-sky-400 py-2 text-white">
                  {submitting ? "Loading" : "확인"}
                </button>
              </form>
            </>
          ) : (
            <>
              <form
                onSubmit={handleSubmit(onValid)}
                className="flex flex-col space-y-3"
              >
                <input
                  className="rounded-md border-solid border-sky-400 py-2"
                  placeholder="이메일을 입력해주세요"
                  type="email"
                  {...register("email")}
                ></input>
                <button className="rounded-md border-2 border-sky-400 py-2 text-white">
                  {submitting ? "Loading" : "로그인"}
                </button>
              </form>
              <div className="text-lg text-white">처음 이신가요?</div>
              <form className="flex flex-col rounded-md border-2 border-sky-400 py-2 text-white">
                <button type="button" onClick={() => router.push("/register")}>
                  {submitting ? "Loading" : "가입하기"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
