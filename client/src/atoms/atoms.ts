import { atom } from "recoil";

export const currentUserState = atom({
  key: "User",
  default: undefined,
});
