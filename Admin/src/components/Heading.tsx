import React from "react";
import { SlPlus } from "react-icons/sl";

export default function Heading({
  title,
  handleShow,
}: {
  title: any;
  handleShow: any;
}) {
  return (
    <>
      <div className=" my-3  content-between items-center">
        <div className="">
          <h1 className="text-xl">{title}</h1>
        </div>
        <div className="py-2 ">
          <button
            className="flex items-center content-center mx-5  py-1 px-1 rounded-full"
            onClick={handleShow}
          >
            Create <SlPlus className="ml-2" />
          </button>
        </div>
      </div>
    </>
  );
}
