import { getUser } from '../../services/auth.js';

const { createContext, useState, useContext } = require('react');

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

const useUser = () => {
  const data = useContext(UserContext);

  if (!data) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return data;
};

export { UserProvider, useUser };
