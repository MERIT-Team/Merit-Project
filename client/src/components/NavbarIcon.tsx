import { Menu } from "@headlessui/react";
import MenuIcon from "./MenuItem";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function NavbarIcon() {
  return (
    <>
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
          <MenuIcon />
          <ToastContainer />
        </Menu>
      </div>
    </>
  );
}

export default NavbarIcon;
