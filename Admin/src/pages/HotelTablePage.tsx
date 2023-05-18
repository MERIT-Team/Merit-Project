import AdminNavbar from "../components/AdminNavbar";
import { useCrud } from "../hooks/useCrud";
import { BsFillTrash3Fill, BsFillPencilFill } from "react-icons/bs";
import { nanoid } from "nanoid";
import { useModal } from "@/Context/ModalContext";
import { useState } from "react";
import HotelAdd from "@/components/hotels/HotelAdd";
import Heading from "@/components/Heading";
import HotelEdit from "@/components/hotels/HotelEdit";
export default function Document() {
  const { setModalContent, setModalTitle, setModalShow } = useModal();
  const { deleteItem, updateItem, items, setItems } = useCrud("hotels");
  const [hotels, setHotel] = useState<any>([]);

  const afterSubmit = (hotel: any) => {
    setModalShow(false);
  };

  const showCreateModal = () => {
    setModalTitle("Hotel Add");
    setModalContent(<HotelAdd afterSubmit={afterSubmit} />);
    setModalShow(true);
  };
  const afterEdit = (hotel: any) => {
    const newHotel = hotels.map((hot: any) => {
      if (hot.id === hotel.id) {
        return hotel;
      }
      return hot;
    });
    setHotel(newHotel);
  };

  const showEditModal = (hotel: any) => {
    setModalContent(<HotelEdit hotels={hotel} afterEdit={afterEdit} />);
    setModalShow(true);
  };

  return (
    <>
      <AdminNavbar />
      <div className="max-w-screen-xl mx-auto mt-5">
        <Heading title="Hotel Table" handleShow={showCreateModal} />
        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="border-rose-500 w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                Hotels
              </caption>
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Hotel name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    day price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    rating
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Parking
                  </th>
                  <th scope="col" className="px-6 py-3">
                    wifi
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr
                    key={nanoid()}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.name}
                    </th>
                    <td className="px-6 py-4">{item.price}</td>
                    <td className="px-6 py-4">{item.rating}</td>
                    <td className="px-6 py-4">{item.parking}</td>
                    <td className="px-6 py-4">{item.wifi}</td>
                    <td className="px-6 py-4 text-right flex contents-center justify-center ">
                      <button>
                        <BsFillPencilFill
                          className="text-lg"
                          onClick={() => {
                            showEditModal;
                          }}
                        />
                      </button>
                      <button className="ms-5">
                        <BsFillTrash3Fill
                          className="trash-icon text-lg"
                          onClick={() => {
                            deleteItem(item._id);
                          }}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
