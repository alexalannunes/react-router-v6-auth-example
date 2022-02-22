import { createContext, FC, useState } from "react";
import { fakeAuthProvider } from "./auth";

interface AuthContextType {
  user: any;
  signin: (user: any, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  const signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  const signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  const value = { user, setUser, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
