import { useEffect, useState } from "react";

export default function Enter() {
  const [method, setMethod] = useState<"email" | "phone">("email");
  const onEmailClick = () => setMethod("email");
  const onPhoneClick = () => setMethod("phone");
  return (
    <div>
      <h3 className="text-xl font-bold mt-5 mb-5 flex justify-center items-center">
        Enter to Carrot
      </h3>
      <div>
        <h5 className="text-sm font-medium mb-5 flex justify-center items-center text-gray-400">
          Enter Using
        </h5>
        <div className="rounded-full mx-auto flex justify-between items-center">
          <button
            className="ml-2 w-full outline outline-1 outline-gray-300 px-3 py-3"
            onClick={onEmailClick}
          >
            Email
          </button>
          <button
            className="w-full outline outline-1 outline-gray-300 px-3 py-3 mr-2"
            onClick={onPhoneClick}
          >
            Phone
          </button>
        </div>
        <form className="mt-3">
          <label className="font-medium ml-2">
            {method === "email" ? "Email Address" : null}
            {method === "phone" ? "Phone Address" : null}
          </label>
          <div>
            {method === "email" ? (
              <input className="w-full px-3 py-3 mr-3 ml-3" type="email" />
            ) : null}
            {method === "phone" ? (
              <input className="w-full px-3 py-3 mx-2" type="phone" />
            ) : null}
          </div>
        </form>

        <div className="mt-5 flex justify-center items-center ">
          Get Login Link
        </div>
        <div>Or Enter with</div>
        <div>githup/naver</div>
      </div>
    </div>
  );
}
