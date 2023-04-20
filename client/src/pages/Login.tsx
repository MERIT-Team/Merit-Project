import { AiOutlineFacebook, AiOutlineMail } from "react-icons/ai";
import { BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
function Login() {
  return (
    <>
      <div className="Login">
        <div className="head grid grid-cols-3">
          <div className="col-span-1">
            <button>
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
          </div>
          <div className="col-span-1">
            <p className="text-center font-bold">Log in or sign up</p>
          </div>
        </div>
        <hr />
        <div className="main">
          <h2 className="font-bold mb-4">Welcome to MERIT</h2>
          <div className="input-trans">
            <label
              htmlFor="phoneInputNumber"
              className="block w-full p-3 pl-3 text-sm text-black border border-gray-700 rounded-t-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
            >
              <div className="trans-top text-gray-400 ">Country/Region</div>
            </label>
          </div>
          <div className="input-trans">
            <label
              htmlFor="phoneInputNumber"
              className="block w-full p-3 pl-3 text-sm text-black border border-gray-700 rounded-b-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
            >
              <div className="trans text-gray-400 ">Phone number</div>
            </label>
          </div>
          <span>
            We’ll call or text you to confirm your number. Standard message and
            data rates apply.
          </span>
          <button className="btn w-full h-full bg-pink-500 rounded-lg">
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
          {" "}
          <button className="w-full border btn-bottom rounded-lg border-black">
            <div className="flex justify-between">
              <div>
                <AiOutlineFacebook />
              </div>
              <div>Continue with facebook</div>
              <div>{""}</div>
            </div>
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
          <button className="w-full border btn-bottom rounded-lg border-black">
            <div className="flex justify-between">
              <div>
                <AiOutlineMail />
              </div>
              <div>Continue with Email</div>
              <div>{""}</div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
