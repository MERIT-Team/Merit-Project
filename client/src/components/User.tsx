/* eslint-disable @typescript-eslint/no-explicit-any */
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Dialog } from "@headlessui/react";
import axios from "axios";

export default function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [dialCodes, setDialCodes] = useState<any[]>([]);
  const [dialcode, setDialcode] = useState(" ");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  useEffect(() => {
    bla();
  }, []);
  const bla = async () => {
    const response = await axios.get("http://localhost:7777/dial-code");
    const data = await response.data;
    setDialCodes(data);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="fixed top-16 w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full">
            <div className="flex justify-between gap-4 rounded-full border p-2 bg-white w-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                height={25}
                width={20}
                className="ms-2"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  height={25}
                  width={25}
                >
                  <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
                </svg>
              </div>
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <button
                  className="group flex w-full items-center rounded-md px-1 py-1 text-md"
                  onClick={openModal}
                >
                  Log in
                </button>
              </Menu.Item>
              <Menu.Item>
                <button
                  className="group flex w-full items-center rounded-md px-1 py-1 text-md"
                  onClick={openModal}
                >
                  Sign up
                </button>
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                <button className="group flex w-full items-center rounded-md px-1 py-1 text-md">
                  <a href="/Help center">Help Center</a>
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl p-3 bg-white text-left align-middle shadow-xl transition-all">
                    <button onClick={closeModal}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                    <Dialog.Title
                      as="h3"
                      className="text-lg text-center font-bold leading-6 text-gray-900"
                    >
                      Log in or sign up
                    </Dialog.Title>
                    <div className="main">
                      <h2 className="font-bold mb-4">Welcome to MERIT</h2>
                      <div className="input-trans">
                        <label
                          htmlFor="phoneInputNumber"
                          className="block w-full p-3 pl-3 text-sm text-black border border-gray-400 rounded-t-lg bg-gray-50 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white"
                        >
                          <div className="trans-top text-gray-400">
                            Country/Region
                          </div>
                          <div className="text-gray-400 font-bold p-0 m-0">
                            <select
                              name=""
                              id=""
                              className="bg-gray-50 text-base focus:ring-0"
                              value={dialcode}
                              onChange={(e) => setDialcode(e.target.value)}
                            >
                              {dialCodes.map((d, idx) => (
                                <option value={d.dial_code} key={idx}>
                                  {d.name} ({d.dial_code})
                                </option>
                              ))}
                            </select>
                          </div>
                        </label>
                      </div>
                      <div className="input-trans ">
                        <label className="block w-full p-3 pl-3 text-sm text-black border border-gray-400 rounded-b-lg bg-gray-50 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white">
                          <div className="trans text-gray-400 text-base">
                            {dialcode}
                            <input
                              type="text"
                              placeholder="Phone number"
                              className=" bg-gray-50 ms-2 ring-1 ring-white"
                            />
                          </div>
                        </label>
                      </div>
                      <span>
                        We’ll call or text you to confirm your number. Standard
                        message and data rates apply.
                      </span>
                      <button className="btn w-full h-full bg-o rounded-lg">
                        Continue
                      </button>
                    </div>
                    <div className="end">
                      <div className="grid grid-cols-5">
                        <div className="line col-span-2">
                          <hr />
                        </div>
                        <div className="col-span-1 text-center">or</div>
                        <div className="line col-span-2">
                          <hr />
                        </div>
                      </div>
                    </div>
                    <div className="bottom">
                      <button className="w-full border btn-bottom rounded-lg border-black">
                        <a href="http://facebook.com">
                          {" "}
                          <div className="flex justify-between">
                            <div>
                              <AiOutlineFacebook />
                            </div>
                            <div>Continue with facebook</div>
                            <div>{""}</div>
                          </div>
                        </a>
                      </button>
                      <button className="w-full border btn-bottom rounded-lg border-black">
                        <div className="flex justify-between">
                          <div>
                            <FcGoogle />
                          </div>
                          <div>Continue with Google</div>
                          <div>{""}</div>
                        </div>
                      </button>
                      <button className="w-full border btn-bottom rounded-lg border-black">
                        <div className="flex justify-between">
                          <div>
                            <BsApple />
                          </div>
                          <div>Continue with Apple</div>
                          <div>{""}</div>
                        </div>
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    </div>
  );
}
