import { NextPage } from "next";

const EditProfile: NextPage = () => {
  return (
    <div className="h-full w-full bg-red-100">
      <div className="mx-3 mt-5 grid grid-cols-3 items-center space-x-7 px-20 py-8">
        <div className="bg-white">
          <h1 className="mt-5 px-3 py-5 text-3xl font-bold">Weather</h1>
          <div className="mt-5 space-y-6 px-3">
            <div className="grid grid-cols-2 items-center rounded-lg border-2 border-gray-700 py-5 shadow-lg">
              <div className="px-3">
                <div className="text-xl font-bold">Casius</div>
                <div className="text-medium font-semibold">Mars, 12AM</div>
              </div>
              <div className="text-3xl font-bold">
                <div className="flex flex-row px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                  <div>85°</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center rounded-lg border-2 border-gray-700 bg-yellow-200 py-5 shadow-lg">
              <div className="px-3">
                <div className="text-xl font-bold">Dlacria</div>
                <div className="text-medium font-semibold">Mars, 12AM</div>
              </div>
              <div className="text-3xl font-bold">
                <div className="flex flex-row px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                  <div>85°</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center rounded-lg border-2 border-gray-700 bg-emerald-300 py-5 shadow-lg">
              <div className="px-3">
                <div className="text-xl font-bold">New York</div>
                <div className="text-medium font-semibold">USA, 12AM</div>
              </div>
              <div className="text-3xl font-bold">
                <div className="flex flex-row px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <div>85°</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center rounded-lg border-2 border-gray-700 bg-orange-600 py-5 text-white shadow-lg">
              <div className="px-3">
                <div className="text-xl font-bold">Zomato</div>
                <div className="text-medium font-semibold">India, 12AM</div>
              </div>
              <div className="text-3xl font-bold">
                <div className="flex flex-row px-3">
                  <svg
                    className="mr-2 h-10 w-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                  <div>20°</div>
                </div>
              </div>
            </div>
          </div>
          <div className="align-center mt-10 mb-10 flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-lg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        <div>
          <div className="py-15 bg-white">
            <div className="px-3 pt-12 text-3xl font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3 h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h1 className="pt-10 text-center text-xl">SIMPLE TAG</h1>
            <div className="mt-2 text-center text-3xl font-bold">
              Work with best desingers
            </div>
            <div className="mt-10 px-3">
              <div className="grid grid-cols-2 ">
                <div className="mr-2 flex justify-center rounded-md border-2 border-gray-700 bg-yellow-500 py-14 text-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="ml-2 flex justify-center rounded-md border-2 border-gray-700 bg-emerald-500 py-14 text-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mx-3 mt-2">
              <div className="grid grid-cols-2 ">
                <div className="mr-2 flex justify-center rounded-md border-2 border-gray-700 bg-pink-400 py-14 text-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="ml-2 flex justify-center rounded-md border-2 border-gray-700 bg-orange-500 py-14 text-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <div className="pb-3">
                <div className="mt-10 rounded-md bg-blue-600 py-3 px-3 text-center font-medium text-white">
                  Let`s get it done
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-yellow-400">
          <div>
            <div className="relative">
              <div className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative top-6 ml-3 h-10 w-10"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                  />
                </svg>
              </div>
            </div>
            <h1 className="mt-5 px-3 py-7 text-center text-3xl font-bold">
              Friends
            </h1>
          </div>
          <div className="px-4">
            <div className="shadow-l2 mb-5 flex items-end justify-between rounded-xl border-2 border-gray-900 bg-white py-2">
              <div className="px-1 text-lg text-gray-800">
                Search with love ...
              </div>
              <div className="px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="flex-cols flex rounded-xl border-2 border-gray-900 bg-white py-2 px-2">
              <div className="rounded-full border-[1px] border-gray-900 py-1 px-1">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://png.pngtree.com/element_our/20190523/ourmid/pngtree-simple-gradient-character-male-design-image_1093388.jpg"
                ></img>
              </div>

              <div className="ml-5 mt-1">
                <div className="text-xl font-extrabold">Bill Rizer</div>
                <div className="text-sm font-medium text-gray-400">
                  Planet Designer
                </div>
              </div>
              <div className="py-3">
                <button className="ml-10 rounded-md border-2 border-gray-900 bg-yellow-300 px-3 shadow-lg">
                  Invite
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="px-4 pt-6">
              <div className="flex-cols flex rounded-xl border-2 border-gray-900 bg-white py-2 px-2">
                <div className="rounded-full border-[1px] border-gray-900 py-1 px-1">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://png.pngtree.com/element_our/20190524/ourmid/pngtree-hand-drawn-minimalist-man-png-element-image_1108551.jpg"
                  ></img>
                </div>
                <div className="ml-4 mt-1">
                  <div className="text-lg font-extrabold">Genbei Yagy</div>
                  <div className="text-sm font-medium text-gray-400">
                    Planet Designer
                  </div>
                </div>
                <div className="py-3">
                  <button className="ml-10 rounded-md border-2 border-gray-900 bg-yellow-300 px-3 shadow-lg">
                    Invite
                  </button>
                </div>
              </div>
            </div>
            <div className="px-4">
              <div className="flex-cols flex rounded-xl border-2 border-gray-900 bg-white py-2 px-2">
                <div className="rounded-full border-[1px] border-gray-900 py-1 px-1">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://png.pngtree.com/element_our/20190530/ourmid/pngtree-hand-painted-color-flat-business-man-free-illustration-image_1251601.jpg"
                  ></img>
                </div>

                <div className="ml-6 mt-1">
                  <div className="text-xl font-extrabold">Lancy Neo</div>
                  <div className="text-sm font-medium text-gray-400">
                    Rogue Corp
                  </div>
                </div>
                <div className="py-3">
                  <button className="ml-10 rounded-md border-2 border-gray-900 bg-yellow-300 px-3 shadow-lg">
                    Invite
                  </button>
                </div>
              </div>
            </div>
            <div className="px-4">
              <div className="flex-cols flex rounded-xl border-2 border-gray-900 bg-white py-2 px-2">
                <div className="rounded-full border-[1px] border-gray-900 py-1 px-1">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://png.pngtree.com/png-vector/20200403/ourmid/pngtree-doctor-wearing-medical-mask-character-illustration-png-image_2170707.jpg"
                  ></img>
                </div>

                <div className="ml-6 mt-1">
                  <div className="text-xl font-extrabold">Bill Rizer</div>
                  <div className="text-sm font-medium text-gray-400">
                    Hard Cops
                  </div>
                </div>
                <div className="ml-4 py-3">
                  <button className="ml-10 rounded-md border-2 border-gray-900 bg-yellow-300 px-3 shadow-lg">
                    Invite
                  </button>
                </div>
              </div>
            </div>
            <div className="pb-10">
              <div className="px-4">
                <div className="flex-cols flex rounded-xl border-2 border-gray-900 bg-white py-2 px-2">
                  <div className="rounded-full border-[1px] border-gray-900 py-1 px-1">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://png.pngtree.com/element_our/20190601/ourmid/pngtree-cartoon-man-free-illustration-image_1332690.jpg"
                    ></img>
                  </div>

                  <div className="ml-7 mt-1">
                    <div className="text-xl font-extrabold">Konami</div>
                    <div className="text-sm font-medium text-gray-400">
                      Xenon Creator
                    </div>
                  </div>
                  <div className="py-3">
                    <button className="ml-10 rounded-md border-2 border-gray-900 bg-yellow-300 px-3 shadow-lg">
                      Invite
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
