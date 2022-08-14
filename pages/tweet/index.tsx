import { useEffect, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { NextPage } from "next";
import useUser from "../../libs/useUesr";

const Tweet: NextPage = () => {
  const { user, isLoading } = useUser();
  console.log(user);
  return (
    <div className="flex h-full w-full flex-col bg-black px-4">
      <div className="mt-16">
        <div className="flex flex-col">
          <h5 className="mb-8 text-3xl font-bold text-white">
            지금 일어나고 있는 일
          </h5>
          <h3 className="mb-8 text-3xl text-white">
            오늘 트위터를 이용해보세요.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
