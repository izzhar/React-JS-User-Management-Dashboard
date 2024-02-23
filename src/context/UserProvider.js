export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));

    return (
      storedUsers || [
        {
          id: 1,
          username: "JohnDoe",
          email: "john.doe@example.com",
          role: "admin",
        },
        {
          id: 2,
          username: "JaneSmith",
          email: "jane.smith@example.com",
          role: "user",
        },
      ]
    );
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUser = (newUser) => {
    const newUserId = uuidv4();
    newUser.id = newUserId;
    setUsers((prevUsers) => [...prevUsers, newUser]);
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
