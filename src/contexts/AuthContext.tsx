import { createContext, useContext, useState, PropsWithChildren, useEffect } from 'react';
import { User } from '../types/user.type';
import { getUser, storeUser as asyncStoreUser, removeUser as asyncLogout } from '../lib/async-storage';

interface AuthContextType {
  user: User | null;
  storeUser: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [user, setUser] = useState<User | null>(null);

  const initializeUser = async () => {
    const currentUser = await getUser();
    if (currentUser) {
      setUser(currentUser);
    }
  };

  const storeUser = async (user: User) => {
    setUser(user);
    await asyncStoreUser(user);
  };

  const logout = async () => {
    setUser(null);
    await asyncLogout();
  };

  useEffect(() => {
    initializeUser();
  }, []);

  console.log("user", user);

  return (
    <AuthContext.Provider value={{ user, storeUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
