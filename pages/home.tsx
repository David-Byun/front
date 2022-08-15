import { useState } from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert("Account created! Please Log in");
  };
  return (
    <div>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="Name">Name: </label>
          <input
            {...register("name", {
              required: "Please write down your name.",
            })}
            type="text"
            id="name"
          />
          {errors?.name?.message}
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            {...register("email", {
              required: "Please write down your email.",
            })}
            type="email"
            id="email"
          />
          {errors?.email?.message}
        </div>
        <button>Create Account</button>
      </form>
    </div>
  );
}
