import Link from "next/link";
import React from "react";
import { BiWifi } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { CiParking1 } from "react-icons/ci";

export default function Document() {
  return (
    <>
      <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href="#">
          <img
            className="rounded-t-lg"
            src="https://ihotel.mn/img/uploads/hotels/4da47814612c647be298557b187932f6.jpg"
            alt="Ulanbator"
          />
          <div className="p-5">
            <h6 className="mb-1   text-gray-900 ">Улаанбаатар зочид буудал</h6>
            <p className="text-sm items-center gap-x-0.5  flex">
              <MdLocationOn /> Ulaanbaatar, Mongolia
            </p>
            <p className=" text-gray-700 text-slate-600 dark:text-gray-400">
              Price
            </p>
            <div className="flex gap-x-3 ">
              <p className="flex gap-x-0.5 items-center">
                <BiWifi /> Wi fi
              </p>

              <p className="flex gap-x-0.5 items-center">
                <CiParking1 /> Parking
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
