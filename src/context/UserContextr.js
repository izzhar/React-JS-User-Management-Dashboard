import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();
import { loadState, saveState } from "../utils/LocalStorage";
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(loadState() || []);
  useEffect(() => {
    saveState(users);
  }, [users]);
  const addUser = (newUser) => {
    const newUserId =
      users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1;
    newUser.id = newUserId;
    setUsers([...users, newUser]);
  };

  const editUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? { ...user, ...updatedUser } : user
    );
    setUsers(updatedUsers);
  };

  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <UserContext.Provider value={{ users, addUser, editUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
