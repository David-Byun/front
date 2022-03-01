import type { NextPage } from "next";

const Create: NextPage = () => {
  return (
    <div className="space-y-5 py-10 px-4">
      <div>
        <label
          htmlFor="price"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <div className="relative flex items-center rounded-md shadow-sm">
          <input
            id="price"
            className="w-full appearance-none rounded-md border border-gray-400 px-3 py-2  placeholder-gray-400 shadow-sm  focus:border-orange-500 focus:outline-none focus:ring-orange-500"
            type="text"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="price"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Price
        </label>
        <div className="relative flex items-center rounded-md shadow-sm">
          <div className="pointer-events-none absolute left-0 flex items-center justify-center pl-3">
            <span className="text-sm text-gray-500">$</span>
          </div>
          <input
            id="price"
            className="w-full appearance-none rounded-md border border-gray-400 px-3 py-2 pl-7 placeholder-gray-400 shadow-sm  focus:border-orange-500 focus:outline-none focus:ring-orange-500"
            type="text"
            placeholder="0.00"
          />
          <div className="pointer-events-none absolute right-0 flex items-center pr-3">
            <span className="text-gray-500">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Description
        </label>

        <textarea
          rows={4}
          className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
        />
      </div>
      <button className="mt-5 w-full flex-1 rounded-md bg-orange-500 py-3 font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2">
        Go live
      </button>
    </div>
  );
};

export default Create;
