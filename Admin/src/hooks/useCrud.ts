import axios from "axios";
import { useEffect, useState } from "react";

export const useCrud = (path: string) => {
  const [items, SetItems] = useState<any>([]);

  useEffect(() => {
    axios.get("http://localhost:8000/" + path).then((res) => {
      SetItems(res.data);
    });
  }, [path]);

  const deleteItem = (id: string) => {
    axios
      .delete("http://localhost:8000/" + path + "/" + id)
      .then(() => {
        SetItems(items.filter((item: any) => item._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateItem = (id: string) => {
    axios
      .put("http://localhost:8000/" + path + "/" + id)
      .then((res) => {
        SetItems(items.map((item: any) => (item.id === id ? res.data : item)));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createItem = (item: any) => {
    axios
      .post("http://localhost:8000/" + path, [item])
      .then((res) => {
        SetItems([...items, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return { createItem, updateItem, deleteItem, items };
};
