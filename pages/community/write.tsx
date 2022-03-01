import type { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <div className="px-4 py-10">
      <textarea
        rows={4}
        className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
        placeholder="Ask a question!"
      />

      <button className="mt-2 w-full flex-1 rounded-md bg-orange-500 py-3 font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2">
        Submit
      </button>
    </div>
  );
};

export default Write;
