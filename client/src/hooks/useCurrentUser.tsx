import { currentUserState } from "@/atoms/atoms";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

  useEffect(() => {
    console.log("currentUser:", currentUser);
  }, [currentUser]);
  return { currentUser, setCurrentUser };
};
