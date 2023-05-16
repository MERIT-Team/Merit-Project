/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import MenuIcon from "@/components/MenuItem";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import axios from "axios";
import { FC, ReactNode, useEffect } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { currentUser, setCurrentUser } = useCurrentUser();

  useEffect(() => {
    if (!currentUser) {
      axios
        .get("http://localhost:7777/currentUser", {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        })
        .then((res) => {
          setCurrentUser(res.data);
        })
        .catch((error) => {
          console.log("User is not signed in");
        });
    }
  }, []);

  return <>{children}</>;
};
