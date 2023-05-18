/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Link from "next/link";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function MenuIcon({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) {
  const { currentUser, setCurrentUser } = useCurrentUser();
  const router = useRouter();
  function logout() {
    localStorage.removeItem("token");
    setCurrentUser(undefined);
    router.push({ pathname: "/" });
    toast.warning("Log out");
    setIsOpen(false);
  }

  return (
    <>
      {" "}
      <Transition
        show={isOpen}
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
            {!currentUser ? (
              <>
                <Menu.Item>
                  <Link href="/signinModal">
                    <button className="group flex w-full items-center rounded-md px-1 py-1 text-md">
                      Log in
                    </button>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/signupModal">
                    <button className="group flex w-full items-center rounded-md px-1 py-1 text-md">
                      Sign up
                    </button>
                  </Link>
                </Menu.Item>
              </>
            ) : (
              <>
                <Menu.Item>
                  <button className="group flex w-full items-center rounded-md px-1 py-1 text-md">
                    {currentUser.email}
                  </button>
                </Menu.Item>
                <Menu.Item>
                  <button
                    className="group flex w-full items-center rounded-md px-1 py-1 text-md"
                    onClick={logout}
                  >
                    Log out
                  </button>
                </Menu.Item>
              </>
            )}
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
