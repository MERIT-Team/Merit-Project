/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Dialog } from "@headlessui/react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

export default function SigninModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const submitSignin = () => {
    axios
      .post("http://localhost:7777/signin", {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data);
        toast.success("Login success");
        router.push({ pathname: "/" });
        setTimeout(() => {
          setIsOpen(false);
        }, 100);
      })
      .catch((err) => {
        toast.error(err.response.message);
      });
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="fixed top-16 w-56 text-right">
      <>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            open={isOpen}
            onClose={() => setIsOpen(false)}
          >
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
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        submitSignin();
                      }}
                    >
                      <Dialog.Title
                        as="h3"
                        className="text-lg text-center font-bold leading-6 text-gray-900"
                      >
                        Welcome Back !
                      </Dialog.Title>
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Your email
                        </label>
                        <input
                          value={email}
                          type="email"
                          name="email"
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Email address"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          required
                        />
                      </div>
                      <div className="my-3">
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Password"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          required
                        />
                      </div>
                      <div className="flex">
                        <div className="flex items-center my-3 h-5">
                          <input
                            id="terms"
                            aria-describedby="terms"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                            required
                          />
                        </div>
                        <div className="ml-3 my-3 text-sm d-flex">
                          <label
                            htmlFor="terms"
                            className="font-light text-gray-500 dark:text-gray-300"
                          >
                            I accept the{" "}
                            <a
                              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                              href="#"
                            >
                              Terms and Conditions
                            </a>
                          </label>
                        </div>
                        <div className="flex items-center ms-40">
                          <a
                            href="/ForgetModal"
                            className="font-lg text-gray-500 dark:text-gray-300"
                          >
                            Forget Password?
                          </a>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn w-full h-full bg-o rounded-lg"
                      >
                        Continue
                      </button>
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
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        <ToastContainer />
      </>
    </div>
  );
}
