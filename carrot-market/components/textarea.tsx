import { UseFormRegister } from "react-hook-form";

export default function TextArea({
  //@ts-ignore
  label,
  //@ts-ignore
  name,
  //@ts-ignore
  register,
  ...rest
}) {
  return (
    <div>
      {label ? (
        <label
          htmlFor={name}
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      ) : null}
      <textarea
        id={name}
        className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
        rows={4}
        {...rest}
        {...register}
      />
    </div>
  );
}
