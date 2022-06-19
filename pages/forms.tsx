import { FieldsErrors, useForm } from "react-hook-form";

export default function Test() {
  const { register, handleSummit } = useForm();
  const onValid = () => {
    console.log("Very good!");
  };
  const onInvalid = () => {
    console.log("cancle plz");
  };
  return (
    <form onSubmit={handleSummit(onValid, onInvalid)}>
      <input
        {...register("email", {
          required: "Plz input email",
          minLength: {
            message: "plz check minLength",
            value: 5,
          },
        })}
        type="email"
        placeholder="input email"
      />
      <input
        {...(register("text"), { required: true })}
        type="text"
        placeholder="input username"
      />
      <input
        {...(register("password"), { required: true })}
        type="password"
        placeholder="input password"
      />
      <input type="submit" placeholder="Create Account" />
    </form>
  );
}
