/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dialog } from "@headlessui/react";
import { BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineFacebook } from "react-icons/ai";
import { useState } from "react";

export default function signinModal() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
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
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email address"
            required
          />
        </div>
        <div>
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
            required
          />
        </div>
        <div className="flex items-start">
          <div className="flex items-center my-2 h-5">
            <input
              id="terms"
              aria-describedby="terms"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <div className="ml-3 my-2 text-sm">
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
        </div>
        <button className="btn w-full h-full bg-o rounded-lg">Continue</button>
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
    </>
  );
}
