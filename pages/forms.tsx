import { useForm } from "react-hook-form";

// Less code
// Better validation
// Better Errors (Set, clear, display)
// Have control over inputs
// Dont deal with events
// Easier Inputs

export default function Forms() {
  const { register, watch } = useForm();
  console.log(register("name"));
  console.log(watch());

  return (
    <form>
      <input
        {...register("username")}
        type="text"
        placeholder="Username"
        required
        minLength={5}
      />
      <input {...register("email")} type="email" placeholder="Email" required />
      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        required
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
