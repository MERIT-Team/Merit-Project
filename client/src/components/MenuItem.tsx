/* eslint-disable @typescript-eslint/no-unused-vars */
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Link from "next/link";

export default function MenuIcon() {
  const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    setIsOpen(true);
  }

  return (
    <>
      {" "}
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
              <Link href="/signinModal">
                <button
                  className="group flex w-full items-center rounded-md px-1 py-1 text-md"
                  onClick={openMenu}
                >
                  Log in
                </button>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/signupModal">
                <button
                  className="group flex w-full items-center rounded-md px-1 py-1 text-md"
                  onClick={openMenu}
                >
                  Sign up
                </button>
              </Link>
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
    </>
  );
}