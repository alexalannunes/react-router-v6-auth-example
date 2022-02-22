import { useContext } from "react";
import { AuthContext } from "./context";

export const fakeAuthProvider = {
  isAuthenticated: false,
  signin(callback: VoidFunction) {
    this.isAuthenticated = true;
    window.setTimeout(callback, 1000);
  },
  signout(callback: VoidFunction) {
    this.isAuthenticated = false;
    window.setTimeout(callback, 100);
  },
};
export const useAuth = () => useContext(AuthContext);
