import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function IndexPage() {
  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onValid = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onValid)} id="form">
      Name:
      <input
        {...register("name", { required: "Please write down your name." })}
        type="text"
      />
      {errors.name?.message}
      <br></br>
      Email :
      <input
        {...register("email", {
          required: "Please write down your email.",
          validate: {
            notNaver: (value) =>
              value.includes("@naver.com")
                ? ""
                : "Only @naver.com email is allowed",
          },
        })}
        placeholder="Only @ naver.com"
        type="email"
      />
      {errors.email?.message}
      <br></br>
      Password :{" "}
      <input
        {...register("password", {
          required: "Please write down your password.",
          minLength: {
            message: "Password has to be more than 10 chars",
            value: 10,
          },
        })}
        type="password"
        placeholder="Min 10 chracters"
        required
      />
      {errors.password?.message}
      <br></br>
      <button type="submit" form="form">
        Log in
      </button>
    </form>
  );
}
