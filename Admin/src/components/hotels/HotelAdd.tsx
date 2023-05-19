import { useCrud } from "@/hooks/useCrud";
import axios from "axios";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        background: "rgba(0,0,0,.3)",
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="spinner">
        <FaSpinner />
      </div>
    </div>
  );
};

export default function HotelAdd({ afterSubmit }: { afterSubmit: any }) {
  const [images, setImages] = useState("");
  const [loading, setLoading] = useState(false);
  const { createItem } = useCrud("hotels");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData.entries());
    createItem(formDataObject);
    afterSubmit(formDataObject);
  };

  const uploadImg = (e: any) => {
    setLoading(true);
    const fd = new FormData();
    fd.append("files", e.target.files[0]);
    axios
      .post("http://localhost:8000/files", fd, {
        headers: {
          "Content-Type": "multipart/x-form-data",
        },
      })
      .then((res) => {
        setImages(res.data[0].secure_url);

        setLoading(false);
      });
  };

  console.log(images);
  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          backgroundColor: "#ccc",
          overflow: "hidden",
          border: "1px solid #f0f0f0",
          position: "relative",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={images}
          alt=""
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src =
              "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png";
          }}
        />
        <input
          type="file"
          name="images"
          onChange={uploadImg}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            opacity: 0,
            cursor: "pointer",
          }}
        />
        {loading && <Loading />}
      </div>
      <div className="relative z-1 w-full mb-6 group">
        <input
          type="text"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="Hotel name"
          required
          name="name"
        />
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="number"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="price"
          required
          name="price"
        />
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="number"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="Hotel Rating"
          required
          max={5}
          name="rating"
        />
      </div>
      <div className="flex">
        <div className="relative z-0 w-full  group">
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              name="wifi"
              value={"true"}
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Wi Fi
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full  group">
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              name="parking"
              value={"true"}
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Parking
            </label>
          </div>
        </div>
      </div>
      <h4>Location</h4>
      <div className="">
        <div className="relative  flex z-0 w-full mb-6 group">
          <div>
            <input
              type="text"
              className=" py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Address"
              required
              name="address"
            />
          </div>
          <div className="ml-5">
            <input
              type="string"
              className="  pl-2.5 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Coordinate"
              required
              name="coordinates"
            />
          </div>
        </div>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="house rule"
          required
          name="houseRules"
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}
